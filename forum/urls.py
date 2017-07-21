from django.conf.urls import url

from .views import (
	                DiscussionView,
                    StartDiscussionView,
                    ReplyToComment, 
                    EditComment,
                    # upvote_post,
                    # downvote_post,
                    # undo_vote_on_post, 
                    # upvote_comment,
                    # downvote_comment,
                    # undo_vote_on_comment,
                  )



urlpatterns = [
	# url(r'^discussion/(?P<post_id>\d+)/$', DiscussionView.as_view(), name="discussion"),
    # url(r'^discussion/(?P<post_id>\d+)/(?P<post_slug>[\w-]+)/$', DiscussionView.as_view(), name="discussion"),
    url(r'^discussion/(?P<post_id>\d+)/$', DiscussionView.as_view(), name="discussion"),
    url(r'^start_discussion/$', StartDiscussionView.as_view(), name='start_discussion'),
    
    url(r'^comments/(?P<id>\d+)/reply/$', ReplyToComment.as_view(), name='reply_to_comment'),
    url(r'^comments/(?P<id>\d+)/edit/$', EditComment.as_view(), name='edit_comment'),

    # url(r'^api/posts/(?P<post_id>\d+)/upvote$', upvote_post, name="upvote_post"),
    # url(r'^api/posts/(?P<post_id>\d+)/downvote$', downvote_post, name="downvote_post"),
    # url(r'^api/posts/(?P<post_id>\d+)/undovote$', undo_vote_on_post, name="undo_vote_on_post"),

    # url(r'^api/comments/(?P<comment_id>\d+)/upvote$', upvote_comment, name="upvote_comment"),
    # url(r'^api/comments/(?P<comment_id>\d+)/downvote$', downvote_comment, name="downvote_comment"),
    # url(r'^api/comments/(?P<comment_id>\d+)/undovote$', undo_vote_on_comment, name="undo_vote_on_comment"),
]