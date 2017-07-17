from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.contrib.contenttypes.models import ContentType

from django.db.models import F

from django.forms.models import model_to_dict

from django.http import HttpResponse, HttpResponseRedirect
from django.views import View

from django.views.decorators.http import require_http_methods
from django.shortcuts import render, get_object_or_404
from users.models import UserProfile as Profile



from django.core.urlresolvers import reverse
from django.utils.decorators import method_decorator

from .forms import CommentForm, StartDiscussionForm
from .models import Post, Vote, Comment, Favourite

# Discussion View, renders the discussion/topic posting to the author/other users
@method_decorator(login_required, name='post')
class DiscussionView(View):
    def get(self, request, post_id, *args, **kwargs):
        # post_slug = self.kwargs.get('slug')
    	# logic to render if requested user is authenticated
        if request.user.is_authenticated():
            post = Post.objects.get_post_with_my_votes(post_id, request.user)
            comments = Comment.objects.best_ones_first(post_id, request.user.id)
            # profile = Profile.objects.
            form = CommentForm()
            context = {"post": post, "comments": comments, "form": form}
            return render(request, "forum/discussion.html", context)
        else:
            return HttpResponseRedirect(reverse('account_login'))

    def post(self, request, post_id):
        user = request.user
        post = Post.objects.get_post_with_my_votes(post_id, user)
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = post.add_comment(form.cleaned_data['text'], user)
            post_url = reverse('forum:discussion', args=[post.id])
            return HttpResponseRedirect(post_url)
        else:
            template = 'forum/discussion.html'
            context = {
                "post": post,
                "form": form,
                "comments": []
            }
            return render(request, template, context)


class ReplyToComment(LoginRequiredMixin, View):
	def get(self, request, *args, **kwargs):
		form = CommentForm()
		parent_comment = get_object_or_404(Comment, pk=kwargs['id'])
		post = parent_comment.post
		template = 'forum/reply_to_comment.html'
		context = {
			"post": post,
			"parent_comment": parent_comment,
			"form": form
		}
		return render(request, template, context)

	def post(self, request, *args, **kwargs):
		parent_comment = get_object_or_404(Comment, pk=kwargs['id'])
		form = CommentForm(request.POST)
		if not form.is_valid():
			post = parent_comment.post
			template = 'forum/reply_to_comment.html'
			context = {
				"post": post,
				"parent_comment": parent_comment,
				"form": form
			}
			return render(request, template, context)
		comment = parent_comment.reply(form.cleaned_data['text'], request.user)
		post_url = reverse('forum:discussion', args=[parent_comment.post.id, parent_comment.post_slug])
		return HttpResponseRedirect(post_url)



class EditComment(LoginRequiredMixin, View):
	def get(self, request, *args, **kwargs):
		comment = get_object_or_404(Comment, pk=kwargs['id'])
		form = CommentForm(instance=comment)
		template = 'forum/edit_comment.html'
		context = {"form": form}
		return render(request, template, context)


class StartDiscussionView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        user = request.user
        form = StartDiscussionForm(initial={"author": user})
        template = 'forum/start.html'
        context = {"form": form}
        return render(request, template, context)

    def post(self, request, *args, **kwargs):
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


