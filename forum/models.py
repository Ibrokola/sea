from collections import defaultdict
from django.conf import settings
from django.contrib import messages
from django.contrib.auth.models import AbstractUser
from django.contrib.contenttypes.fields import GenericRelation, GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.core.validators import MinValueValidator, MaxValueValidator
from users.models import MyUser as User

from django.db.models.signals import pre_save, post_save
from django.core.urlresolvers import reverse
from .utils import unique_slug_generator
from django.db import models
from django.db.models import F

from pushnote.models import Subscription


SERVER_URL = "https://sustenergy.herokuapp.com/"

UPVOTE = 1
DOWNVOTE = 2
FLAG = 3
 

class Vote(models.Model):
    class Meta:
        db_table = "votes"
        index_together = [
            ["content_type", "object_id"],
        ]

    # The following 3 fields represent the Comment or Post
    # on which a vote has been cast
    # See Generic Relations in Django's documentation
    content_type = models.ForeignKey(ContentType, on_delete=models.PROTECT)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    voter = models.ForeignKey(User, on_delete=models.PROTECT)
    type_of_vote = models.IntegerField(choices = (
            (UPVOTE, 'Upvote'),
            (DOWNVOTE, 'Downvote'),
            (FLAG, 'Flag'),
        ))
    submission_time = models.DateTimeField(auto_now_add=True)

class Votable(models.Model):
    """ An object on which people would want to vote
        Post and Comment are concrete classes
    """
    class Meta:
        abstract = True

    votes = GenericRelation(Vote)
    author = models.ForeignKey(User, on_delete=models.PROTECT)

    # denormalization to save database queries
    # flags = count of votes of type "Flag"
    upvotes = models.IntegerField(default=0)
    downvotes = models.IntegerField(default=0)
    flags = models.IntegerField(default=0)

    def upvote(self, user):
        self._vote(user, UPVOTE)

    def downvote(self, user):
        self._vote(user, DOWNVOTE)

    def flag(self, user):
        self._vote(user, FLAG)

    def unflag(self, user):
        raise Exception("not yet implemented")

    def undo_vote(self, user):
        content_type = ContentType.objects.get_for_model(self)
        votes = Vote.objects.filter(content_type=content_type.id,
            object_id=self.id, type_of_vote__in=(UPVOTE, DOWNVOTE),
            voter=user)

        upvotes = 0
        downvotes = 0
        for v in votes:
            if v.type_of_vote == UPVOTE:
                upvotes = upvotes + 1
            elif v.type_of_vote == DOWNVOTE:
                downvotes = downvotes + 1
            else:
                raise Exception("Invalid state, logic bug in undo_vote")
            v.delete()

        self.upvotes = F('upvotes') - upvotes
        self.downvotes = F('downvotes') - downvotes
        self.save(update_fields=["upvotes", "downvotes"])

        # Increment/Decrement the score of author
        self.author.score = F('score') - upvotes + downvotes
        self.author.save(update_fields=["score"])

    def _vote(self, user, type_of_vote):
        content_type = ContentType.objects.get_for_model(self)
        if self._already_voted(user, content_type, type_of_vote):
            return
        elif self._voting_for_myself(user):
            return

        # First, save the vote
        vote = Vote(content_object=self, voter=user,
            type_of_vote=type_of_vote)
        vote.save()

        score_delta = 0
        # Next, update our denormalized columns
        if type_of_vote == FLAG:
            self.flags = F('flags') + 1
        elif type_of_vote == UPVOTE:
            self.upvotes = F('upvotes') + 1
            score_delta = 1
        elif type_of_vote == DOWNVOTE:
            self.downvotes = F('downvotes') + 1
            score_delta = -1
        else:
            raise Exception("Invalid type of vote " + type_of_vote)
        self.save(update_fields=["upvotes", "downvotes", "flags"])

        # Increment/Decrement the score of author
        self.author.score = F('score') + score_delta
        self.author.save(update_fields=["score"])

    def _voting_for_myself(self, user):
        return self.author.id == user.id

    def _already_voted(self, user, content_type, type_of_vote):
        return Vote.objects.filter(content_type=content_type.id,
                    object_id=self.id,\
                    voter=user, type_of_vote=type_of_vote)\
                .exists()



