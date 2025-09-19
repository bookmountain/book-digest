from rest_framework import viewsets
from rest_framework.permissions import BasePermission, SAFE_METHODS

from books.models import BookReview
from books.serializers import BookReviewSerializer
from books.pagination import BookReviewPagination


class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True  # allow GET, HEAD, OPTIONS
        return request.user and request.user.is_staff  # allow POST, PUT, DELETE only for admin


class BookReviewViewSet(viewsets.ModelViewSet):
    queryset = BookReview.objects.all().order_by("-created_at")
    serializer_class = BookReviewSerializer
    pagination_class = BookReviewPagination
    permission_classes = [IsAdminOrReadOnly]
