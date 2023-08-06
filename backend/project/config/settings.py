import os
from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))

class Config:
	ENV=os.getenv('ENVIROMENT')
	APP_NAME='snakeeyes'
	JSONIFY_PRETTYPRINT_REGULAR = True # Format JSON output for the api
	SQLALCHEMY_TRACK_MODIFICATIONS = False
	SQLALCHEMY_ECHO = False
	SESSION_COOKIE_DOMAIN = 'localhost.localdomain' 
	# SESSION_COOKIE_DOMAIN=os.getenv('SESSION_COOKIE_DOMAIN') # DOCKER doesnt pick up the env file how to fix?
	APPLICATION_ROOT = '/'
	PREFERRED_URL_SCHEME = 'http'

class Development_Config(Config):
	# Flask Environment
	SQLALCHEMY_DATABASE_URI = f""
	SECRET_KEY=os.getenv("SECRET_KEY"),
	SERVER_NAME='localhost:8000'
	FLASK_RUN_HOST=os.getenv("FLASK_RUN_HOST")
	FLASK_RUN_PORT=os.getenv("FLASK_RUN_PORT")

	# Flask Mail
	MAIL_DEFAULT_SENDER = 'contact@local.host'
	MAIL_SERVER = 'smtp.gmail.com'
	MAIL_PORT = 587
	MAIL_USE_TLS = True
	MAIL_USE_SSL = False
	MAIL_USERNAME = 'you@gmail.com'
	MAIL_PASSWORD = 'awesomepassword'

	# Celery
	CELERY_BROKER_URL = 'redis://:devpassword@redis:6379/0'
	CELERY_RESULT_BACKEND = 'redis://:devpassword@redis:6379/0'
	CELERY_ACCEPT_CONTENT = ['json']
	CELERY_TASK_SERIALIZER = 'json'
	CELERY_RESULT_SERIALIZER = 'json'
	CELERY_REDIS_MAX_CONNECTIONS = 5

class Testing_Config(Config):
	SQLALCHEMY_DATABASE_URI = f""
	SECRET_KEY=os.getenv("SECRET_KEY")
	SERVER_NAME='localhost:8000'
	FLASK_RUN_HOST=os.getenv("FLASK_RUN_HOST"),
	FLASK_RUN_PORT=os.getenv("FLASK_RUN_PORT")

	# Flask Mail
	MAIL_DEFAULT_SENDER = 'contact@local.host'
	MAIL_SERVER = 'smtp.gmail.com'
	MAIL_PORT = 587
	MAIL_USE_TLS = True
	MAIL_USE_SSL = False
	MAIL_USERNAME = 'you@gmail.com'
	MAIL_PASSWORD = 'awesomepassword'

	# Celery
	CELERY_BROKER_URL = 'redis://:devpassword@redis:6379/0'
	CELERY_RESULT_BACKEND = 'redis://:devpassword@redis:6379/0'
	CELERY_ACCEPT_CONTENT = ['json']
	CELERY_TASK_SERIALIZER = 'json'
	CELERY_RESULT_SERIALIZER = 'json'
	CELERY_REDIS_MAX_CONNECTIONS = 5

class Production_Config(Config):
	SQLALCHEMY_DATABASE_URI = f""
	SECRET_KEY=os.getenv("SECRET_KEY"),
	SERVER_NAME='localhost:8000'
	FLASK_RUN_HOST=os.getenv("FLASK_RUN_HOST"),
	FLASK_RUN_PORT=os.getenv("FLASK_RUN_PORT")

	# Flask Mail
	MAIL_DEFAULT_SENDER = 'contact@local.host'
	MAIL_SERVER = 'smtp.gmail.com'
	MAIL_PORT = 587
	MAIL_USE_TLS = True
	MAIL_USE_SSL = False
	MAIL_USERNAME = 'you@gmail.com'
	MAIL_PASSWORD = 'awesomepassword'

	# Celery
	CELERY_BROKER_URL = 'redis://:devpassword@redis:6379/0'
	CELERY_RESULT_BACKEND = 'redis://:devpassword@redis:6379/0'
	CELERY_ACCEPT_CONTENT = ['json']
	CELERY_TASK_SERIALIZER = 'json'
	CELERY_RESULT_SERIALIZER = 'json'
	CELERY_REDIS_MAX_CONNECTIONS = 5

config={
	'development': Development_Config,
	'testing': Testing_Config,
	'production': Production_Config,
}