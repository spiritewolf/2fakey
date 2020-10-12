from django.shortcuts import render

from django.shortcuts import render

def index(request):
    return render(request, 'front_end/index.html')
