from .models import *
from rest_framework.serializers import ModelSerializer
class CrowdFundingSerializer(ModelSerializer):
    class Meta:
        model=CrowdFundingEvent
        fields ="__all__"