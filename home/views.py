from django.shortcuts import render

from forum.models import Post
from users.models import UserProfile as Profile
from .models import HomeCarousel, Marketing

def homepage(request):	
    if request.user.is_authenticated():
        user = request.user
        posts = Post.objects.recent_posts_with_my_votes(user)
        profile = Profile.objects.filter(user=user)
        template = 'home/home_member.html'
        context = {
            "posts": posts,
            "profile": profile,
            }
        return render(request, template, context)
    template = 'home/home.html'
    home1 = HomeCarousel.objects.all()
    home2 = Marketing.objects.all()
    context = {
            'home1': home1,
            'home2': home2
    }
    return render(request, template, context)