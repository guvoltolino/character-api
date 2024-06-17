# Generated by Django 5.0.6 on 2024-06-16 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='', max_length=100)),
                ('description', models.TextField(default='', max_length=500)),
                ('level', models.IntegerField(default=0)),
            ],
        ),
    ]
