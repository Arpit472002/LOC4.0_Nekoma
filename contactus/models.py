from django.db import models

# Create your models here.
class ContactUs(models.Model):    
    email=models.EmailField()
    name=models.CharField(max_length=250)
    issue=models.CharField(max_length=250)
