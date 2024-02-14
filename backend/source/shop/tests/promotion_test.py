from re import T
from django.test import TestCase
from shop.models import Promotion, PromotionManager, Cart, Product


class PromotionTest(TestCase):
    def setUp(self) -> None:
        Promotion.objects.create(
            name="discount with pay 1000 baht",
            description="discount with pay 1000 baht",
            discount_percent=15,
            target_total_price_in_cart=1000.00,
            target_item_count_in_cart=0
        )
        Promotion.objects.create(
            name="discount with buy 10 pieces",
            description="discount with buy 10 pieces",
            discount_percent=15,
            target_total_price_in_cart=0,
            target_item_count_in_cart=10
        )

        Product.objects.create(
            name="product 01",
            description="description 01",
            price=10,
            total_stock=18
        )
        Product.objects.create(
            name="product 02",
            description="description 02",
            price=500,
            total_stock=30
        )
        Product.objects.create(
            name="product 03",
            description="description 03",
            price=500,
            total_stock=30
        )

        Cart.objects.create(
            cart_id=1,
            item=Product.objects.get(name="product 01"),
            amount=10
        )

        Cart.objects.create(
            cart_id=2,
            item=Product.objects.get(name="product 02"),
            amount=2
        )
        Cart.objects.create(
            cart_id=3,
            item=Product.objects.get(name="product 03"),
            amount=20
        )
        Cart.objects.create(
            cart_id=4,
            item=Product.objects.get(name="product 03"),
            amount=3
        )

    def test_discount_with_target_amount_trigger(self):
        self.assertEqual(
            Promotion.objects.discount_with_target_amount_trigger(), 15)

    def test_discount_with_target_price_trigger(self):
        self.assertEqual(
            Promotion.objects.discount_with_target_price_trigger(), 0)

    def test_get_discount_price(self):
        self.assertEqual(Promotion.objects.count(), 4)
        self.assertEqual(Promotion.objects.get(
            id=1).check_type_of_promotion(), "total_price_trigger_1000")

    def test_get_max_discount_amount(self):
        self.assertEqual(
            Promotion.objects.get_max_discount_amount(1), {'id': 1, 'max_discount': 15.0, 'total_price ': 100.00})
        self.assertEqual(Promotion.objects.get_max_discount_amount(2), {
                         'id': 1, 'max_discount': 150.0, 'total_price ': 1000.00})
        self.assertEqual(Promotion.objects.get_max_discount_amount(3), {
                         'id': 1, 'max_discount': 1500.0, 'total_price ': 10000.00})
        self.assertEqual(Promotion.objects.get_max_discount_amount(4), {
                         'id': 1, 'max_discount': 225.0, 'total_price ': 1500.00})

    def test_get_promotion_discount_price(self):
        self.assertEqual(Promotion.objects.get(
            id=1).get_type_of_promotion(), "total_price_trigger")
        self.assertEqual(Promotion.objects.get(
            id=2).get_type_of_promotion(), "item_count_trigger")
        self.assertEqual(Promotion.objects.get(
            id=1).get_promotion_discount_price(2), 150)
        self.assertEqual(Promotion.objects.get(
            id=2).get_promotion_discount_price(1), 15)
        self.assertEqual(Promotion.objects.get(
            id=2).get_promotion_discount_price(2), 150)
        self.assertEqual(Promotion.objects.get(
            id=1).get_promotion_discount_price(2), 150)
