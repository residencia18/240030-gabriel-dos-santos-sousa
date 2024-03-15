from django.db import models

class Resultado(models.Model):
    nome = models.CharField(max_length=200)
    data = models.DateField()
    link = models.CharField(max_length=200)

    def __str__(self):
        return self.nome