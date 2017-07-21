import json
from django.db import models
from users.models import MyUser as User
from pywebpush import WebPusher

from django.conf import settings
from decouple import config



SERVER_KEY = config("SERVER_KEY")

class Subscription(models.Model):
    class Meta:
        db_table = "user_push_notification_subscriptions"
        unique_together = [
            ["user", "endpoint"],
        ]
    
    # This is a one-to-many relationship because
    # a user can have multiple devices
    user = models.ForeignKey(User, 
        related_name="subscriptions", on_delete=models.PROTECT)
    
    browser = models.CharField(max_length=100)
    endpoint = models.URLField(max_length=350)
    auth = models.CharField(max_length=100)
    p256dh = models.CharField(max_length=100)

    def send_notification(self, title, options, ttl=86400):
        subscription = {
            "endpoint": self.endpoint,
            "keys": {
                "auth": self.auth,
                "p256dh": self.p256dh
            }
        }
        payload = {
            "title": title,
            "options": options or {}
        }
        WebPusher(subscription).\
            send(json.dumps(payload), {}, ttl, SERVER_KEY)