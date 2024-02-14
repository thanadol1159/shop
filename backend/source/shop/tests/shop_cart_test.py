from pydoc import describe
from django.test import TestCase
from shop.models import Cart, Product, Promotion


class ShopCartTest(TestCase):
    def setUp(self) -> None:
        Product.objects.create(
            name="product 01",
            description="description 01",
            price=1000,
            total_stock=18
        )

        Product.objects.create(
            name="product 02",
            description="description 02",
            price=500,
            total_stock=30
        )

        Cart.objects.create(
            cart_id=1,
            item=Product.objects.get(name="product 01"),
            amount=4
        )

        Cart.objects.create(
            cart_id=1,
            item=Product.objects.get(name="product 02"),
            amount=2
        )

    def test_get_total_price(self):
        self.assertEqual(Cart.objects.get_total_price(1), 5000)

    def test_get_item_count(self):
        self.assertEqual(Cart.objects.get_item_count(1), 6)

