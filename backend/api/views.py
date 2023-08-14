from rest_framework import viewsets
from .models import users, Event
from .serializers import FormDataSerializer, EventSerializers
from django.contrib.auth import authenticate, login
from django.http import JsonResponse

class FormDataViewSet(viewsets.ModelViewSet):
    queryset = users.objects.all()
    serializer_class = FormDataSerializer

def user_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(email=email, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return JsonResponse({'message': 'Login successful'})
            else:
                return JsonResponse({'message': 'User account is disabled'}, status=400)
        else:
            return JsonResponse({'message': 'Invalid login credentials'}, status=401)

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.object.all()
    serializer_class = EventSerializers