from django.utils.translation import ugettext_lazy as _
from allauth.account.adapter import DefaultAccountAdapter

class CustomAccountAdapter(DefaultAccountAdapter):
    # Overrides default adapter
    def __init__(self, request=None):
        super(CustomAccountAdapter, self).__init__(request)
        self.error_messages['email_taken'] = _('A user is already registered with this e-mail address.')
        self.error_messages['username_taken'] = _('A user with this name already exists.')