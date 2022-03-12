from django.db import models

# Create your models here.
class Suppliers(models.Model):
    supplier_name=models.CharField(max_length=250)
    supplier_location=models.CharField(max_length=250)
    amount_left_to_be_paid=models.IntegerField()

class InventoryItems(models.Model):
    item_name=models.CharField(max_length=250)
    item_price=models.IntegerField()
    supplier_name=models.ForeignKey(Suppliers,on_delete=models.CASCADE)
    item_quantity_left=models.IntegerField()

class Donations(models.Model):
    donated_item=models.ForeignKey(InventoryItems,on_delete=models.CASCADE)
    donated_quantity=models.CharField(max_length=250)
    donated_in_area=models.CharField(max_length=250)
    donation_cost=models.IntegerField()
    donation_date=models.DateTimeField()

class Orders(models.Model):
    item_ordered=models.ForeignKey(InventoryItems,on_delete=models.CASCADE)
    ordered_from=models.ForeignKey(Suppliers,on_delete=models.CASCADE)
    item_quantity=models.IntegerField()
    total_bill=models.IntegerField()
    is_paid=models.BooleanField(default=False)
    is_delivered=models.BooleanField(default=False)
    def save(self,*args,**kwargs):
        self.total_bill=self.item_quantity*self.item_ordered.item_price
        super(Orders,self).save(*args,**kwargs)



