# Generated by Django 3.2.12 on 2023-09-20 14:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0008_auto_20230919_2250'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experience',
            name='detail',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='experience',
            name='endDate',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='experience',
            name='place',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='experience',
            name='region',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='experience',
            name='startData',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='experience',
            name='type',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.CreateModel(
            name='CareerContent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
