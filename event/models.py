from django.db import models

# Create your models here.
class Event(models.Model):
    event_name=models.CharField(max_length=250)
    event_description=models.TextField()
    event_image=models.ImageField(upload_to='images/',default='images/default.jpg')
    event_venue=models.CharField(max_length=250)
    event_date=models.DateField()
    event_time=models.TimeField()
    event_duration=models.IntegerField()
    no_of_volunteers=models.IntegerField()

    def __str__(self):
        return self.event_name