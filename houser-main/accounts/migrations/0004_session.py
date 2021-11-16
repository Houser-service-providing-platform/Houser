# Generated by Django 3.2.3 on 2021-11-07 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_remove_useraccount_verified'),
    ]

    operations = [
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('token', models.CharField(max_length=50)),
                ('expire_date', models.DateTimeField()),
            ],
        ),
    ]
