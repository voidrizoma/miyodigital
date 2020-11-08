from rest_framework import routers
from django.urls import path, include
from .views import CampusViewSet, CipherViewSet, FutureViewSet, BestFriendViewSet

router = routers.DefaultRouter()
router.register("campus", CampusViewSet)
router.register("cipher", CipherViewSet)
router.register("future", FutureViewSet)
router.register("best", BestFriendViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]