from django.db import models
from django.conf import settings

class UserInfo(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    name = models.TextField(null=True, blank=True)
    userType = models.TextField(null=True, blank=True, default="신입")
    country = models.TextField(null=True, blank=True)
    gender = models.TextField(null=True, blank=True)
    birth = models.TextField(null=True, blank=True)
    email = models.TextField(null=True, blank=True)
    mobile = models.TextField(null=True, blank=True)
    number = models.TextField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    addressDetail = models.TextField(null=True, blank=True)


class Education(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    finalEdu = models.TextField()
    name = models.TextField(null=True, blank=True)
    state = models.TextField(null=True, blank=True)
    enterDate = models.TextField(null=True, blank=True)
    graduateDate = models.TextField(null=True, blank=True)
    passDate = models.TextField(null=True, blank=True)
    region = models.TextField(null=True, blank=True)
    isQualificationExam = models.BooleanField(null=True)
    major = models.TextField(null=True, blank=True)
    universityType = models.TextField(null=True, blank=True)
    universityTime = models.TextField(null=True, blank=True)
    extraMajor = models.TextField(null=True, blank=True)
    extraMajorType = models.TextField(null=True, blank=True)
    grade = models.TextField(null=True, blank=True)
    standardGrade = models.TextField(null=True, blank=True)
    isTransfer = models.BooleanField(null=True, blank=True)

class Career(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    name = models.TextField(null=True, blank=True)
    state = models.TextField(null=True, blank=True)
    enterDate = models.TextField(null=True, blank=True)
    exitDate = models.TextField(null=True, blank=True)
    position = models.TextField(null=True, blank=True)
    part = models.TextField(null=True, blank=True)
    detail = models.TextField(null=True, blank=True)
    money = models.TextField(null=True, blank=True)
    moneyUnit = models.TextField(null=True, blank=True)
    region = models.TextField(null=True, blank=True)


class Skill(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    skill = models.TextField()

class CareerContent(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    content = models.TextField()

class SelfIntroduction(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    title = models.TextField()
    content = models.TextField()

class Award(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    type = models.TextField()
    licenseName = models.TextField(null=True, blank=True, default='')
    licenseDate = models.TextField(null=True, blank=True, default='')
    licensePlace = models.TextField(null=True, blank=True, default='')
    language = models.TextField(null=True, blank=True, default='')
    languageRating = models.TextField(null=True, blank=True, default='')
    languageScore = models.TextField(null=True, blank=True, default='')
    languageName = models.TextField(null=True, blank=True, default='')
    languageDate = models.TextField(null=True, blank=True, default='')
    awardName = models.TextField(null=True, blank=True, default='')
    awardDate = models.TextField(null=True, blank=True, default='')
    awardPlace = models.TextField(null=True, blank=True, default='')

class Experience(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    type = models.TextField(null=True, blank=True)
    place = models.TextField(null=True, blank=True)
    startDate = models.TextField(null=True, blank=True)
    endDate = models.TextField(null=True, blank=True)
    detail = models.TextField(null=True, blank=True)