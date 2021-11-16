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

    def create_superuser(self, email, mob_number, password):

        user = self.create_user(email=email,
                                password=password,
                                mob_number=mob_number,
                                is_staff=True
                                )
        user.is_superuser = True
        user.is_active = True
        user.verified = True
        user.save(using=self._db)
        return user


class Session(models.Model):
    id = models.AutoField(primary_key=True)
    token = models.CharField(max_length=50, null=False)
    expire_date = models.DateTimeField(null=False)

    # def __str__(self):
    #     return self.id


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    mob_number = models.IntegerField(blank=True)
    password = models.CharField(max_length=100, null=False)
    created_date = models.DateTimeField(auto_now_add=True, null=False)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    session = models.ForeignKey(to=Session, on_delete=models.SET_NULL, null=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['mob_number', 'password']

    # def get_full_name(self):
    #     return self.name

    def __str__(self):
        return self.email


