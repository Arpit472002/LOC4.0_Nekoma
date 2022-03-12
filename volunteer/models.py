from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from event.models import Event
# Create your models here.
TIME_CHOICES=(
    ("From 7 AM","From 7 AM"),
    ("From 8 AM","From 8 AM"),
    ("From 9 AM","From 9 AM"),
    ("From 10 AM","From 10 AM"),
    ("From 11 AM","From 11 AM"),
    ("From 12 Noon","From 12 Noon"),
    ("From 1 PM","From 1 PM"),
    ("From 2 PM","From 2 PM"),
    ("From 3 PM","From 3 PM"),
    ("From 4 PM","From 4 PM"),
    ("From 5 PM","From 5 PM"),
    ("From 6 PM","From 6 PM")
)
#Name
#Age 
#Phone number
#Email 
#Event (Foreign key)
#Available time slots
#is selected 
#Aadhar Card Image
class Volunteer(models.Model):
    phone_number=PhoneNumberField(null=False,blank=False,unique=True)
    event_name=models.ForeignKey(Event,on_delete=models.CASCADE)
    available_at=models.CharField(max_length=250,choices=TIME_CHOICES)
    is_selected=models.BooleanField(default=False)
    aadhar_image=models.ImageField(null=False,blank=False,upload_to='Aadhar/')