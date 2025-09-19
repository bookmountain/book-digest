from rest_framework.pagination import LimitOffsetPagination


class BookReviewPagination(LimitOffsetPagination):
    default_limit = 5  # load 5 items by default
    max_limit = 20
