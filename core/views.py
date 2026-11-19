from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics

from .models import Investigation
from .serializers import InvestigationSerializer

@api_view(['GET'])
def health_check(request):
    return Response({
        'status': 'success',
        'message': 'VYRAQ backend is running!',
        'project': 'VYRAQ'
    })

class InvestigationListCreateView(generics.ListCreateAPIView):
    queryset = Investigation.objects.all().order_by('-created_at')
    serializer_class = InvestigationSerializer