from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from rest_framework.permissions import IsAuthenticated
# Create your views here.
class SupplierView(generics.ListCreateAPIView):
    queryset = Suppliers.objects.all()
    serializer_class=SupplierSerializer
    permission_classes=[IsAuthenticated]

class SupplierView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Suppliers.objects.all()
    serializer_class=SupplierSerializer
    permission_classes=[IsAuthenticated]

class InventoryItemsView(generics.ListCreateAPIView):
    queryset = InventoryItems.objects.all()
    serializer_class=InventoryItemSerializer
    permission_classes=[IsAuthenticated]

class InventoryItemsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = InventoryItems.objects.all()
    serializer_class=InventoryItemSerializer
    permission_classes=[IsAuthenticated]

class DonationView(generics.ListCreateAPIView):
    queryset=Donations.objects.all()
    serializer_class=DonationSerializer
    permission_classes=[IsAuthenticated]

class DonationView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Donations.objects.all()
    serializer_class=DonationSerializer
    permission_classes=[IsAuthenticated]


class OrderView(generics.ListCreateAPIView):
    queryset=Orders.objects.all()
    serializer_class=OrderSerializer
    permission_classes=[IsAuthenticated]

class OrderView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Orders.objects.all()
    serializer_class=OrderSerializer
    permission_classes=[IsAuthenticated]