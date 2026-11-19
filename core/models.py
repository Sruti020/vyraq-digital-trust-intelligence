from django.db import models

class Investigation(models.Model):

    CONTENT_TYPES = [
        ('text', 'Text'),
        ('image', 'Image'),
    ]

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
    ]

    content_type = models.CharField(
        max_length=10,
        choices=CONTENT_TYPES
    )

    submitted_text = models.TextField(
        blank=True,
        null=True
    )

    image = models.ImageField(
        upload_to='investigations/images/',
        blank=True,
        null=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending'
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Investigation {self.id} - {self.content_type}"
