from .views import *
from django.urls import path
urlpatterns=[
    path('supplier/',SupplierView.as_view(),name='Supplier'),
    path('supplier/<int:pk>/',SupplierView.as_view(),name='Supplieritems'),
    path('inventoryitems/',InventoryItemsView.as_view(),name='Inventory'),
    path('inventoryitems/<int:pk>/',InventoryItemsView.as_view(),name='Inventoryitems'),
    path('donation/',DonationView.as_view(),name='Donation'),
    path('donation/<int:pk>/',DonationView.as_view(),name='Donationitems'),
    path('order/',OrderView.as_view(),name='Order'),
    path('order/<int:pk>/',OrderView.as_view(),name='Orderitems'),
]