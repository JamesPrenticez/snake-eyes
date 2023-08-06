from flask import Flask
from .config.settings import config
from .config.colors import colors

from project.extensions import mail, csrf
from .celery_app import create_celery_app

def create_app(config_env, settings_override=None):
	app = Flask(
	__name__,
	instance_relative_config=True
	)

	app.config.from_object(config[config_env])
        
	if settings_override:
		app.config.update(settings_override)

	register_blueprints(app)
	register_extensions(app)


	url = f'http://localhost:{config[config_env].FLASK_RUN_PORT}'
	link = f'\033]8;;{url}\a{url}\033]8;;\a'
	print(
		colors.PURPLE, "FlaskApp initalized in:",
		colors.GREEN, config_env, 
		colors.BLUE, 'on PORT:',
		colors.CYAN, link,
		colors.END
  )

	return app

def register_blueprints(app):
  from .routes import blueprint as routes_blueprint
  from .api import blueprint as api_blueprint

  app.register_blueprint(routes_blueprint)
  app.register_blueprint(api_blueprint)
  
def register_extensions(app):
	mail.init_app(app)
	csrf.init_app(app)

	broker_url = 'redis://:devpassword@redis:6379/0'
	backend_url = 'redis://:devpassword@redis:6379/0'
	app_name = 'your_flask_app_name'

	celery_app = create_celery_app(broker_url, backend_url, app_name)

	return None