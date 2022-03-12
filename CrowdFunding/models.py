from django.db import models
from login_signup.models import MyUser
from event.models import 
# Create your models here.
class CrowdFundingEvent(models.Model):
    paid_by=models.ForeignKey(MyUser,on_delete=models.CASCADE)
    # event_name=models.ForeignKey(Event, on_delete=models.CASCADE)
    amount=models.IntegerField()
