from django.contrib.auth import get_user_model

from django.contrib.auth.mixins import LoginRequiredMixin

from django.http import HttpResponseRedirect

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from django.shortcuts import render, get_object_or_404

from django.core.urlresolvers import reverse

from django.views.generic import View

from forum.models import Post

from .models import Profile



from .forms import ProfileEditForm


User = get_user_model()


class ProfileUserView(View):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated():
            user = get_object_or_404(User, username=request.user.profile)
            # user = User.objects.get(username=request.user)
            post_list = Post.objects.filter(author__username__iexact=user).order_by('-submission_time')
            paginator = Paginator(post_list, 10)
            page = request.GET.get('page')
            
            try:
                post = paginator.page(page)
            except PageNotAnInteger:
                post = paginator.page(1)
            except EmptyPage:
                post = paginator.page(paginator.num_pages)
            profile = Profile.objects.get(user=user)
            template = 'profiles/profile_user.html'
            context = {
                'profile': profile,
                'post': post
                }
            return render(request, template, context)
        else:
            return HttpResponseRedirect(reverse('account_login'))


class ProfileView(View):
    def get(self, request, username, *args, **kwargs):
        user = get_object_or_404(User, username=username)
        post_list = Post.objects.filter(author__username__iexact=user).order_by('-submission_time')
        paginator = Paginator(post_list, 10)
        page = request.GET.get('page')
        
        try:
            post = paginator.page(page)
        except PageNotAnInteger:
             post = paginator.page(1)
        except EmptyPage:
             post = paginator.page(paginator.num_pages)
        profile = Profile.objects.get(user=user)
        template = 'profiles/profile_view.html'
        context = {
            'profile': profile,
            'post': post
            }
        return render(request, template, context)


class ProfileEditView(View):
    def get(self, request, *args, **kwargs):
        profile = Profile.objects.get(user=request.user)
        form = ProfileEditForm()
        template = 'profiles/profile_edit.html'
        context = {"form": form}
        return render(request, template, context)

    def post(self, request, *args, **kwargs):
        profile, created = Profile.objects.get(user=request.user)
        form = ProfileEditForm(request.POST or None, request.FILES or None, instance=profile)
        template = 'profiles/profile_edit.html'
        context = {"form": form}
        if form.is_valid():
            instance = form.save(commit=False)
            instance.user = request.user
            instance.save()
            profile_update = reverse('profile:profile_user')
            return HttpResponseRedirect(profile_update)
        else:
            return render(request, template, context)
