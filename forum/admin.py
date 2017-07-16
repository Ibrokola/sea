from django.contrib import admin

from .models import Vote, Post, Comment,Favourite


class CommentInline(admin.TabularInline):
	model = Comment

class PostAdmin(admin.ModelAdmin):
	inlines = [CommentInline]
	list_display = ('title', 'url', 'submission_time', 'num_comments')
	fields       = ('title', 'url', 'slug', 'text', 'author', 'num_comments', 'upvotes', 'downvotes', 'flags')


class CommentAdmin(admin.ModelAdmin):
	list_display = ('author','submission_time', 'post', 'wbs', )
	fields = ('post', 'parent_comment', 'author', 'text', 'wbs', 'upvotes', 'downvotes', 'flags')
	# readonly_fields = ('post', 'parent_comment', 'wbs', 'author')
	readonly_fields = ('wbs',)


class VoteAdmin(admin.ModelAdmin):
	list_display = ('content_object', 'voter', 'type_of_vote', 'submission_time')

class VoteAdmin(admin.ModelAdmin):
	list_display = ('content_object', 'voter', 'type_of_vote', 'submission_time')

class FavouriteAdmin(admin.ModelAdmin):
	list_display = ('user', 'favourited_on')
	readonly_fields = ('favourited_on', )


admin.site.register(Comment, CommentAdmin)
admin.site.register(Vote, VoteAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Favourite, FavouriteAdmin)