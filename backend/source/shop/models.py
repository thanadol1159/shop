from tabnanny import check
import uuid
from django.db import models
from django.contrib.auth.models import User
from .storage import PublicMediaStorage, PrivateMediaStorage


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    total_stock = models.IntegerField()
    created_date = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-id"]


class CartManager(models.Manager):

    def get_total_price(self, cart_id):
        total_price = 0
        for c in Cart.objects.filter(cart_id=cart_id):
            total_price += c.item.price * c.amount
        return total_price

    def get_item_count(self, cart_id):
        total_amount = 0
        for c in Cart.objects.filter(cart_id=cart_id):
            total_amount += c.amount
        return total_amount


class Cart(models.Model):
    cart_id = models.CharField(max_length=255, default=uuid.uuid4)
    item = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="cart_products")
    amount = models.IntegerField(default=1)
    objects = CartManager()


class PromotionManager(models.Manager):

    def count(self):
        return len(Promotion.objects.all())

    def discount_with_target_amount_trigger(self):
        get_promotion = Promotion.objects.all()
        get_percent = get_promotion[1].discount_percent
        return get_percent

    def discount_with_target_price_trigger(self):
        get_promotion = Promotion.objects.all()
        get_price = get_promotion[1].target_total_price_in_cart
        return get_price

    def get_discount_price(self):
        return 500

    def get_max_discount_amount(self, cart_id):
        # ลดราคาสูงสุด
        max_discount_amount = 0
        total_price = Cart.objects.get_total_price(cart_id=cart_id)
        total_amount = Cart.objects.get_item_count(cart_id=cart_id)
        promotions = Promotion.objects.all()

        for promotion in promotions:
            discount = promotion.get_promotion_discount_price(cart_id=cart_id)
            if discount > max_discount_amount:
                max_discount_amount = discount
                result = {"id": promotion.id,
                          "max_discount": max_discount_amount,
                          "total_price ": total_price}
        return result


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
    objects = PromotionManager()

    def get_type_of_promotion(self):
        # check promotion
        promotion_type = ["total_price_trigger", "item_count_trigger",]
        if self.target_total_price_in_cart:
            return promotion_type[0]
        return promotion_type[1]

    def get_promotion_discount_price(self, cart_id):
        # ราคาที่ลด
        promotion_type = self.get_type_of_promotion()
        total_price = Cart.objects.get_total_price(cart_id=cart_id)
        if promotion_type == "total_price_trigger":
            return int(total_price) * int(self.discount_percent)/100
        elif promotion_type == "item_count_trigger":
            return int(total_price) * int(self.discount_percent)/100


class Order(models.Model):
    customer = models.CharField(max_length=255)
    address = models.TextField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=10, decimal_places=2)
    sub_total = models.DecimalField(max_digits=10, decimal_places=2)
    vat = models.DecimalField(max_digits=10, decimal_places=2)
    cart = models.ManyToManyField(Cart)
    promotion = models.ManyToManyField(Promotion)


class ShopMember(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_order = models.DecimalField(max_digits=10, decimal_places=2)
    order_count = models.IntegerField()


class Upload(models.Model):
    uploaded_at = models.DateTimeField(auto_now_add=True)
    file = models.FileField(storage=PublicMediaStorage())


class UploadPrivate(models.Model):
    uploaded_at = models.DateTimeField(auto_now_add=True)
    file = models.FileField(storage=PrivateMediaStorage())


class AddImageToMinio(models.Model):
    create_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255)
    photo = models.FileField()

    def __str__(self):
        return self.name

        discount_price = self.get_promotion_discount_price
