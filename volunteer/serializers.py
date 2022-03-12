from .models import *
from rest_framework.serializers import ModelSerializer

class VolunteerSerializer(ModelSerializer):
    class Meta:
        model=Volunteer
        fields="__all__"