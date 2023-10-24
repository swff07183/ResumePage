from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .models import Education, Career, Skill, UserInfo, Experience, CareerContent, SelfIntroduction, Award, Submit
from .serializers import EducationSerializer, CareerSerializer, SkillSerializer, UserInfoSerializer, ExperienceSerializer, CareerContentSerializer, SelfIntroductionSerializer, AwardSerializer, SubmitSerializer, PreviewSerializer
from drf_yasg.utils import swagger_auto_schema
from django.core import serializers
from django.forms.models import model_to_dict
import json


class EducationViewSet(viewsets.ModelViewSet):


    # queryset = Education.objects.all()
    # serializer_class = EducationSerializer

    @swagger_auto_schema()
    def retrieve(self, request):
        try:
            education = Education.objects.get(user=request.user.id)
        except Education.DoesNotExist:
            return Response({}, status=status.HTTP_204_NO_CONTENT)
        serializer = EducationSerializer(instance=education)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def create(self, request):
        if Education.objects.filter(user=request.user.id).exists():
            education = get_object_or_404(Education, user=request.user.id)
            serializer = EducationSerializer(instance=education, data=request.data)


            if serializer.is_valid(raise_exception=True):
                serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
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

        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)



class CareerViewSet(viewsets.ModelViewSet):


    @swagger_auto_schema()
    def list(self, request):
        careers = Career.objects.filter(user=request.user.id)
        serializer = CareerSerializer(instance=careers, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def create(self, request):
        data = request.data
        serializer = CareerSerializer(data=data)
        user = request.user
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=user)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def destroy(self, request, pk):
        career = get_object_or_404(Career, pk=pk)
        
        if request.user == career.user:

            career.delete()

            data = {
                'delete': '데이터가 삭제되었습니다.'
            }

        return Response(data, status=status.HTTP_200_OK)

    @swagger_auto_schema()
    def update(self, request, pk):
        career = get_object_or_404(Career, pk=pk)
        
        if request.user == career.user:
            serializer = CareerSerializer(instance=career, data=request.data)

            if serializer.is_valid(raise_exception=True):
                serializer.save()

                return Response(serializer.data, status=status.HTTP_200_OK)


class SkillViewSet(viewsets.ModelViewSet):


    @swagger_auto_schema()
    def list(self, request):
        skills = Skill.objects.filter(user=request.user.id)
        serializer = SkillSerializer(instance=skills, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def create(self, request):
        data = request.data
        serializer = SkillSerializer(data=data)
        user = request.user
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=user)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def destroy(self, request, pk):
        skill = get_object_or_404(Skill, pk=pk)
        
        if request.user == skill.user:

            skill.delete()

            data = {
                'delete': '데이터가 삭제되었습니다.'
            }

        return Response(data, status=status.HTTP_200_OK)

    @swagger_auto_schema()
    def update(self, request, pk):
        skill = get_object_or_404(Skill, pk=pk)
        
        if request.user == skill.user:
            serializer = SkillSerializer(instance=skill, data=request.data)

            if serializer.is_valid(raise_exception=True):
                serializer.save()

                return Response(serializer.data, status=status.HTTP_200_OK)


class UserInfoViewSet(viewsets.ModelViewSet):
    @swagger_auto_schema()
    def retrieve(self, request):
        # userInfo = get_object_or_404(UserInfo, user=request.user.id)
        try:
            userInfo = UserInfo.objects.get(user=request.user.id)
        except UserInfo.DoesNotExist:
            return Response({}, status=status.HTTP_204_NO_CONTENT)

        
        serializer = UserInfoSerializer(instance=userInfo)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def create(self, request):
        if UserInfo.objects.filter(user=request.user.id).exists():
            userInfo = get_object_or_404(UserInfo, user=request.user.id)
            serializer = UserInfoSerializer(instance=userInfo, data=request.data)

            if serializer.is_valid(raise_exception=True):
                serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            data = request.data
            serializer = UserInfoSerializer(data=data)
            user = request.user
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=user)

            return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def destroy(self, request):
        userInfo = get_object_or_404(UserInfo, user=request.user.id)
        
        userInfo.delete()

        data = {
            'delete': '데이터가 삭제되었습니다.'
        }

        return Response(data, status=status.HTTP_200_OK)

    @swagger_auto_schema()
    def update(self, request):
        userInfo = get_object_or_404(UserInfo, user=request.user.id)
        serializer = UserInfoSerializer(instance=userInfo, data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)
        



