from rest_framework.serializers import ModelSerializer
from .models import *

class SupplierSerializer(ModelSerializer):
    class Meta:
        model=Suppliers
        fields="__all__"

class InventoryItemSerializer(ModelSerializer):
    class Meta:
        model=InventoryItems
        fields="__all__"

class DonationSerializer(ModelSerializer):
    class Meta:
        model=Donations
        fields="__all__"

class OrderSerializer(ModelSerializer):
    class Meta:
        model=Orders
        fields="__all__"

