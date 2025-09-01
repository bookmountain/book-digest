from django.db import models


class BookReview(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    published_date = models.DateField()
    review_content = models.TextField()  # markdown or html
    cover_image = models.ImageField(upload_to='covers/')
    created_at = models.DateTimeField(auto_now_add=True)

    def delete(self, *args, **kwargs):
        if self.cover_image:
            self.cover_image.delete(save=False)
        super().delete(*args, **kwargs)

    def __str__(self):
        return self.title
