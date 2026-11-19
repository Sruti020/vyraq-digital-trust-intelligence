from django.urls import path
from . import views

urlpatterns = [
    path('health/', views.health_check, name='health-check'),
    path('investigations/', views.InvestigationListCreateView.as_view(), name='investigation-list-create'),
]