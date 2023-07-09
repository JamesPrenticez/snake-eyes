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

	APPLICATION_ROOT = '/'
	PREFERRED_URL_SCHEME = 'http'

class Development_Config(Config):
	SQLALCHEMY_DATABASE_URI = f""
	SECRET_KEY=os.getenv("SECRET_KEY"),
	SERVER_NAME='localhost:8000'
	FLASK_RUN_HOST=os.getenv("FLASK_RUN_HOST"),
	FLASK_RUN_PORT=os.getenv("FLASK_RUN_PORT")

class Testing_Config(Config):
	SQLALCHEMY_DATABASE_URI = f""
	SECRET_KEY=os.getenv("SECRET_KEY"),
	SERVER_NAME='localhost:8000'
	FLASK_RUN_HOST=os.getenv("FLASK_RUN_HOST"),
	FLASK_RUN_PORT=os.getenv("FLASK_RUN_PORT")

class Production_Config(Config):
	SQLALCHEMY_DATABASE_URI = f""
	SECRET_KEY=os.getenv("SECRET_KEY"),

config={
	'development': Development_Config,
	'testing': Testing_Config,
	'production': Production_Config,
}