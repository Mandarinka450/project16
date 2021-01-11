
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('search_work.urls')),
    path('api/', include('arcticle.urls')),
    path('api/', include('services.urls')),
]
