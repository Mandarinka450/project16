from django.shortcuts import render

def index(request):
    return render(request, 'search_work/index.html')
