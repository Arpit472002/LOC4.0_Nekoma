from django.shortcuts import render
from rest_framework import generics
from .models import *
from rest_framework.permissions import IsAuthenticated
from .serializers import *
# Create your views here.
class CrowdFundingView(generics.ListCreateAPIView):
    queryset=CrowdFundingEvent.objects.all()
    serializer_class=CrowdFundingSerializer
    permission_classes=[IsAuthenticated]
