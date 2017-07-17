from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.contrib.auth import get_user_model

from django.http import HttpResponse, HttpResponseRedirect

from django.shortcuts import render, get_object_or_404
from django.views import View


from .models import UserProfile as Profile


User = get_user_model()
# User = settings.AUTH_USER_MODEL


class ProfileUserView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        user = get_object_or_404(User, username=request.user)
        # post = Post.objects.get_post_started_by_me(post_id, user=user)
        profile, created = Profile.objects.get_or_create(user=user)
        template = 'profiles/profile_user.html'
        context = {
            'profile': profile,
            # 'post': post,
            }
        return render(request, template, context)


class ProfileView(LoginRequiredMixin, View):
    def get(self, request, username, *args, **kwargs):
        user = get_object_or_404(User, username=username)
        profile, created = Profile.objects.get_or_create(user=user)
        template = 'users/profile_view.html'
        context = {'profile': profile}
        return render(request, template, context)


class ProfileEditView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        user = request.user
        # form = ProfileEditForm(initial={"user": user})
        profile, created = Profile.objects.get_or_create(user)
        template = 'profiles/profile_edit.html'
        context = {"form": form}
        return render(request, template, context)

    def post(self, request, *args, **kwargs):
        form = ProfileEditForm(request.POST or None, request.FILES or None, instance=profile)
        template = 'profiles/profile_edit.html'
        context = {"form": form}
        if form.is_valid():
            instance = form.save(commit=False)
            instance.user = request.user
            instance.save()
            return HttpResponseRedirect('profile_user')
            profile_update = reverse('profile')
        else:
            return render(request, template, context)