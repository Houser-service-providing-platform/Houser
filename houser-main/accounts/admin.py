from django.contrib import admin
from .models import UserAccount,Session
# Register your models here.

admin.site.register(UserAccount)
admin.site.register(Session)