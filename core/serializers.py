from rest_framework import serializers
from .models import Investigation
from PIL import Image, UnidentifiedImageError

class InvestigationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Investigation
        fields = '__all__'
        read_only_fields = ['id', 'status', 'created_at', 'updated_at']

    def validate(self, data):
        content_type = data.get('content_type')

        submitted_text = data.get('submitted_text')
        image = data.get('image')

        if content_type == 'text':
            if not submitted_text or not submitted_text.strip():
                raise serializers.ValidationError({
                    'submitted_text': 'Please provide text to investigate.'
                })

            if image:
                raise serializers.ValidationError({
                    'image': 'Image upload is not allowed for text investigations.'
                })

        elif content_type == 'image':
            if not image:
                raise serializers.ValidationError({
                    'image': 'Please upload an image to investigate.'
                })

            if submitted_text and submitted_text.strip():
                raise serializers.ValidationError({
                    'submitted_text': 'Text is not allowed for image investigations.'
                })

        return data
    def validate_image(self, image):
        max_size = 5 * 1024 * 1024  # 5 MB

        if image.size > max_size:
            raise serializers.ValidationError(
                'Image size cannot exceed 5 MB.'
            )

        try:
            img = Image.open(image)

            if img.format not in ['JPEG', 'PNG']:
                raise serializers.ValidationError(
                    'Only JPEG and PNG images are allowed.'
                )

            img.verify()

        except (UnidentifiedImageError, OSError):
            raise serializers.ValidationError(
                'The uploaded file is not a valid image.'
            )

        finally:
            image.seek(0)

        return image