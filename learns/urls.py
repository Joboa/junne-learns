from django.urls import path
from . import views


app_name = 'learns'

urlpatterns = [
    path("", views.homepage, name="homepage"),
]
