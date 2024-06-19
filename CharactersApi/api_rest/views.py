import os
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.files.storage import default_storage

from .models import Character
from .serializers import CharacterSerializer

import json

@api_view(['GET'])
def get_characters(request):

    if request.method == 'GET':

        characters = Character.objects.all()
        serializer = CharacterSerializer(characters, many=True)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_by_id(request, id):

    if request.method == 'GET':

        character = Character.objects.get(pk=id)
        serializer = CharacterSerializer(character)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def post_character(request):

    if request.method == 'POST':

        new_character = request.data
        serializer = CharacterSerializer(data=new_character)

        if serializer.is_valid():
            serializer.save()
            return Response(True, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def put_character(request, id):

    if request.method == 'PUT':

        character = Character.objects.get(pk=id)
        serializer = CharacterSerializer(character, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(True, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH'])
def patch_character(request, id):

    if request.method == 'PATCH':

        character = Character.objects.get(pk=id)
        serializer = CharacterSerializer(character, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(True, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_character(request, id):

    if request.method == 'DELETE':

        character = Character.objects.get(pk=id)

        if character.picture:
            image_path = os.path.join(settings.MEDIA_ROOT, str(character.picture))
            if default_storage.exists(image_path):
                default_storage.delete(image_path)
        character.delete()
        return Response(True, status=status.HTTP_200_OK)

    return False
