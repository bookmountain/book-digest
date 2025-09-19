from django.db import models


class Event(models.Model):
    REGION_CHOICES = [
        ("Taipei", "Taipei"),
        ("Netherlands", "Netherlands"),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    event_date = models.DateField()
    region = models.CharField(max_length=255, choices=REGION_CHOICES, blank=True, null=True)
    image = models.ImageField(upload_to="events/%Y/%m")
    is_special = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def delete(self, *args, **kwargs):
        if self.image:
            self.image.delete(save=False)
        super().delete(*args, **kwargs)

    def __str__(self):
        return self.title
