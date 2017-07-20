from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.decorators import login_required
from django.conf import settings


from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from django.views.decorators.http import require_http_methods


from .models import Subscription


User = settings.AUTH_USER_MODEL

@login_required
@require_http_methods(['POST'])
def subscribe(request):
    browser = request.POST['browser']
    endpoint = request.POST['endpoint']
    auth = request.POST['auth']
    p256dh = request.POST['p256dh']

    if Subscription.objects.filter(user=request.user, endpoint=endpoint).exists():
        return HttpResponse('Already Exists')
    else:
        subscription = Subscription(user=request.user, browser=browser, endpoint=endpoint, auth=auth, p256dh=p256dh)
        subscription.save()
        return HttpResponse('saved')

@login_required
@require_http_methods(['POST'])
def unsubscripe(request):
    endpoint = request.POST['endpoint']
    Subscription.objects.filter(user=request.user, endpoint=endpoint).delete()
    return HttpResponse('Deleted')