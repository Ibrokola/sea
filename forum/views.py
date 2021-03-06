from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required
from django.contrib.contenttypes.models import ContentType
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from django.db.models import F

from django.forms.models import model_to_dict
from django.views.generic import View

from django.shortcuts import render, get_object_or_404

from users.models import User

from django.core.urlresolvers import reverse
from django.utils.decorators import method_decorator
# from notify.signals import notify
from notifications.signals import notify


from .forms import CommentForm, StartDiscussionForm
from .models import Post, Vote, Comment, Favourite


# Discussion View, renders the discussion/topic posting to the author/other users
# @method_decorator(login_required, name='post')
class DiscussionView(View):
    def get(self, request, post_id, *args, **kwargs):
        # post_slug = self.kwargs.get('slug')
    	# logic rendered if user requesting access is authenticated
        if request.user.is_authenticated():
            post = Post.objects.get_post_with_my_votes(post_id, request.user)
            comments = Comment.objects.best_ones_first(post_id, request.user.id)
            side1 = Post.objects.filter(num_comments__gte=10)[:5]
            side2 = Post.objects.order_by('-submission_time')[:5]
            form = CommentForm()
            context = {
                "post": post, 
                "comments": comments, 
                "form": form,
                "side1": side1,
                "side2": side2
            }
            return render(request, "forum/discussion.html", context)
        else:
            return HttpResponseRedirect(reverse('account_login'))

    def post(self, request, post_id):
        # user = request.user
        post = Post.objects.get_post_with_my_votes(post_id, request.user)
        form = CommentForm(request.POST)
        # notification_count = request.user.notifications.count()
        if form.is_valid():
            comment = post.add_comment(form.cleaned_data['text'], request.user)
            notify.send(request.user, recipient=post.author, verb='commented on your post', target=post)
            post_url = reverse('forum:discussion', args=[post.id])
            return HttpResponseRedirect(post_url)
        else:
            template = 'forum/discussion.html'
            context = {
                "post": post,
                "form": form,
                "comments": [],
                # "notification_count": notification_count
            }
            return render(request, template, context)


class ReplyToComment(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        form = CommentForm()
        parent_comment = get_object_or_404(Comment, pk=kwargs['id'])
        side1 = Post.objects.filter(num_comments__gte=10)[:5]
        side2 = Post.objects.order_by('-submission_time')[:5]
        post = parent_comment.post
        template = 'forum/reply_to_comment.html'
        context = {
            "post": post,
            "parent_comment": parent_comment,
            "form": form,
            "side1": side1,
            "side2": side2
        }
        return render(request, template, context)

    def post(self, request, *args, **kwargs):
        parent_comment = get_object_or_404(Comment, pk=kwargs['id'])
        form = CommentForm(request.POST)
        # notification_count = request.user.notifications.count()
        if not form.is_valid():
            post = parent_comment.post
            template = 'forum/reply_to_comment.html'
            context = {
                "post": post,
                "parent_comment": parent_comment,
                "form": form,
                # "notification_count":notification_count
            }
            return render(request, template, context)
        comment = parent_comment.reply(form.cleaned_data['text'], request.user)
        notify.send(request.user, recipient=parent_comment.author, verb='replied to your comment', target=parent_comment.post)
        post_url = reverse('forum:discussion', args=[parent_comment.post.id])
        return HttpResponseRedirect(post_url)



class EditComment(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        comment = get_object_or_404(Comment, pk=kwargs['id'])
        form = CommentForm(instance=comment)
        side1 = Post.objects.filter(num_comments__gte=10)[:5]
        side2 = Post.objects.order_by('-submission_time')[:5]
        template = 'forum/edit_comment.html'
        context = {
            "form": form,
            "side1": side1,
            "side2": side2
        }
        return render(request, template, context)
    
    def post(self, request, *args, **kwargs):
        comment = get_object_or_404(Comment, pk=kwargs['id'])
        form = CommentForm(request.POST, instance=comment)

        if not form.is_valid():
            context = {"form": form}
            return render(request, "edit-comment.html", context=context)
        else:
            form.save()
        post_url = reverse('forum:discussion', args=[comment.post.id])
        return HttpResponseRedirect(post_url)


class StartDiscussionView(LoginRequiredMixin, View):
        def get(self, request, *args, **kwargs):
            user = request.user
            form = StartDiscussionForm(initial={"author": user})
            side1 = Post.objects.filter(num_comments__gte=10)[:5]
            side2 = Post.objects.order_by('-submission_time')[:5]
            template = 'forum/start.html'
            context = {
                "form": form,
                "side1": side1,
                "side2": side2
            }
            return render(request, template, context)

        def post(self, request, *args, **kwargs):
            if request.user.is_authenticated():
                # post_slug = self.kwargs.get('slug')
                form = StartDiscussionForm(request.POST)
                template = 'forum/start.html'
                context = {"form": form}
                if form.is_valid():
                    post = form.save(commit=False)
                    post.author = request.user
                    post.save()
                    new_post_url = reverse('forum:discussion', args=[post.id])
                    return HttpResponseRedirect(new_post_url)
                else:
                    return render(request, template, context)
            else:
                return HttpResponseRedirect(reverse('account_login'))



@login_required
@require_http_methods(['POST'])
def upvote_post(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    post.upvote(request.user)
    return HttpResponse('OK')



@login_required
@require_http_methods(['POST'])
def downvote_post(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    post.downvote(request.user)
    return HttpResponse('OK')

 

@login_required
@require_http_methods(['POST'])
def undo_vote_on_post(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    post.undo_vote(request.user)
    return HttpResponse('OK')



@login_required
@require_http_methods(['POST'])
def upvote_comment(request, comment_id):
    comment = get_object_or_404(Comment, pk=comment_id)
    comment.upvote(request.user)
    return HttpResponse('OK')



@login_required
@require_http_methods(['POST'])
def downvote_comment(request, comment_id):
    comment = get_object_or_404(Comment, pk=comment_id)
    comment.downvote(request.user)
    return HttpResponse('OK')


@login_required
@require_http_methods(['POST'])
def undo_vote_on_comment(request, comment_id):
    comment = get_object_or_404(Comment, pk=comment_id)
    comment.undo_vote(request.user)
    return HttpResponse('OK')