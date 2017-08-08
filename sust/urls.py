from django.conf.urls import url, include
from django.contrib import admin

from django.conf import settings
from django.conf.urls.static import static


from home.views import homepage
from forum.views import (
                    upvote_post,
                    downvote_post,
                    undo_vote_on_post, 
                    upvote_comment,
                    downvote_comment,
                    undo_vote_on_comment
                )
                


urlpatterns = [
    url(r'^ib/admin/', admin.site.urls),
    url(r'^$', homepage, name='home'),
    url(r'^forum/', include('forum.urls', namespace='forum')),
    url(r'^u/', include('profiles.urls', namespace='profile')),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^pushnote/', include('pushnote.urls')),
    url(r"^notifications/", include("pinax.notifications.urls")),
    url(r'^', include('django.contrib.auth.urls')),

    url(r'^api/posts/(?P<post_id>\d+)/upvote$', upvote_post, name="upvote_post"),
    url(r'^api/posts/(?P<post_id>\d+)/downvote$', downvote_post, name="downvote_post"),
    url(r'^api/posts/(?P<post_id>\d+)/undovote$', undo_vote_on_post, name="undo_vote_on_post"),

    url(r'^api/comments/(?P<comment_id>\d+)/upvote$', upvote_comment, name="upvote_comment"),
    url(r'^api/comments/(?P<comment_id>\d+)/downvote$', downvote_comment, name="downvote_comment"),
    url(r'^api/comments/(?P<comment_id>\d+)/undovote$', undo_vote_on_comment, name="undo_vote_on_comment"),

]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

