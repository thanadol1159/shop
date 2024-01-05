from .models import Cart, Product, Promotion, Order, ShopMember
from rest_framework import serializers


class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CartSerializers (serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'


class PromotionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Promotion
        fields = '__all__'


class OrderSerializers(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class ShopMemberSerializers(serializers.ModelSerializer):
    class Meta:
        model = ShopMember
        fields = '__all__'
