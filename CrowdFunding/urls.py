from django.urls import path
from .views import *
urlpatterns=[
    path('crowdfunding/',CrowdFundingView.as_view(),name='crowdfunding')
]