from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class EventView(generics.ListCreateAPIView):
    queryset=Event.objects.all()
    serializer_class=EventSerializer
    permission_classes=[IsAuthenticated]