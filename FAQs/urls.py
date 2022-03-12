from django.urls import path
from .views import *
urlpatterns=[
    path('faqs/',FaqView.as_view(),name='FAQ')
]