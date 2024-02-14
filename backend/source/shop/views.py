from argparse import Action
from pickle import FALSE
from urllib import response
from rest_framework import viewsets
from .models import Product, Cart, Promotion, Order, ShopMember, Upload, UploadPrivate
from .serializers import ProductSerializers, CartSerializers, PromotionSerializers, OrderSerializers, ShopMemberSerializers
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from http import HTTPMethod

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers


class CartViewSet(viewsets.ModelViewSet):

    queryset = Cart.objects.all()
    serializer_class = CartSerializers

    def create(self, request):
        cart_id = request.data.get('cart_id')
        product_id = request.data.get('product_id')
        amount = request.data.get('amount')
        product = Product.objects.get(id=product_id)
        cart = Cart(cart_id=cart_id, item=product, amount=amount)
        cart.save()
        context = {'cart_id': cart_id, 'product_id': product_id,
                   'amount': amount}  # change it as per your requirement
        return Response(context)


class PromotionViewSet(viewsets.ModelViewSet):
    queryset = Promotion.objects.all()
    serializer_class = PromotionSerializers

    @action(methods=["GET"], detail=False)
    def get_max_discount_amount(self, request):
        print(request.GET.get('cart_id'))
    #     get_max_discount_amount = self.promotion.get_max_discount_amount(cart_id=request.GET.get('cart_id'))
        queryset = Promotion.objects.get_max_discount_amount(
            cart_id=request.GET.get('cart_id'))
        
        return Response(queryset)

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializers


class ShopMemberViewSet(viewsets.ModelViewSet):
    queryset = ShopMember.objects.all()
    serializer_class = ShopMemberSerializers


def image_upload(request):
    if request.method == 'POST':
        image_file = request.FILES['image_file']
        image_type = request.POST['image_type']
        if settings.USE_S3:
            if image_type == 'private':
                upload = UploadPrivate(file=image_file)
            else:
                upload = Upload(file=image_file)
            upload.save()
            image_url = upload.file.url
        else:
            fs = FileSystemStorage()
            filename = fs.save(image_file.name, image_file)
            image_url = fs.url(filename)
        return render(request, 'upload.html', {
            'image_url': image_url
        })
    return render(request, 'upload.html')
