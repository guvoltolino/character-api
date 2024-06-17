import unittest
from django.test import TestCase
from .models import Character

class CharacterTestCase(TestCase):
    def setUp(self):
        self.character = Character.objects.create(
            name='Test Character',
            description='Test Description',
            level=10
        )

    def test_character_str(self):
        self.assertEqual(
            str(self.character),
            'Id: 1 | Name: Test Character | Description: Test Description | Level: 10'
        )

    def test_character_defaults(self):
        character = Character.objects.create()
        self.assertEqual(character.name, '')
        self.assertEqual(character.description, '')
        self.assertEqual(character.level, 0)

if __name__ == '__main__':
    unittest.main()