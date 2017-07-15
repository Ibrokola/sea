from django.test import TestCase
from django.contrib.auth.models import AnonymousUser
from .models import Post, Vote, Comment


from django.conf import settings

User = settings.AUTH_USER_MODEL


# class DiscussionTests(TestCase):
#     def setUp(self):
#         self._create_users()
        
#     def _create_users(self):
#         self.ibro = User.objects.create_user(
#             username="ibro", password="very_secretive")
#         self.babs = User.objects.create_user(
#             username="babs", password="very_secretive")
#         self.jide = User.objects.create_user(
#             username="jide", password="very_secretive")

#     def new_discussion(self, user, title):
#         post = Post(title=title,
#             text="Does not matter",
#             author=user)
#         post.save()
#         return post

#     def test_I_cant_vote_for_me(self):
#         post = self.new_discussion(self.ramesh, "Ibro's Biography")
#         self.assertEquals(post.upvotes, 0)
#         post.upvote(self.ibro)
#         post = Post.objects.get(pk=post.id)
#         self.assertEquals(post.upvotes, 0)


#     def test_double_voting(self):
#         post = self.new_discussion(self.ramesh, "Ibro's Biography")
#         self.assertEquals(post.upvotes, 0)
#         post.upvote(self.babs)
#         post = Post.objects.get(pk=post.id)
#         self.assertEquals(post.upvotes, 1)
#         post.upvote(self.babs)
#         post = Post.objects.get(pk=post.id)
#         self.assertEquals(post.upvotes, 1)

#     def test_voting_on_home_page(self):
#         # Ibro starts a discussion
#         post = self.new_discussion(self.ibro, "Ibro's Biography")

#         # Then Babs views home page
#         posts = Post.objects.recent_posts_with_my_votes()
#         self.assertEquals(len(posts), 1)
#         post = posts.first()
#         self.assertEquals(post.upvotes, 0)
#         self.assertEquals(post.downvotes, 0)

#         # Babs upvotes the post
#         post.upvote(self.babs)

#         # Home page as seen by Amit
#         post = Post.objects.recent_posts_with_my_votes(self.amit).first()
#         self.assertTrue(post.is_upvoted)
#         self.assertFalse(post.is_downvoted)
#         self.assertEquals(post.upvotes, 1)
#         self.assertEquals(post.downvotes, 0)

#         # Jide downvotes
#         post.downvote(self.jide)

#         # Home page as seen by Jide
#         post = Post.objects.recent_posts_with_my_votes(self.jide).first()
#         self.assertFalse(post.is_upvoted)
#         self.assertTrue(post.is_downvoted)
#         self.assertEquals(post.upvotes, 1)
#         self.assertEquals(post.downvotes, 1)
        
#         # babs undo's his vote
#         post.undo_vote(self.babs)

#         # Home page as seen by Babs
#         post = Post.objects.recent_posts_with_my_votes(self.babs).first()
#         self.assertFalse(post.is_upvoted)
#         self.assertFalse(post.is_downvoted)
#         self.assertEquals(post.upvotes, 0)
#         self.assertEquals(post.downvotes, 1)

#     def test_comments_ordering(self):
#         _c1 = "See my Biography!"
#         _c2 = "Dude, this is terrible!"
#         _c3 = "Why write your biography when you haven't achieved a thing!"
#         _c4 = "Seriously, that's all you have to say?"

#         post = self.new_discussion(self.ibro, "Ibro's Biography")
#         self.assertEquals(post.num_comments, 0)

#         ibros_comment = post.add_comment(_c1, self.ibro)
#         babs_comment = ibros_comment.reply(_c2, self.babs)
#         jides_comment = ibros_comment.reply(_c3, self.jide)
#         ibros_response = babss_comment.reply(_c4, self.ibro)

#         comments = [c.text for c in 
#                     Comment.objects.best_ones_first(post.id, self.ramesh.id)]

#         self.assertEquals(comments, [_c1, _c2, _c4, _c3])

#         # check if num_comments in post object is updated
#         post = Post.objects.get(pk=post.id)
#         self.assertEquals(post.num_comments, 4)
