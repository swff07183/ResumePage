from django.db import models
from django.conf import settings

# Create your models here.
class Career(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name="작성자",
    )
    content = models.TextField(
        verbose_name="내용"
    )