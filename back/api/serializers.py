from rest_framework import serializers
from .models import Education
from django.contrib.auth import get_user_model

class EducationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Education
        fields = '__all__'