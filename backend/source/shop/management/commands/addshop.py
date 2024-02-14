from django.core.management.base import BaseCommand, CommandError
from shop.models import Product


class Command(BaseCommand):
    help = "add product"


    def handle(self, *args, **options):
        Product.objects.create(
            name = "product 01",
            description = "description 01",
            price = 100,
            total_stock = 18
        )
        Product.objects.create(
            name = "product 02",
            description = "description 02",
            price = 200,
            total_stock = 25
        )
        Product.objects.create(
            name = "product 03",
            description = "description 03",
            price = 100,
            total_stock = 32
        )