from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json

from .models import Scraper
from .serializers import ScraperSerializer, ResultSerializer
from .scrape import get_search

@api_view(['GET'])
def appOverview(request):
    api_urls = {
        'search': '/search/',
        'result': '/result/'
    }
    return Response(api_urls)

@api_view(['GET'])
def list_result(request):
    result = Scraper.objects.all()
    serializer = ResultSerializer(result, many=True)
    print(serializer.data)
    return Response(serializer.data)

@api_view(['POST'])
def postSearch(request):
    Scraper.objects.all().delete()
    input = request.data['search']
    result = get_search(input)
    serializer = ResultSerializer(data=result)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
