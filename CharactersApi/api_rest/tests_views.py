import json
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import Character
from .serializers import CharacterSerializer

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

    def test_create_character(self):
        url = reverse('post')
        data = {'name': 'Test Character', 'description': 'test description', 'level': 1, 'id': 1}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Character.objects.count(), 1)
        self.assertEqual(Character.objects.get().name, 'Test Character')

    def test_update_character(self):
        character = Character.objects.create(name='Test Character', id = 1)
        url = reverse('put', args=[character.id])
        data = {'name': 'Updated Character', 'description': 'Updated Description', 'level': 2}
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Character.objects.get().name, 'Updated Character')
        self.assertEqual(Character.objects.get().description, 'Updated Description')
        self.assertEqual(Character.objects.get().level, 2)

    def test_delete_character(self):
        character = Character.objects.create(name='Test Character', id= 1)
        url = reverse('delete', args=[character.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Character.objects.count(), 0)
