from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

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
def create_character(request):

    if request.method == 'POST':

        new_character = request.data
        serializer = CharacterSerializer(data=new_character)

        if serializer.is_valid():
            serializer.save()
            return Response(True, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_character(request, id):

    if request.method == 'PUT':

        character = Character.objects.get(pk=id)
        serializer = CharacterSerializer(character, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(True, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_character(request, id):

    if request.method == 'DELETE':

        character = Character.objects.get(pk=id)
        character.delete()

        return Response(True, status=status.HTTP_200_OK)

    return False














# def databaseDjango():

#     data = Character.objects.get()

#     data = Character.objects.filter()

#     data = Character.objects.exclude()

#     data.save()

#     data.delete()