from django.db import models
from forum.models import User
from pywebpush import WebPusher
import json
from django.conf import settings
from decouple import config



SERVER_KEY=config("SERVER_KEY")

class Subscription(models.Model):
	user = models.ForeignKey(User, related_name="subscription", on_delete=models.PROTECT)
	browser = models.CharField(max_length=100)
	endpoint = models.URLField(max_length=350)
	auth = models.CharField(max_length=100)
	p256dh = models.CharField(max_length=100)

	class Meta:
		db_table = "user_push_notification_subscriptions"
		unique_together = [
			["user", "endpoint"],
		]

	def __str__(self):
		return self.user.username

	def send_notitication(self, title, options, ttl=86400):
		subscription = {
			"endpoint": self.auth,
			"keys": {
				"auth": self.auth,
				"p256dh": self.p256dh
			}
		}
		payload = {
			"title": title,
			"option": options or {}
		}
		WebPusher(subscription).send(json.dumps(payload), {}, ttl, SERVER_KEY)