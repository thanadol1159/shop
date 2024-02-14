from django.test import TestCase
from shop.models import Product


class ProductTest(TestCase):

    def test_create_product(self):
        Product.objects.create(
            name="product 01",
            describe="description 01",
            price=1001,
            total_stock=18
        )

        
