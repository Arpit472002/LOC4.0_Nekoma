from django.db import models
from login_signup.models import MyUser

# Create your models here.
class CrowdFundingEvent(models.Model):
    reason=models.CharField(max_length=250)
    description=models.TextField()
    total_amount_needed=models.IntegerField()