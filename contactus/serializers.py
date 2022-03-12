from .models import *
from rest_framework.serializers import ModelSerializer 
class ContactSerializer(ModelSerializer):
    class Meta:
        model=ContactUs
        fields="__all__"