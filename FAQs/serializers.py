from .models import *
from rest_framework.serializers import ModelSerializer
class Faqserializer(ModelSerializer):
    class Meta:
        model=Faqs
        fields="__all__"