class CareerContentViewSet(viewsets.ModelViewSet):

    @swagger_auto_schema()
    def retrieve(self, request):
        try:
            careerContent = CareerContent.objects.get(user=request.user.id)
        except CareerContent.DoesNotExist:
            return Response({}, status=status.HTTP_204_NO_CONTENT)
        serializer = CareerContentSerializer(instance=careerContent)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def create(self, request):
        if CareerContent.objects.filter(user=request.user.id).exists():
            careerContent = get_object_or_404(CareerContent, user=request.user.id)
            serializer = CareerContentSerializer(instance=careerContent, data=request.data)


            if serializer.is_valid(raise_exception=True):
                serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            data = request.data
            serializer = CareerContentSerializer(data=data)
            user = request.user
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=user)

            return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def destroy(self, request):
        careerContent = get_object_or_404(CareerContent, user=request.user.id)
        
        careerContent.delete()

        data = {
            'delete': '데이터가 삭제되었습니다.'
        }

        return Response(data, status=status.HTTP_200_OK)

    @swagger_auto_schema()
    def update(self, request):
        careerContent = get_object_or_404(CareerContent, user=request.user.id)
        serializer = CareerContentSerializer(instance=careerContent, data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)


class SelfIntroductionViewSet(viewsets.ModelViewSet):

    @swagger_auto_schema()
    def retrieve(self, request):
        try:
            selfIntroduction = SelfIntroduction.objects.get(user=request.user.id)
        except SelfIntroduction.DoesNotExist:
            return Response({}, status=status.HTTP_204_NO_CONTENT)
        serializer = SelfIntroductionSerializer(instance=selfIntroduction)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def create(self, request):
        if SelfIntroduction.objects.filter(user=request.user.id).exists():
            selfIntroduction = get_object_or_404(SelfIntroduction, user=request.user.id)
            serializer = SelfIntroductionSerializer(instance=selfIntroduction, data=request.data)


            if serializer.is_valid(raise_exception=True):
                serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            data = request.data
            serializer = SelfIntroductionSerializer(data=data)
            user = request.user
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=user)

            return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def destroy(self, request):
        selfIntroduction = get_object_or_404(SelfIntroduction, user=request.user.id)
        
        selfIntroduction.delete()

        data = {
            'delete': '데이터가 삭제되었습니다.'
        }

        return Response(data, status=status.HTTP_200_OK)

    @swagger_auto_schema()
    def update(self, request):
        selfIntroduction = get_object_or_404(SelfIntroduction, user=request.user.id)
        serializer = SelfIntroductionSerializer(instance=selfIntroduction, data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)


class AwardViewset(viewsets.ModelViewSet):


    @swagger_auto_schema()
    def list(self, request):
        awards = Award.objects.filter(user=request.user.id)
        serializer = AwardSerializer(instance=awards, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def create(self, request):
        data = request.data
        serializer = AwardSerializer(data=data)
        user = request.user
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=user)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def destroy(self, request, pk):
        award = get_object_or_404(Award, pk=pk)
        
        if request.user == award.user:

            award.delete()

            data = {
                'delete': '데이터가 삭제되었습니다.'
            }

        return Response(data, status=status.HTTP_200_OK)

    @swagger_auto_schema()
    def update(self, request, pk):
        award = get_object_or_404(Award, pk=pk)
        
        if request.user == award.user:
            serializer = AwardSerializer(instance=award, data=request.data)

            if serializer.is_valid(raise_exception=True):
                serializer.save()

                return Response(serializer.data, status=status.HTTP_200_OK)
            

