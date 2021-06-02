from django.urls import path,include
from .views import get_available_service_providers

urlpatterns = [
    path(r'^service/$', get_available_service_providers, name='urlname'),
]