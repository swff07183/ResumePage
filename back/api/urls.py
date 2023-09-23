from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EducationViewSet, CareerViewSet, SkillViewSet, UserInfoViewSet, CareerContentViewSet, SelfIntroductionViewSet, AwardViewset

# Create a router and register our viewsets with it.
router = DefaultRouter()
# router.register(r'career', CareerViewSet, basename="career")

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('api/', include(router.urls)),
    path('api/education/', EducationViewSet.as_view({'get':'retrieve', 'post': 'create', 'put': 'update', 'delete': 'destroy' })),
    path('api/userInfo/', UserInfoViewSet.as_view({'get':'retrieve', 'post': 'create', 'put': 'update', 'delete': 'destroy' })),
    path('api/career/', CareerViewSet.as_view({'get':'list', 'post': 'create'})),
    path('api/career/<int:pk>/', CareerViewSet.as_view({'put': 'update', 'delete': 'destroy'})),
    path('api/skill/', SkillViewSet.as_view({'get':'list', 'post': 'create'})),
    path('api/skill/<int:pk>/', SkillViewSet.as_view({'put': 'update', 'delete': 'destroy'})),
    path('api/career-content/', CareerContentViewSet.as_view({'get':'retrieve', 'post': 'create', 'put': 'update', 'delete': 'destroy' })),
    path('api/self-introduction/', SelfIntroductionViewSet.as_view({'get':'retrieve', 'post': 'create', 'put': 'update', 'delete': 'destroy' })),
    path('api/award/', AwardViewset.as_view({'get':'list', 'post': 'create'})),
    path('api/award/<int:pk>/', AwardViewset.as_view({'put': 'update', 'delete': 'destroy'})),
]