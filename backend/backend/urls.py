from rest_framework import routers
from api.views import *
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'formdata', FormDataViewSet)
router.register(r'events', EventViewSet)

urlpatterns = [
    # Your other URL patterns
    path('api/', include(router.urls)),
    path('login/', user_login, name='user_login'),
    path('api/', include(router.urls)),
]