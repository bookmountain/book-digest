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


class EventSignup(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="signups")

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    profession = models.CharField(max_length=255)
    email = models.EmailField()
    instagram = models.CharField(max_length=255)
    how_did_you_hear = models.CharField(max_length=50)
    other_source = models.CharField(max_length=255, blank=True, null=True)

    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} for {self.event.title}"