class PostsManager(models.Manager):
    def get_post_with_my_votes(self, post_id, user):
        post = Post.objects\
            .annotate(score=F('upvotes') - F('downvotes'))\
            .select_related("author").get(pk=post_id)

        if user and user.is_authenticated():
            content_type = ContentType.objects.get_for_model(Post)
            post_votes = Vote.objects.filter(content_type=content_type.id,
                object_id=post_id, type_of_vote__in=(UPVOTE, DOWNVOTE),
                voter=user)

            for v in post_votes:
                if v.type_of_vote == UPVOTE:
                    post.is_upvoted = True
                elif v.type_of_vote == DOWNVOTE:
                    post.is_downvoted = True
        return post

    def recent_posts_with_my_votes(self, user=None):
        posts = Post.objects\
            .annotate(score=F('upvotes') - F('downvotes'))\
            .select_related("author")\
            .order_by("-submission_time")[:50]
        if user:
            posts = self._append_votes_by_user(posts, user)
        return posts

    def _append_votes_by_user(self, posts, user):
        # Returns a dictionary
        # key = postid
        # value = set of votes cast by this user
        # for example set('downvote', 'flag')
        post_ids = [p.id for p in posts]
        post_type = ContentType.objects.get_for_model(Post)
        objects = Vote.objects.\
                    only('object_id', 'type_of_vote').\
                    filter(content_type=post_type.id,
                        object_id__in=post_ids,
                        voter=user)

        votes_by_post = defaultdict(set)
        for obj in objects:
            votes_by_post[obj.object_id].add(obj.type_of_vote)

        for post in posts:
            post.is_upvoted = False
            post.is_downvoted = False
            if UPVOTE in votes_by_post[post.id]:
                post.is_upvoted = True
            elif DOWNVOTE in votes_by_post[post.id]:
                post.is_downvoted = True
            elif FLAG in votes_by_post[post.id]:
                post.is_flagged = True

        return posts

    def vote_type_to_string(self, vote_type):
        mapping = {
            UPVOTE: "upvote",
            DOWNVOTE: "downvote",
            FLAG: "flag"
        }
        return mapping[vote_type]


class Post(Votable):
    class Meta:
        db_table = "posts"
        index_together = [
            ["submission_time",],
        ]
    objects = PostsManager()
    title = models.CharField(max_length=120)
    slug = models.SlugField(null=True, blank=True)
    # url = models.URLField(blank=True)
    text = models.TextField(blank=True)
    submission_time = models.DateTimeField(auto_now_add=True)
    num_comments = models.IntegerField(default=0)
    # views = models.IntegerField(default=0)

    # def get_absolute_url(self):
    #     return "/discuss/%i/" % self.id

    def get_absolute_url(self):
        # return reverse('forum:discussion', kwargs={"post_id": self.pk, "post_slug": self.slug})
        return reverse('forum:discussion', kwargs={"post_id": self.pk})

    def add_comment(self, text, author, *args, **kwargs):
        comment = Comment()
        comment.text = text
        comment.post = self
        comment.wbs = _find_next_wbs(self)
        comment.author = author
        comment.save()

        self.num_comments = F('num_comments') + 1
        self.save(update_fields=["num_comments"])
        
        if(self.author.username != author.username):
            notify_users(
                    [self.author],
                    "%s commented on your post" % author.username,
                    comment.text,
                    reverse("forum:reply_to_comment", args=[comment.id])
                )

        return comment

    def __str__(self):
        return self.title

def post_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(post_pre_save_receiver, sender=Post)


