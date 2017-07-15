from django.contrib import admin

from .models import Subscription


class SubscriptionAdmin(admin.ModelAdmin):
	list_display = ('user', 'browser', 'endpoint', 'auth', 'p256dh')
	fields       = ('user', 'browser', 'endpoint', 'auth', 'p256dh')
	readonly_fields = ('p256dh',)


admin.site.register(Subscription)