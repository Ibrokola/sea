from django import forms
from .models import Profile









class ProfileEditForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['image', 'bio', 'website_link', 'facebook_link', 'twitter_handle']
        labels = {
            'image': 'Avatar',
            'bio': 'Brief bio',
            'website_link': 'Your website page link',
            'facebook_link': 'Your facebook page link',
            'twitter_handle': 'Your twitter page link',
        }

        def clean(self, *args, **kwargs):
            cleaned_data = super(ProfileEditForm, self).clean(*args, **kwargs)
            bio = cleaned_data.get("bio")
            website_link = cleaned_data.get("website_link")
            facebook_link = cleaned_data.get("facebook_link")
            twitter_handle = cleaned_data.get("twitter_handle")
            return cleaned_data