# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-22 08:53
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('rank', models.CharField(default='Beginner', max_length=50)),
                ('bio', models.TextField(blank=True, null=True)),
                ('website_link', models.CharField(blank=True, max_length=320, null=True, verbose_name='Personal website url')),
                ('facebook_link', models.CharField(blank=True, max_length=320, null=True, verbose_name='Facebook profile url')),
                ('twitter_handle', models.CharField(blank=True, max_length=320, null=True, verbose_name='Twitter handle')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
