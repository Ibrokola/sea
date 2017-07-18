from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.contrib.auth import get_user_model

from django.http import HttpResponse, HttpResponseRedirect

from django.shortcuts import render, get_object_or_404
from django.views import View
from django.core.urlresolvers import reverse


from .models import UserProfile as Profile

from .forms import ProfileEditForm

from forum.models import Post

User = get_user_model()
# User = settings.AUTH_USER_MODEL


class ProfileUserView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        user = get_object_or_404(User, username=request.user)
        post = Post.objects.filter(author__username__iexact=user)
        profile, created = Profile.objects.get_or_create(user=user)
        template = 'users/profile_user.html'
        context = {
            'profile': profile,
            'post': post,
            }
        return render(request, template, context)


class ProfileView(LoginRequiredMixin, View):
    def get(self, request, username, *args, **kwargs):
        user = get_object_or_404(User, username=username)
        post = Post.objects.filter(author__username__iexact=user)
        print(post)
        profile, created = Profile.objects.get_or_create(user=user)
        template = 'users/profile_view.html'
        context = {
            'profile': profile,
            'post': post
            }
        return render(request, template, context)


class ProfileEditView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        profile, created = Profile.objects.get_or_create(user=request.user)
        form = ProfileEditForm()
        # profile, created = Profile.objects.get_or_create(user)
#         user = request.user
#         # form = ProfileEditForm(initial={"user": user})
#         profile, created = Profile.objects.get_or_create(user)
        template = 'users/profile_edit.html'
        context = {"form": form}
        return render(request, template, context)

    def post(self, request, *args, **kwargs):
        # profile = get_object_or_404(Profile, pk='id')
        profile, created = Profile.objects.get_or_create(user=request.user)
        form = ProfileEditForm(request.POST or None, request.FILES or None, instance=profile)
        template = 'users/profile_edit.html'
        context = {"form": form}
        if form.is_valid():
            instance = form.save(commit=False)
            instance.user = request.user
            instance.save()
            profile_update = reverse('users:profile_user')
            return HttpResponseRedirect(profile_update)
            # return HttpResponseRedirect('profile_user')
        else:
            return render(request, template, context)


# class EditComment(LoginRequiredMixin, View):
#     def get(self, request, *args, **kwargs):
#         comment = get_object_or_404(Comment, pk=kwargs['id'])
#         form = CommentForm(instance=comment)
#         side1 = Post.objects.filter(num_comments__gte=10)[:5]
#         side2 = Post.objects.order_by('-submission_time')[:5]
#         template = 'forum/edit_comment.html'
#         context = {
#             "form": form,
#             "side1": side1,
#             "side2": side2
#         }
#         return render(request, template, context)
    
#     def post(self, request, *args, **kwargs):
#         comment = get_object_or_404(Comment, pk=kwargs['id'])
#         form = CommentForm(request.POST, instance=comment)

#         if not form.is_valid():
#             context = {"form": form}
#             return render(request, "edit-comment.html", context=context)
#         else:
#             form.save()
#         post_url = reverse('forum:discussion', args=[comment.post.id])
#         return HttpResponseRedirect(post_url)


# class ProfileEditView(LoginRequiredMixin, View):
#     def get(self, request, *args, **kwargs):
#         user = request.user
#         # form = ProfileEditForm(initial={"user": user})
#         profile, created = Profile.objects.get_or_create(user)
#         template = 'profiles/profile_edit.html'
#         context = {"form": form}
#         return render(request, template, context)

#     def post(self, request, *args, **kwargs):
#         form = ProfileEditForm(request.POST or None, request.FILES or None, instance=profile)
#         template = 'profiles/profile_edit.html'
#         context = {"form": form}
#         if form.is_valid():
#             instance = form.save(commit=False)
#             instance.user = request.user
#             instance.save()
#             return HttpResponseRedirect('profile_user')
#             profile_update = reverse('profile')
#         else:
#             return render(request, template, context)