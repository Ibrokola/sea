
# def notify_users(users, title, body, relative_link):
# 	for user in users:
# 		for subscription in user.subscriptions.all():
# 			subscription.send_notification(
# 				title,
# 				{
# 					"body": body,
# 					"icon": "/apple-icon-120x120.png",
# 					"badge": "/android-icon-96x96.png",
# 					"data":{
# 						"link": "%s%s" % (SERVER_URL, relative_link)
# 					}
# 				}
# 			)


import random
import string
from django.utils.text import slugify 




def random_string_generator(size=10, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

# print(random_string_generator())

# print(random_string_generator(size=50))


DONT_USE = ['create']
def unique_slug_generator(instance, new_slug=None):
    if new_slug is not None:
        slug = new_slug
    else:
        slug = slugify(instance.title)
    if slug in DONT_USE:
        new_slug = "{slug}-{randstr}".format(
                    slug=slug,
                    randstr=random_string_generator(size=4)
                )
        return unique_slug_generator(instance, new_slug=new_slug) 
    Klass = instance.__class__
    qs_exists = Klass.objects.filter(slug=slug).exists()
    if qs_exists:
        new_slug = "{slug}-{randstr}".format(
                    slug=slug,
                    randstr=random_string_generator(size=4)
                )
        return unique_slug_generator(instance, new_slug=new_slug)
    return slug