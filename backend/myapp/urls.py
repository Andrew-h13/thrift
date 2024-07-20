from django.urls import path, include
from myapp.views import CreateUserView, add_to_cart, get_cart_items




urlpatterns = [
    path('create-user/', CreateUserView.as_view(), name='create_user'),
    path('cart/add/', add_to_cart, name='add_to_cart'),
     path('cart/items/', get_cart_items, name='get_cart_items'),

]
