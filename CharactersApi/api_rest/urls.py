from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.get_characters, name='get'),
    path('character/<int:id>/', views.get_by_id, name='get_by_id'),
    path('post/', views.create_character, name='post'),
    path('upload/', views.upload_picture, name='upload_picture'),
    path('put/<int:id>/', views.update_character, name='put'),
    path('delete/<int:id>/', views.delete_character, name='delete'),
]
