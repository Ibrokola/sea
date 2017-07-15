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
			'title': 'Title',
			'text': 'Markdown syntax allowed'
		}

	def clean(self):
		cleaned_data = super(StartDiscussionForm, self).clean()
		url = cleaned_data.get("url")
		text = cleaned_data.get("text")
		if not (url or text):
			raise forms.ValidationError(
				"URL and Text are both empty. Please enter at least one of them."
			)
		return cleaned_data


