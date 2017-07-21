import sendgrid
import os
from sendgrid.helpers.mail import *

from decouple import config

sg = sendgrid.SendGridAPIClient(apikey=config('apikey'))

# from_email = Email("test@example.com")
# to_email = Email("test@gmail.com")
# subject = "Sending with SendGrid is Fun"
# content = Content("text/plain", "and easy to do anywhere, even with Python")
# mail = Mail(from_email, subject, to_email, content)
# response = sg.client.mail.send.post(request_body=mail.get())
# print(response.status_code)
# print(response.body)
# print(response.headers)