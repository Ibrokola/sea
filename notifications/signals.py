from django.dispatch import Signal


notify = Signal(providing_args=['recipient', 'action', 'target', 'affected_users'])