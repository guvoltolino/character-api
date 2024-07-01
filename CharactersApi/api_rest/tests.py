import json
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import Character
from .serializers import CharacterSerializer
from django.core.files.uploadedfile import SimpleUploadedFile

class CharacterTests(TestCase):

    def setUp(self):
        self.client = APIClient()

    def test_get_characters(self):
        url = reverse('get')
        response = self.client.get(url)
        characters = Character.objects.all()
        serializer = CharacterSerializer(characters, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_by_id(self):
        character = Character.objects.create(name='Test Character', id=1)
        url = reverse('get_by_id', args=[character.id])
        response = self.client.get(url)
        serializer = CharacterSerializer(character)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_post_character(self):
        url = reverse('post_character')
        response = self.client.post(url, self.character_data, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(Character.objects.filter(name='New Character').exists())
        new_character = Character.objects.get(name='New Character')
        self.assertEqual(new_character.description, 'This is a new character.')
        
    def test_put_character(self):
        character = Character.objects.create(name='Test Character', id=1)
        url = reverse('put', args=[character.id])
        data = {
            'name': 'Test Character',
            'description': 'Test Description',
            'picture': 'Test Picture',
        }
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Character.objects.get().description, 'Test Description')
    
    def test_patch_character(self):
        character = Character.objects.create(name='Test Character', id=1)
        url = reverse('patch', args=[character.id])
        data = {
            'description': 'Test Description',
        }
        response = self.client.patch(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Character.objects.get().description, 'Test Description')

    def test_delete_character(self):
        character = Character.objects.create(name='Test Character', id= 1)
        url = reverse('delete', args=[character.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Character.objects.count(), 0)
