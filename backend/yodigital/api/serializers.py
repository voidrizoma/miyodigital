from rest_framework import serializers
from .models import Campus, Cipher, FutureMe, BestFriend

class CampusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campus
        fields = "__all__"

class CipherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cipher
        fields = "__all__"

class FutureSerializer(serializers.ModelSerializer):
    class Meta: 
        model = FutureMe
        fields = "__all__"

class BestSerializer(serializers.ModelSerializer):
    class Meta:
        model = BestFriend
        fields = "__all__"
        