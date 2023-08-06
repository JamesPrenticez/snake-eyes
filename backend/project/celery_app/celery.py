# from celery import Celery

# CELERY_TASK_LIST = [
# 	'proj.tasks',
# ]

# app = Celery('proj',
#              broker='redis://:devpassword@redis:6379/0',
#              backend='redis://:devpassword@redis:6379/0',
#              include=CELERY_TASK_LIST)

# # Optional configuration, see the application user guide.
# app.conf.update(
#     result_expires=3600,
# )

# if __name__ == '__main__':
#     app.start()

# from celery import Celery
# from flask import current_app

# CELERY_TASK_LIST = [
# 	'celery_app.tasks',
# ]

# def create_celery_app(app):

# 	celery = Celery(app.import_name, 
# 									broker=app.config['CELERY_BROKER_URL'],
# 									include=CELERY_TASK_LIST)
	
# 	# celery = Celery('celery_app',
# 	# 							broker='redis://:devpassword@redis:6379/0',
# 	# 							backend='redis://:devpassword@redis:6379/0',
# 	# 							include=CELERY_TASK_LIST)
	
# 	celery.conf.update(app.config)
# 	TaskBase = celery.Task

# 	class ContextTask(TaskBase):
# 			abstract = True

# 			def __call__(self, *args, **kwargs):
# 					with app.app_context():
# 							return TaskBase.__call__(self, *args, **kwargs)

# 	celery.Task = ContextTask
# 	return celery

# celery_app = create_celery_app(current_app)


# ==========

from flask import Flask
from celery import Celery

def create_celery_app(broker, backend, app_name):
    app = Flask(app_name)

    # Configure Celery
    celery = Celery(
        app.import_name,
        broker=broker,
        backend=backend,
    )

    # Set the task name prefix to differentiate tasks of different Flask apps
    celery.conf.task_default_queue = app.import_name

    # Allow access to Flask app context in tasks
    celery.conf.task_default_kwargs = {'app_context': app.app_context}

    return celery