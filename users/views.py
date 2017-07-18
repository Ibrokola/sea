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


class ProfileUserView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        user = get_object_or_404(User, username=request.user)
        post = Post.objects.filter(author__username__iexact=user).order_by('-submission_time')
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
        post = Post.objects.filter(author__username__iexact=user).order_by('-submission_time')
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