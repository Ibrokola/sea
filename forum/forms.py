from django import forms



from .models import Comment, Post, Vote


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['text']
        labels = {
            'text': 'Your comment',
        }


class StartDiscussionForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'text']
        labels = {
            'title': 'Title',
            'text': 'Details'
        }
        help_text = {
            'title': 'Title, not more than 500 words',
            'text': 'Markdown syntax allowed'
        }

    def clean(self):
        cleaned_data = super(StartDiscussionForm, self).clean()
        # url = cleaned_data.get("url")
        title = cleaned_data.get("title") 
        text = cleaned_data.get("text")
        if not text and not title:
            raise forms.ValidationError(
            "Text field is empty. Please enter both title and text to continue."
            )
        return cleaned_data


