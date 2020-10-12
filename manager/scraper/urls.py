from rest_framework import routers
from django.urls import path
from . import views

urlpatterns = [
    path('', views.appOverview, name="api-overview"),
    path('scraper/search', views.postSearch, name='search'),
    path('scraper/result', views.list_result, name='result')
]
