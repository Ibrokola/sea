from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField

from .forms import UserChangeForm, UserCreationForm
from .models import User 


class UserAdmin(BaseUserAdmin):
    """The forms to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    The fields to be used in displaying the User model.
    These override the definitions on the base UserAdmin
    that reference specific fields on auth.User."""
    list_display = ('username', 'email', 'first_name', 'last_name', 'score', 'is_admin', 'is_active')
    list_filter = ('is_admin', 'is_active')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_admin',)}),
    )
    """add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    overrides get_fieldsets to use this attribute when creating a user."""
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'first_name', 'last_name', 'email', 'password1', 'password2')}
        ),
    )
    search_fields = ('email', 'username', 'first_name', 'last_name')
    ordering = ('username',)
    filter_horizontal = ()

# class UserAdmin(admin.ModelAdmin):
#     list_display = ('username', 'email', 'first_name', 'last_name', 'score', 'is_staff', 'is_active')
#     fields = ('username', 'score', 'email', 'first_name', 'last_name', 'is_active', 'is_staff')
#     # readonly_fields = ('username', )


admin.site.register(User, UserAdmin)
# admin.site.register(UserProfile)

admin.site.unregister(Group)