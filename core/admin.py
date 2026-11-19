from django.contrib import admin
from .models import Investigation


@admin.register(Investigation)
class InvestigationAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'content_type',
        'status',
        'created_at',
    )

    list_filter = (
        'content_type',
        'status',
        'created_at',
    )

    search_fields = (
        'submitted_text',
    )

    ordering = ('-created_at',)