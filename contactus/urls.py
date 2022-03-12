from .views import *
from django.urls import path
urlpatterns=[
    path('contactus/',ContactView.as_view(),name='contact'),
]