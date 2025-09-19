from django.contrib import admin

from django.contrib import admin
from .models import Event, EventSignup


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("title", "region", "event_date", "created_at")
    list_filter = ("region", "event_date")
    search_fields = ("title", "description")


@admin.register(EventSignup)
class EventSignupAdmin(admin.ModelAdmin):
    list_display = (
        "first_name",
        "last_name",
        "email",
        "event",
        "submitted_at",
    )
    list_filter = ("event", "submitted_at")
    search_fields = ("first_name", "last_name", "email", "instagram")
    ordering = ("event__title", "submitted_at")  # <-- sort by event title first
