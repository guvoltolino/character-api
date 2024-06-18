# Generated by Django 5.0.6 on 2024-06-18 06:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_rest', '0002_remove_character_level_character_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='description',
            field=models.TextField(max_length=500),
        ),
        migrations.AlterField(
            model_name='character',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='character',
            name='picture',
            field=models.ImageField(upload_to='pictures/'),
        ),
    ]