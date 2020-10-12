from rest_framework import serializers
from .models import Scraper

class ScraperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scraper
        fields = ['id', 'search']
        extra_kwargs = {'search': {'required': False}}

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scraper
        fields = ['result', 'source']
        extra_kwargs = {'result': {'required': False}}
