
from django.contrib import admin
from django.urls import path
from base.views import users_views as views
from rest_framework_simplejwt.views import TokenObtainPairView



urlpatterns = [
    path('login/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUsersProfile, name='users-profile'),
    path('', views.getUsers, name='users'),
    path('register/', views.registerUser, name='register'),
    
]
