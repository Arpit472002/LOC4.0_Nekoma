from django.db import models

# Create your models here.
class Suppliers(models.Model):
    supplier_name=models.CharField(max_length=250)
    supplier_location=models.CharField(max_length=250)
    amount_left_to_be_paid=models.IntegerField()

class Donations(models.Model):
    donated_in_area=models.CharField(max_length=250)
    donation_cost=models.IntegerField()
    
