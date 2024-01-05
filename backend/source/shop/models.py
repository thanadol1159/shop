
import uuid
from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    total_stock = models.IntegerField()
    created_date = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-id"]


class Cart(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False)
    item = models.ManyToManyField(Product)


class Promotion(models.Model):
    # input discount % ถ้าซื้อครบ 1000 บาท ลด 10%
    # ถ้าซื้อครบ 10 ชิ้น ลด 15%
    # จะเลือกได้ promotion เดียวเท่านัน โดยระบบจะเลือกจากส่วนลดสูงสุด
    name = models.TextField()
    description = models.TextField()

    discount_percent = models.IntegerField()
    target_total_price_in_cart = models.DecimalField(
        max_digits=10, decimal_places=2)
    target_item_count_in_cart = models.DecimalField(
        max_digits=10, decimal_places=2)


class Order():
    customer = models.CharField(max_length=255)
    address = models.TextField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=10, decimal_places=2)
    sub_total = models.DecimalField(max_digits=10, decimal_places=2)
    vat = models.DecimalField(max_digits=10, decimal_places=2)
    cart = models.ManyToManyField(Cart)
    promotion = models.ManyToManyField(Promotion)


class Member():
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_order = models.DecimalField(max_digits=10, decimal_places=2)
    order_count = models.IntegerField()
