from .models import Cart, Product, Promotion, Order, ShopMember, PromotionManager
from rest_framework import serializers


class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CartCreateSerializers (serializers.ModelSerializer):

    class Meta:
        model = Cart
        fields = ["id", "cart_id", "item", "amount"]


class CartSerializers (serializers.ModelSerializer):
    item = ProductSerializers(read_only=True)

    class Meta:
        model = Cart
        fields = ["id", "cart_id", "item", "amount"]


class PromotionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Promotion
        fields = '__all__'

# class PromotionPrice(serializers.ModelSerializer):

#     class Meta:
#         model = PromotionManager
#         fields = ["id","total_amount", "total_price"]

class OrderSerializers(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class ShopMemberSerializers(serializers.ModelSerializer):
    class Meta:
        model = ShopMember
        fields = '__all__'
