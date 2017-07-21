# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-21 06:37
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pushnote', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subscription',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='subscriptions', to=settings.AUTH_USER_MODEL),
        ),
    ]
