from django.db import models
from django.conf import settings

class Education(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    finalEdu = models.TextField()
    name = models.TextField()
    state = models.TextField()
    enterDate = models.TextField()
    graduateDate = models.TextField()
    passDate = models.TextField()
    region = models.TextField()
    isQualificationExam = models.TextField()
    major = models.TextField()
    isTransfer = models.BooleanField()
    universityType = models.BooleanField()
    universityTime = models.BooleanField()
    extraMajor = models.TextField()
    extraMajorType = models.TextField()
    grade = models.TextField()
    standardGrade = models.TextField()

