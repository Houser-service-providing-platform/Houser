from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, mob_number, password, name, address, profession, pin):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(email,
                                name=name,
                                password=password,
                                mob_number=mob_number,
                                address=address,
                                pin=pin,
                                profession=profession,
                                is_staff=True
                                )
        user.is_superuser = True
        user.save(using=self._db)
        return user


class ServiceProvider(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    mob_number = models.IntegerField(blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    address = models.CharField(max_length=255, blank=True, null=True)
    pin = models.IntegerField()
    image = models.ImageField(upload_to='profile_pics', blank=True, null=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    profession = models.CharField(max_length=200)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=5)
    available = models.BooleanField(default=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'mob_number', 'address', 'profession', 'pin']

    def get_full_name(self):
        return self.name

    def __str__(self):
        return self.email
