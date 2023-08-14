from django.db import models

# Create your models here.
class users(models.Model):
    fullname = models.CharField(max_length=150)
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=10)

class Event(models.Model):
    event_name = models.CharField(max_length=100)
    data = models.TextField()
    time = models.DateTimeField()
    location = models.CharField(max_length=200)
    image = models.ImageField(upload_to='event_images/')
    is_liked = models.BooleanField(default=False)
    user = models.ForeignKey( on_delete=models.CASCADE)


