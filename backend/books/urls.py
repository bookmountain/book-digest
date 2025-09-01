from rest_framework.routers import DefaultRouter
from .views import BookReviewViewSet

router = DefaultRouter()
router.register('books', BookReviewViewSet)

urlpatterns = router.urls
