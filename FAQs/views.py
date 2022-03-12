from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics
# Create your views here.
class FaqView(generics.ListAPIView):
    queryset=Faqs.objects.all()
    serializer_class=Faqserializer