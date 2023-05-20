from django.urls import include, path
from rest_framework.routers import DefaultRouter

from example_app.views import MessageViewSet

router = DefaultRouter()
router.register(r"messages", MessageViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
