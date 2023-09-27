from django.contrib import admin

from .models import *


for model in [Product, Review, Order, OrderItem, ShippingAddress]:
    admin.site.register(model)
