# Generated by Django 3.2.12 on 2023-10-07 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_auto_20230930_1238'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='country',
            field=models.TextField(blank=True, null=True),
        ),
    ]