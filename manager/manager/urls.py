from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('front_end.urls')),
    path('api/', include('scraper.urls')),
]
