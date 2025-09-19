from django.contrib import admin

from django.contrib import admin
from .models import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("title", "region", "event_date", "created_at")
    list_filter = ("region", "event_date")
    search_fields = ("title", "description")
