from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.core.urlresolvers import reverse



User = get_user_model()






def new_user_reciever(sender, instance, created, *args, **kwargs):
    if created:
        new_profile, is_created = Profile.objects.get_or_create(user=instance)
	# else:
	# 	messages.error(request, "There was an error with your account. Please contact us.")



post_save.connect(new_user_reciever, sender=User)


class Profile(models.Model):
    user = models.OneToOneField(User)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    rank = models.CharField(max_length=50, default="Beginner")
    bio = models.TextField(null=True, blank=True)
    website_link = models.CharField(max_length=320,
                                    null=True,
                                    blank=True,
                                    verbose_name='Personal website url')
    facebook_link = models.CharField(max_length=320,
                                    null=True,
                                    blank=True,
                                    verbose_name='Facebook profile url')
    twitter_handle = models.CharField(max_length=320,
                                    null=True,
                                    blank=True,
                                    verbose_name='Twitter handle')


    def __str__(self):
        return str(self.user.username)


    def get_absolute_url(self):
        url = reverse("profile:profile_view", kwargs={"username": self.user.username})
        return url
