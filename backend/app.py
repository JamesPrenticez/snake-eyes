import os
from project import create_app

app = create_app(config_env=os.getenv('ENVIRONMENT'))