class ExperienceViewSet(viewsets.ModelViewSet):


    @swagger_auto_schema()
    def list(self, request):
        experiences = Experience.objects.filter(user=request.user.id)
        serializer = ExperienceSerializer(instance=experiences, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def create(self, request):
        data = request.data
        serializer = ExperienceSerializer(data=data)
        user = request.user
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=user)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def destroy(self, request, pk):
        skill = get_object_or_404(Experience, pk=pk)
        
        if request.user == skill.user:

            skill.delete()

            data = {
                'delete': '데이터가 삭제되었습니다.'
            }

        return Response(data, status=status.HTTP_200_OK)

    @swagger_auto_schema()
    def update(self, request, pk):
        experience = get_object_or_404(Experience, pk=pk)
        
        if request.user == experience.user:
            serializer = ExperienceSerializer(instance=experience, data=request.data)

            if serializer.is_valid(raise_exception=True):
                serializer.save()

                return Response(serializer.data, status=status.HTTP_200_OK)


class ResumeViewSet(viewsets.ModelViewSet):

    @swagger_auto_schema()
    def list(self, request):

        return Response({}, status=status.HTTP_200_OK)
    
class SubmitViewSet(viewsets.ModelViewSet):

    @swagger_auto_schema()
    def list(self, request):
        if request.user.is_anonymous or not request.user.is_superuser:
            return Response({}, status=status.HTTP_401_UNAUTHORIZED)

        submits = Submit.objects.all()
        serializer = SubmitSerializer(instance=submits, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema()
    def create(self, request):
        if Submit.objects.filter(user=request.user.id).exists():
            return Response({}, status=status.HTTP_200_OK)
        serializer = SubmitSerializer(data={})
        user = request.user
        userInfo = UserInfo.objects.get(user=request.user.id)
        education = Education.objects.get(user=request.user.id)
        serializer.is_valid()
        serializer.save(user=user, userInfo=userInfo, education=education)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

class PreviewViewSet(viewsets.ModelViewSet):

    @swagger_auto_schema()
    def retrive(self, request, user_id):
        # if request.user.is_anonymous or not request.user.is_superuser:
        #     return Response({}, status=status.HTTP_401_UNAUTHORIZED)
        res = {}
        try:
            education = Education.objects.get(user=int(user_id))
            res['education'] = model_to_dict(education)
        except:
            education = {}
        try:
            userInfo = UserInfo.objects.get(user=user_id)
            res['userInfo'] = model_to_dict(userInfo)
        except:
            userInfo = {}
        careers = Career.objects.filter(user=user_id)
        res['career'] = [model_to_dict(career) for career in careers]
        skills = Skill.objects.filter(user=user_id)
        res['skills'] = [model_to_dict(skill) for skill in skills]
        awards = Award.objects.filter(user=user_id)
        res['awards'] = [model_to_dict(award) for award in awards]
        experiences = Experience.objects.filter(user=user_id)
        res['experience'] = [model_to_dict(experience) for experience in experiences]

        try:
            careerContent = CareerContent.objects.get(user=user_id)
            res['careerContent'] = model_to_dict(careerContent)
        except:
            res['careerContent'] = {}

        try:
            selfIntroduction = SelfIntroduction.objects.get(user=user_id)
            res['selfIntroduction'] = model_to_dict(selfIntroduction)
        except:
            selfIntroduction = {}
        
        # serializer = PreviewSerializer(education=education, userInfo=userInfo, career=career, skills=skills, careerContents=careerContents, selfIntroduction=selfIntroduction)
        # data = {
        #     "education": serializers.serialize('json', [{}])
        # }
    
        return Response(res, status=status.HTTP_200_OK)
        
        
            