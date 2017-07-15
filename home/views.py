from django.shortcuts import render

from forum.models import Post

def homepage(request):	
	if request.user.is_authenticated():
		user = request.user
		posts = Post.objects.recent_posts_with_my_votes(user)
		template = 'forum/home_member.html'
		context = {"posts":posts}
		return render(request, template, context)
	template = 'forum/home.html'
	context = {}
	return render(request, template, context)