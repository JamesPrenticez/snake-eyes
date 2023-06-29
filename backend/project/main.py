from flask import Flask
from config import config

def create_app(config_env):
	app = Flask(
	__name__,
	instance_relative_config=True
	)

	app.config.from_object(config[config_env])

	register_blueprints(app)

	return app

def register_blueprints(app):
  from .routes import blueprint as routes_blueprint
  from .api import blueprint as api_blueprint

  app.register_blueprint(routes_blueprint)
  app.register_blueprint(api_blueprint)