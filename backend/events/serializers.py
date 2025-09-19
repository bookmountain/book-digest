from rest_framework import serializers
from .models import Event, EventSignup


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class EventSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventSignup
        fields = "__all__"
