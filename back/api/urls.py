from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EducationViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'education', EducationViewSet ,basename="education")

# The API URLs are now determined automatically by the router.
urlpatterns = [
    # path('', include(router.urls)),
    path('education/', EducationViewSet.as_view({'get':'retrieve', 'post': 'create', 'put': 'update', 'delete': 'destroy' })),
]