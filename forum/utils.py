
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