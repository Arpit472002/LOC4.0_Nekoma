from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class ListCreateVolunteerView(generics.ListCreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class= VolunteerSerializer
    permission_classes = [IsAuthenticated]

class UpdateDestroyVolunteerView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Volunteer.objects.all()
    serializer_class= VolunteerSerializer
    permission_classes = [IsAuthenticated]