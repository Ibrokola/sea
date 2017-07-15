from django.conf.urls import url, include
from django.contrib import admin

from django.conf import settings
from django.conf.urls.static import static


# from home.views import homepage



urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^', include(home.urls)),
    url(r'^forum/', include('forum.urls')),
    url(r'^users/', include('users.urls')),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^pushnot/', include('pushnote.urls')),
    url(r'^', include('django.contrib.auth.urls')),
]

if settings.DEBUG:
	urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)