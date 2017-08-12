from django.http import HttpResponse
from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.core.urlresolvers import reverse

from django.core.mail import EmailMultiAlternatives
from django.core.mail import send_mail, BadHeaderError
from django.template.loader import render_to_string, get_template
from django.shortcuts import render
from django.core.mail import EmailMessage


User = get_user_model()






def new_user_reciever(sender, instance, created, *args, **kwargs):
    if created:
        new_profile, is_created = Profile.objects.get_or_create(user=instance)
	# else:
	# 	messages.error(request, "There was an error with your account. Please contact us.")

        subject = 'Welcome to Sustainable Energy Forum'
        from_email = 'no-reply@mail.sustenergy.ca'
        to = instance.email 
        plaintext = get_template('email/welcome.txt')
        html = get_template('email/welcome.html')
        recv = {
            'username': instance.username
            } 
        text_content = plaintext.render(recv)
        html_content = html.render(recv)

        try:
            msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
            msg.attach_alternative(html_content, "text/html")
            msg.send()
        except BadHeaderError:
            return HttpResponse('Invalid header found.')

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
