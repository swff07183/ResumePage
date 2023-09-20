# Generated by Django 3.2.12 on 2023-09-19 13:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0007_alter_skill_skill'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='isQualificationExam',
            field=models.BooleanField(null=True),
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.TextField()),
                ('place', models.TextField()),
                ('region', models.TextField()),
                ('startData', models.TextField()),
                ('endDate', models.TextField()),
                ('detail', models.TextField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
