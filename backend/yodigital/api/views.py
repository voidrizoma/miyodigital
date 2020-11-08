from rest_framework import viewsets
from .serializers import CampusSerializer, CipherSerializer, FutureSerializer, BestSerializer
from .models import Campus, Cipher, FutureMe, BestFriend

class CampusViewSet(viewsets.ModelViewSet):
    queryset = Campus.objects.all().order_by("name")
    serializer_class = CampusSerializer
    
class CipherViewSet(viewsets.ModelViewSet):
    queryset = Cipher.objects.all()
    serializer_class = CipherSerializer

class FutureViewSet(viewsets.ModelViewSet):
    queryset = FutureMe.objects.all()
    serializer_class = FutureSerializer

class BestFriendViewSet(viewsets.ModelViewSet):
    queryset = BestFriend.objects.all()
    serializer_class = BestSerializer
