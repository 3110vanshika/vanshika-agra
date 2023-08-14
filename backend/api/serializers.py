from rest_framework import serializers
from .models import users, Event


class FormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = '__all__'

class EventSerializers(serializers.Modelserializers):
    class Meta:
        model = Event
        fields = '__all__'
