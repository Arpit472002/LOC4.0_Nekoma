from django.db import models

# Create your models here.
class Faqs(models.Model):
    question=models.CharField(max_length=250)
    answer=models.TextField()
    def __str__(self):
        return self.question