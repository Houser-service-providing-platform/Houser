from django.shortcuts import render
from datetime import datetime
from django.core.exceptions import ObjectDoesNotExist
import pyotp
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes,force_text
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from datetime import datetime,date,timedelta
import base64
import bcrypt
import json


from .models import UserAccount,Session
from .serializers import CreateUserSerializer
# Create your views here.

# Token generating function
import random
import string
def token_generator(string_length:30):
    letters_and_digits = string.ascii_letters + string.digits
    return ''.join((random.choice(letters_and_digits) for i in range(string_length)))

class GenerateKey:
    @staticmethod
    def return_value(phone):
        return str(phone) + str(datetime.date(datetime.now())) + "Some Random Secret Key"


EXPIRY_TIME = 100  # seconds


class EmailRegisteredOtpBased(APIView):
    serializer_class = CreateUserSerializer
    queryset = UserAccount.objects.all()

    # Get to Create a call for OTP
    @staticmethod
    def post(request):
        print('data: ', request.data)

        user_data = request.data
        password = user_data.get("password")
        password_encode = password.encode('utf-8')
        # Hashing password
        enc_password = bcrypt.hashpw(password_encode, bcrypt.gensalt())
        dec_password = enc_password.decode('utf8')
        bcrypt.checkpw(password_encode, enc_password)
        try:
            user = UserAccount.objects.get(email=user_data.get("email"))
            # if Mobile already exists the take this else create New One
        except ObjectDoesNotExist:

            UserAccount.objects.create(
                email=user_data.get("email"),
                mob_number=user_data.get("mob_number"),
                password=dec_password
            )

        user = UserAccount.objects.get(email=user_data.get("email"))  # user Newly created Model
        user.save()  # Save the data
        keygen = GenerateKey()
        key = base64.b32encode(keygen.return_value(user_data.get("email")).encode())  # Key is generated
        otp = pyotp.TOTP(key, interval=EXPIRY_TIME)  # TOTP Model for OTP is created

        # global to_email
        to_email = user_data.get('email')
        current_site = get_current_site(request)
        # Sending activation Email
        mail_subject = 'Otp to Activate your Houser account.'
        message = render_to_string('activation_email.html', {
            'user': to_email,
            'domain': current_site.domain,
            'Otp': otp.now()
        })
        email = EmailMessage(
            mail_subject, message, to=[to_email]
        )
        email.send()

        print(otp.now())
        # Using Multi-Threading send the OTP Using Messaging Services like Twilio or Fast2sms
        return Response({to_email}, status=200)  # Just for demonstration


class VerifyOtp(APIView):
    # This Method verifies the OTP
    @staticmethod
    def post(request):
        user_data = request.data
        try:
            user = UserAccount.objects.get(email=user_data.get("email"))
        except ObjectDoesNotExist:
            return Response("User does not exist", status=404)  # False Call

        keygen = GenerateKey()
        key = base64.b32encode(keygen.return_value(user_data.get("email")).encode())  # Generating Key
        otp = pyotp.TOTP(key, interval=EXPIRY_TIME)  # TOTP Model
        if otp.verify(request.data["otp"]):  # Verifying the OTP
            user.is_active = True
            user.save()
            return Response("You are authorised", status=200)
        return Response("OTP is wrong/expired", status=400)


class UserLogin(APIView):
    @staticmethod
    def post(request):
        email = request.data.get('email')
        password = request.data.get('password')
        print(email,password)
        # Checking if user is registered or not
        if UserAccount.objects.filter(email=email).exists():
            user = UserAccount.objects.get(email=email)
            # checking if user is activated or not
            if user.is_active == True:
                hashed_password = user.password.encode('utf-8')
                if bcrypt.checkpw(password.encode('utf-8'), hashed_password):
                    login_token = token_generator(30)
                    # Creating user login session
                    session = Session(token=login_token, expire_date=datetime.now() + timedelta(days=15))
                    session.save()
                    user.session = session
                    user.save()
                    # request.session['login_token'] = login_token
                    # request.session.set_expiry(1296000)  # setting session expiry of 15 days in seconds
                    # if request.session.has_key('login_token'):
                    #     return render(request, 'index.html', {'log': 'Logout', 'url': '/logout/'})
                    return Response({login_token}, status=200)
                else:
                    return Response("password is incorrect", status=400)
            else:
                return Response("Your account is not active", status=401)
        else:
            return Response("no account found", status=404)
        

class UserLogout(APIView):
    @staticmethod
    def post(request):
        auth_token = request.data.get('authtoken')
        if Session.objects.filter(token = auth_token).exists():
            session = Session.objects.get(token = auth_token)
            user = session.useraccount_set.all()[0]
            print(user)

            user.session=None
            session.delete()
            print(session)
            return Response("You are logged out", status=200)
        else:
            return Response("no account found", status=404)
