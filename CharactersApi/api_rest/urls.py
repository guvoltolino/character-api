from django.urls import path
from . import views

urlpatterns = [
    path('get/', views.get_characters, name='get'),
    path('get/<int:id>/', views.get_by_id, name='get_by_id'),
    path('post/', views.post_character, name='post'),
    path('put/<int:id>/', views.put_character, name='put'),
    path('patch/<int:id>/', views.patch_character, name='patch'),
    path('delete/<int:id>/', views.delete_character, name='delete'),
]
