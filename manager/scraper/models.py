from django.db import models

# Create your models here.
class Scraper(models.Model):
    source = models.CharField(max_length=800)
    options = models.CharField(max_length=800, blank=True)
    result = models.CharField(max_length=20000)

    # def __str__(self):
    #     return self.search, self.options, self.result
