from django.urls import path,include
from django.conf.urls import url
from .views import EmailRegisteredOtpBased,VerifyOtp, UserLogin, UserLogout

urlpatterns = [
    url('register/', EmailRegisteredOtpBased.as_view()),
    url('verify-otp/', VerifyOtp.as_view()),
    url('login/', UserLogin.as_view()),
    url('logout/', UserLogout.as_view())
]