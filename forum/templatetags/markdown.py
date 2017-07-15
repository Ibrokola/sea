import markdown2
from django.utils.safestring import mark_safe
from django import template

register = template.Library()

@register.filter(name='markdown')
def markdown(value):
	html = markdown2.markdown(value, 
		safe_mode="escape",
		extras=["fenced-code-blocks"])
	return mark_safe(html)