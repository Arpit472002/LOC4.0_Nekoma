from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics
# Create your views here.
class ContactView(generics.ListCreateAPIView):
    queryset = ContactUs.objects.all()
    serializer_class=ContactSerializer