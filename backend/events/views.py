from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import BasePermission, SAFE_METHODS
from rest_framework.response import Response

from events.models import Event, EventSignup
from events.serializers import EventSerializer, EventSignupSerializer


class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True  # allow GET, HEAD, OPTIONS
        return request.user and request.user.is_staff  # allow POST, PUT, DELETE only for admin


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by("-event_date")
    serializer_class = EventSerializer
    permission_classes = [IsAdminOrReadOnly]

    @action(detail=False, methods=['get'])
    def latest_by_region(self, request):
        """
        Get the latest event for each region + special event.
        """
        regions = ["Taipei", "Netherlands"]
        latest_events = []
        for region in regions:
            event = Event.objects.filter(region=region).order_by("-event_date").first()
            if event:
                latest_events.append(event)

        special_event = Event.objects.filter(is_special=True).order_by("-event_date").first()
        if special_event:
            latest_events.append(special_event)

        serializer = self.get_serializer(latest_events, many=True)
        return Response(serializer.data)


class EventSignupViewSet(viewsets.ModelViewSet):
    """Allow creating signups, but not editing or deleting them."""
    queryset = EventSignup.objects.all().order_by("-submitted_at")
    serializer_class = EventSignupSerializer

    # Optional filtering if query param provided
    def get_queryset(self):
        qs = super().get_queryset()  # start with all signups
        event_id = self.request.query_params.get("eventId")
        if event_id:
            qs = qs.filter(event_id=event_id)
        return qs
