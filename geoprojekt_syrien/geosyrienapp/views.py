from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from django.template import RequestContext
from datetime import datetime
from django.core.serializers import serialize
from django.template.context import Context

# Create your views here.

def home(request):
    return render(
        request,
        'app/index.html',
        {
            'title': 'index',
        }
    )