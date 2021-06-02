from django.shortcuts import render
from django.http import HttpResponse
from .models import ServiceProvider
# Create your views here.


def get_available_service_providers(request):
    availability = request.GET('available')
    service = request.GET('service')
    city = request.GET('city')
    print(availability,service,city)
    res = ServiceProvider.objects.filter(address=city, profession=service, availabile=availability)
    print(res)
    return HttpResponse(res)