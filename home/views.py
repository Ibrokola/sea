from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import JsonResponse
from forum.models import Post
from profiles.models import Profile
from .models import HomeCarousel, Marketing

def homepage(request):
    if request.user.is_authenticated():
        user = request.user
        posts_list = Post.objects.recent_posts_with_my_votes(user)
        paginator = Paginator(posts_list, 15)
        page = request.GET.get('page')
        
        try:
            posts = paginator.page(page)
        except PageNotAnInteger:
             posts = paginator.page(1)
        except EmptyPage:
             posts = paginator.page(paginator.num_pages)
        profile = Profile.objects.filter(user=user)
        template = 'home/home_member.html'
        context = {
            "posts": posts,
            "profile": profile,
            }
        return render(request, template, context)
    template = 'home/home.html'
    home1 = HomeCarousel.objects.all()
    home2 = Marketing.objects.all().order_by('?')
    context = {
            'home1': home1,
            'home2': home2
    }
    return render(request, template, context)

