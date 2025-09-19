from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views as drf_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-token-auth/', drf_views.obtain_auth_token, name='api-token-auth'),
    path('api/v1/', include(('blog.api.v1.urls', 'v1'), namespace='v1')),
]
