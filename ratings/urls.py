from django.urls import path
from . import views
app_name='rating'
urlpatterns = [
    path('',views.photo_rate,name='rate'),
    path('rate/',views.rate_image,name='score'),
]
