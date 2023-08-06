from flask import current_app
from . import create_celery_app

celery_app = create_celery_app(current_app)

@celery_app.task
def add(x, y):
    return x + y

@celery_app.task
def mul(x, y):
    return x * y

@celery_app.task
def xsum(numbers):
    return sum(numbers)