from django.db import models
#from accounts.models import UserAccounts
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=1000)

    def __str__(self):
        return str(self.title)


class Service(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='service_images')
    discount = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])

    def __str__(self):
        return str(self.title)

    class Meta:
        ordering = ('-date',)


class ClientService(models.Model):
    #client = models.ForeignKey(UserAccounts,on_delete=models.CASCADE,related_name='services')
    service = models.ForeignKey(Service,on_delete=models.CASCADE,related_name='clients')
    #worker = models.ForeignKey(Worker,on_delete=models.CASCADE,related_name='works',null=True,blank=True)
    # date1 = models.DateField(default=timezone.now)
    # date2 = models.DateField(default=timezone.now)
    # price = models.FloatField(default=0)
    # date = models.DateTimeField(default=timezone.now,editable=False)
    # active = models.BooleanField(default=True)
    # label = models.CharField(choices=LABEL_CHOICES2,default='A', max_length=1,editable=False)
    send = models.BooleanField(editable=False,default=False)
    send2 = models.BooleanField(editable=False,default=False)

    def __str__(self):
        return str(self.client.name+'--'+self.service.title)
    def save(self, *args, **kwargs):
        if self.price <=0:
            self.price = self.service.price
        arr = self.date2.month
        ar = self.date2.replace(month=(arr -1))
        if self.date2 <= datetime.date.today() and self.send==False:
            self.active = False
            self.label = 'C'
            self.send = True

            user = User.objects.get(is_staff = True)

            Notification.send(
                [user],
                f'انتهاء خدمة {self.client.name}',
                'fa-info',
                Notification.COLOR_DANGER,
                url=f'http://site141.pythonanywhere.com/admin/app/clientservice/{self.id}/'
            )

        elif datetime.date.today() >= ar and self.send2==False:
            self.label = 'B'
            self.send2 = True

            user = User.objects.get(is_staff=True)

            Notification.send(
                [user],
                f'سوف تنتهي خدمة {self.client.name}',
                'fa-info',
                Notification.COLOR_WARNING,
                url=f'http://site141.pythonanywhere.com/admin/app/clientservice/{self.id}/')
        super(ClientService, self).save(*args, **kwargs)

    class Meta:
        ordering = ('-date',)
        verbose_name_plural = ('اشتراكات الخدمات')
        verbose_name = (' اشتراك خدمه')
