import os
from project import create_app

app = create_app(config_env="development")
# app = create_app(config_env="os.getenv('ENVIROMENT')")