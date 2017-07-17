from django.conf.urls import url
from .views import (ProfileUserView,
					ProfileView,
					ProfileEditView,
				)



urlpatterns = [ 
    url(r'^profile/edit/$', ProfileEditView.as_view(), name='profile_edit'),
    url(r'^profile/(?P<username>[\w.@+-]+)/$', ProfileView.as_view(), name='profile_view'),
    url(r'^profile/$', ProfileUserView.as_view(), name='profile_user'),
]