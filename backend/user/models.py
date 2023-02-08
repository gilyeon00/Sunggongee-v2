from django.db import models

# Create your models here.
class Equip(models.Model):
    id = models.IntegerField(primary_key=True)
    equip_name = models.CharField(max_length=100)
    equip_code = models.CharField(max_length=10)
    cost = models.IntegerField(default=0)
