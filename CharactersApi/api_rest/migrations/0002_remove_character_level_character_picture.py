# Generated by Django 5.0.6 on 2024-06-18 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_rest', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='character',
            name='level',
        ),
        migrations.AddField(
            model_name='character',
            name='picture',
            field=models.ImageField(default='pictures/default.jpg', upload_to='pictures/'),
        ),
    ]