from django.db import models
from login_signup.models import MyUser

# Create your models here.
class Blog(models.Model):
    title=models.CharField(max_length=250)
    description=models.CharField(max_length=250)
    postedby=models.ForeignKey(MyUser,on_delete=models.CASCADE)

    def __str__(self):
        return self.title