from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        user_data = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            # Add any other fields you want to include
        }

        # Add user data to the token
        for key, value in user_data.items():
            token[key] = value

        return token
    
class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', '_id' ]
    

    def get_name(self,obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

    def get__id(self,obj):
        _id = obj.id
        return _id

    def get_isAdmin(self,obj):
        return obj.is_staff



class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', '_id', 'isAdmin', 'token']
    

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)