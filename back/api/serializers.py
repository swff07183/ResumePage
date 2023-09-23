from rest_framework import serializers
from .models import Education, Career, Skill, UserInfo, Experience, CareerContent, SelfIntroduction, Award
from django.contrib.auth import get_user_model

class UserInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserInfo
        fields = '__all__'
        read_only_fields = ('user',)

class EducationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Education
        # fields = ('user', 'finalEdu', 'name', 'state', 'enterDate', 'graduateDate', 'passDate', 'region', 'isQualificationExam', 'major', 'universityType', 'universityTime', 'extraMajor', 'extraMajorType', 'grade', 'standardGrade', 'isTransfer')
        fields = '__all__'
        read_only_fields = ('user',)

class CareerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Career
        fields = '__all__'
        read_only_fields = ('user',)

class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        # fields = ('user', 'skill')
        fields = '__all__'
        read_only_fields = ('user',)

class ExperienceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Experience
        fields = '__all__'
        read_only_fields = ('user',)

class CareerContentSerializer(serializers.ModelSerializer):

    class Meta:
        model = CareerContent
        fields = '__all__'
        read_only_fields = ('user',)

class SelfIntroductionSerializer(serializers.ModelSerializer):

    class Meta:
        model = SelfIntroduction
        fields = '__all__'
        read_only_fields = ('user',)

class AwardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Award
        fields = '__all__'
        read_only_fields = ('user',)