class CommentsManager(models.Manager):
    def best_ones_first(self, post_id, user_id):
        comment_type = ContentType.objects.get_for_model(Comment)

        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT c.id, c.text, u.id, u.username, c.submission_time,
                c.wbs, length(c.wbs)/5 as indent,
                c.upvotes, c.downvotes, c.flags,
                c.upvotes - c.downvotes as score,
                up.is_upvoted, down.is_downvoted
                FROM comments c
                INNER JOIN users u on c.author_id = u.id
                LEFT OUTER JOIN (
                    SELECT 1 as is_upvoted, v1.object_id as comment_id
                    FROM votes v1
                    WHERE v1.content_type_id = %s
                    AND type_of_vote = 1
                    AND v1.voter_id = %s
                ) up on c.id = up.comment_id
                LEFT OUTER JOIN (
                    SELECT 1 as is_downvoted, v2.object_id as comment_id
                    FROM votes v2
                    WHERE v2.content_type_id = %s
                    AND type_of_vote = 2
                    AND v2.voter_id = %s
                ) down on c.id = down.comment_id
                WHERE c.post_id = %s
                ORDER BY c.wbs
            """, [comment_type.id, user_id,
                    comment_type.id, user_id,
                    post_id])

            comments = []
            for row in cursor.fetchall():
                comment = self.model(
                        id = row[0], text = row[1],
                        submission_time = row[4],
                        wbs = row[5],
                        upvotes = row[7], downvotes=row[8],
                        flags = row[9]
                    )
                author = User(id=row[2], username=row[3])
                comment.author = author
                comment.indent = row[6]
                comment.score = row[10]
                comment.is_upvoted = True if row[11] else False
                comment.is_downvoted = True if row[12] else False
                comments.append(comment)

            return comments

class Comment(Votable):
    class Meta:
        db_table = "comments"
        unique_together = [
            ["post", "wbs"],
        ]
    objects = CommentsManager()

    post = models.ForeignKey(Post, related_name="comments")
    parent_comment = models.ForeignKey('self', 
                null=True, blank=True,
                on_delete=models.PROTECT)
    text = models.TextField()
    submission_time = models.DateTimeField(auto_now_add=True)
    # num_reply = models.IntegerField(default=0)
    
    # wbs helps us to track the comments as a tree
    # Format is .0000.0000.0000.0000.0000.0000
    # This means that:
    # 1. We only allow 9999 comments at each level
    # 2. We allow threaded comments upto 6 levels
    wbs = models.CharField(max_length=30)

    def reply(self, text, author):
        comment = Comment()
        comment.text = text
        comment.post = self.post
        comment.parent_comment = self
        comment.wbs = _find_next_wbs(self.post, parent_wbs=self.wbs)
        comment.author = author
        comment.save()

        comment.post.num_comments = F('num_comments') + 1
        comment.post.save()
        
        #Gives sum of replies to parent comment
        # self.num_reply = F('num_reply') + 1
        # self.save(update_fields=["num_reply"])

        if(comment.post.author.username != author.username):
            notify_users(
                    [comment.post.author],
                    "%s commented on your post" % comment.author.username,
                    comment.text,
                    reverse("forum:reply_to_comment", args=[comment.id])
                )

        if(comment.parent_comment.author.username != author.username):
            notify_users(
                    [comment.parent_comment.author],
                    "%s replied to your comment" % comment.author.username,
                    comment.text,
                    reverse("forum:reply_to_comment", args=[comment.id])
                )

        return comment

    def __str__(self):
        return self.text

def _find_next_wbs(post, parent_wbs=None):
    if not parent_wbs:
        parent_wbs = ""

    from django.db import connection
    with connection.cursor() as c:
        c.execute("""
            SELECT max(wbs) as wbs from comments 
            WHERE post_id = %s and wbs like %s
            and length(wbs) = %s
            ORDER BY wbs desc
            limit 1
            """, 
            [post.id, parent_wbs + ".%", len(parent_wbs) + 5]
        )
        try:
            row = c.fetchone()
            max_wbs = row[0]
        except:
            max_wbs = None

    if not max_wbs:
        return "%s.%s" % (parent_wbs, "0000")
    else:
        first_wbs = max_wbs[:-4]
        last_wbs = max_wbs.split(".")[-1]
        next_wbs = int(last_wbs) + 1
        return first_wbs + '{0:04d}'.format(next_wbs)

def notify_users(users, title, body, relative_link):
    for user in users:
        for subscription in user.subscriptions.all():
            subscription.send_notification(
                title,
                {
                    "body": body,
                    "icon": "/apple-icon-120x120.png",
                    "badge": "/android-icon-96x96.png",
                    "data": {
                        "link": "%s%s" % (SERVER_URL, relative_link)
                    }
                }
            )

class Favourite(models.Model):
    class Meta:
        # Yes, I use Queen's english
        db_table = "favourites"

    # The following 3 fields represent the Comment or Post
    # which has been favourited
    # See Generic Relations in Django's documentation
    content_type = models.ForeignKey(ContentType, on_delete=models.PROTECT)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    favourited_on = models.DateTimeField(auto_now_add=True)
    deleted_on = models.DateTimeField(blank=True, null=True)