from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
from django.core.exceptions import ObjectDoesNotExist

from users.models import User
from .models import Subscription

@login_required
@require_http_methods(['POST'])
def subscribe(request):
    browser = request.POST['browser']
    endpoint = request.POST['endpoint']
    auth = request.POST['auth']
    p256dh = request.POST['p256dh']

    if Subscription.objects.filter(user=request.user, 
            endpoint=endpoint).exists():
        return HttpResponse('Already Exists')
    else:
        subscription = Subscription(user=request.user, 
            browser=browser, endpoint=endpoint,
            auth=auth, p256dh=p256dh)
        subscription.save()
        return HttpResponse('Saved')

@login_required
@require_http_methods(['POST'])
def unsubscribe(request):
    endpoint = request.POST['endpoint']
    Subscription.objects.filter(user=request.User, 
            endpoint=endpoint).delete()
    return HttpResponse('Deleted')