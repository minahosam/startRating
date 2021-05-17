from django.db import models
from django.core.validators import MaxValueValidator,MinValueValidator
# Create your models here.
class rate(models.Model):
    phato = models.ImageField(upload_to='photo/')
    ratee = models.FloatField(default=0, validators=[MaxValueValidator(5),MinValueValidator(0)])
    def __str__(self):
        return str(self.pk)    
    class Meta:
        ordering=['pk']
    
    