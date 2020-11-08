from django.db import models

class Campus(models.Model):
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name
    

class Cipher(models.Model):
    encode = models.TextField()
    decode = models.TextField()
    campus = models.ForeignKey(
        Campus, related_name="cipher", on_delete=models.CASCADE
    )
    
    def __str__(self):
        return self.campus
    
class FutureMe(models.Model):
    letter = models.TextField()
    campus = models.ForeignKey(
        Campus, related_name="future", on_delete=models.CASCADE
    )
    
    def __str__(self):
        return self.campus
    
class BestFriend(models.Model):
    letter = models.TextField()
    campus = models.ForeignKey(
        Campus, related_name="friend", on_delete=models.CASCADE
    )
    
    def __str__(self):
        return self.campus
    