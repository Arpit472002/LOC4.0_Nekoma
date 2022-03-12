from .views import *
from django.urls import path

urlpatterns = [
    path('listvolunteer/',ListCreateVolunteerView.as_view(),name='listvolunteer'),
    path('updatevolunteer/<int:pk>/',UpdateDestroyVolunteerView.as_view(),name='updatevolunteer')
]