from .views import *
from django.urls import path
urlpatterns=[
    path('supplier/',SupplierView.as_view(),name='Supplier'),
    path('supplier/<int:pk>/',SupplierDetailView.as_view(),name='Supplieritems'),
    path('inventoryitems/',InventoryItemsView.as_view(),name='Inventory'),
    path('inventoryitems/<int:pk>/',InventoryItemsDetailView.as_view(),name='Inventoryitems'),
    path('donation/',DonationView.as_view(),name='Donation'),
    path('donation/<int:pk>/',DonationDetailView.as_view(),name='Donationitems'),
    path('order/',OrderView.as_view(),name='Order'),
    path('order/<int:pk>/',OrderDetailView.as_view(),name='Orderitems'),
]