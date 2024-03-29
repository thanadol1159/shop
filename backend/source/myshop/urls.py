"""myshop URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from shop.views import  image_upload 
from shop.views import (ShopMemberViewSet as ShopMemberSerializers , 
OrderViewSet as OrderSerializers , 
PromotionViewSet as PromotionSerializers , 
CartViewSet ,
ProductViewSet as ShopProductViewSet,
)

 


router = routers.DefaultRouter()
router.register(r'products', ShopProductViewSet)
router.register(r'carts', CartViewSet)
router.register(r'promotions', PromotionSerializers)
router.register(r'orders', OrderSerializers)
router.register(r'members', ShopMemberSerializers)


urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('upload/', image_upload, name='upload'),
    
]
