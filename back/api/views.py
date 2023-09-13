from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .models import Education
from .serializers import EducationSerializer
from drf_yasg.utils import swagger_auto_schema


class EducationViewSet(viewsets.ModelViewSet):


    # queryset = Education.objects.all()
    # serializer_class = EducationSerializer

    @swagger_auto_schema()
    def retrieve(self, request):
        education = get_object_or_404(Education, user=request.user.id)
        serializer = EducationSerializer(instance=education)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def create(self, request):
        data = request.data
        serializer = EducationSerializer(data=data)
        user = request.user
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=user)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def destroy(self, request):
        education = get_object_or_404(Education, user=request.user.id)
        
        education.delete()

        data = {
            'delete': '데이터가 삭제되었습니다.'
        }

        return Response(data, status=status.HTTP_200_OK)

    @swagger_auto_schema()
    def update(self, request):
        education = get_object_or_404(Education, user=request.user.id)
        serializer = EducationSerializer(instance=education, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)



