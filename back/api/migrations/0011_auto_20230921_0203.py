# Generated by Django 3.2.12 on 2023-09-20 17:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_selfintroduction'),
    ]

    operations = [
        migrations.RenameField(
            model_name='career',
            old_name='company',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='career',
            old_name='place',
            new_name='region',
        ),
    ]
