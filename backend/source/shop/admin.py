from django.contrib import admin
from .models import Product, Cart, Promotion, ShopMember, Order


class ProductAdmin(admin.ModelAdmin):
    list_display = ["name", "description",
                    "price", "total_stock", "created_date"]


class CartAdmin(admin.ModelAdmin):
    list_display = ["id"]


class PromotionAdmin(admin.ModelAdmin):
    list_display = ["name", "description", "discount_percent",
                    "target_total_price_in_cart", "target_item_count_in_cart"]


admin.site.register(Product, ProductAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(Promotion, PromotionAdmin)
admin.site.register(ShopMember)
admin.site.register(Order)
