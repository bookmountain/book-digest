from rest_framework.routers import DefaultRouter
from .views import EventViewSet, EventSignupViewSet

router = DefaultRouter()
router.register('events', EventViewSet)
router.register("event-signups", EventSignupViewSet, basename="event-signups")

urlpatterns = router.urls
