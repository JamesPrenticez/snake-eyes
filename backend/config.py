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

class Development_Config(Config):
	SQLALCHEMY_DATABASE_URI = f""
	SECRET_KEY=os.getenv("SECRET_KEY"),

class Production_Config(Config):
	SQLALCHEMY_DATABASE_URI = f""
	SECRET_KEY=os.getenv("SECRET_KEY"),

config={
	'development': Development_Config,
	'production': Production_Config,
}