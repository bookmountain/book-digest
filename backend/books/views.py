from django.shortcuts import render
from rest_framework import viewsets

from books.models import BookReview
from books.serializers import BookReviewSerializer


class BookReviewViewSet(viewsets.ModelViewSet):
    queryset = BookReview.objects.all().order_by("-created_at")
    serializer_class = BookReviewSerializer
