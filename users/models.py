from django.conf import settings 
from django.contrib.auth.models import (
		BaseUserManager, AbstractBaseUser
	)
from django.contrib.auth.signals import user_logged_in
from django.contrib import messages
from django.core.urlresolvers import reverse

from django.db import models
from django.db.models.signals import post_save
from django.utils import timezone	



class MyUserManager(BaseUserManager):
	def create_user(self, username=None, email=None, password=None):
	    """
	    Creates and saves a User with the given email, username.
	    """
	    if not username:
	        raise ValueError('Must include username')

	    if not email:
	        raise ValueError('Users must have an email address')

	    user = self.model(
	    	username = username,
	        email=self.normalize_email(email),
	    )

	    user.set_password(password)
	    user.save(using=self._db)
	    return user

	def create_superuser(self, username, email, password):
	    """
	    Creates and saves a superuser with the given email, username
	    """
	    user = self.create_user(
	    	username= username,
	    	email = email,
	        password=password
	    )
	    user.is_admin = True
	    user.save(using=self._db)
	    return user


class MyUser(AbstractBaseUser):
	username = models.CharField(
	    max_length=255,
	    unique=True,
	)
	email = models.EmailField(
	    verbose_name='email address',
	    max_length=255,
	    unique=True,
	)
	first_name = models.CharField(
				max_length=120,
				null=True,
				blank=True
				)
	last_name = models.CharField(
				max_length=120,
				null=True,
				blank=True
				)
	score = models.IntegerField(default=0)
	# is_member = models.BooleanField(default=False, verbose_name= 'Is Paid_Member')
	is_active = models.BooleanField(default=True)
	is_admin = models.BooleanField(default=False)

	objects = MyUserManager()

	USERNAME_FIELD = 'username'
	REQUIRED_FIELDS = ['email']

	def get_full_name(self):
	    # The user is identified by their email address
	    return "%s %s" %(self.first_name, self.last_name)

	def get_short_name(self):
	    # The user is identified by their email address
	    return self.first_name

	def __str__(self):              # __unicode__ on Python 2
	    return self.username

	def has_perm(self, perm, obj=None):
	    "Does the user have a specific permission?"
	    # Simplest possible answer: Yes, always
	    return True

	def has_module_perms(self, app_label):
	    "Does the user have permissions to view the app `app_label`?"
	    # Simplest possible answer: Yes, always
	    return True

	@property
	def is_staff(self):
	    "Is the user a member of staff?"
	    # Simplest possible answer: All admins are staff
	    return self.is_admin

	class Meta:
		db_table = "users"


def new_user_reciever(sender, instance, created, *args, **kwargs):
	if created:
		new_profile, is_created = UserProfile.objects.get_or_create(user=instance)
	# else:
	# 	messages.error(request, "There was an error with your account. Please contact us.")



post_save.connect(new_user_reciever, sender=MyUser)


class UserProfile(models.Model):
	user = models.OneToOneField(MyUser)
	image = models.ImageField(upload_to='images/')
	rank = models.CharField(max_length=50, default="Beginner")
	bio = models.TextField(null=True, blank=True)
	facebook_link = models.CharField(max_length=320,
									null=True,
									blank=True,
									verbose_name='Facebook profile url')
	twitter_handle = models.CharField(max_length=320,
									null=True,
									blank=True,
									verbose_name='Twitter handle')


	def __str__(self):
		return self.user.username


	def get_absolute_url(self):
		url = reverse("profile_view", kwargs={"username": self.user.username})
		return url
