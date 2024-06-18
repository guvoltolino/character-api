from django.db import models

class Character(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default='')
    description = models.TextField(max_length=500, default='')
    picture = models.ImageField(upload_to='pictures/', default='pictures/default.jpg')

    def __str__(self):
        return f'Id: {self.id} | Name: {self.name} | Description: {self.description} | Picture: {self.picture}'
