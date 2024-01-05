from rest_framework import viewsets
from .models import Product, Cart, Promotion, Order, ShopMember
from .serializers import ProductSerializers, CartSerializers, PromotionSerializers, OrderSerializers, ShopMemberSerializers


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializers


class PromotionViewSet(viewsets.ModelViewSet):
    queryset = Promotion.objects.all()
    serializer_class = PromotionSerializers


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializers


class ShopMemberViewSet(viewsets.ModelViewSet):
    queryset = ShopMember.objects.all()
    serializer_class = ShopMemberSerializers
