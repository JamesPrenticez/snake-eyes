# For more information, please refer to https://aka.ms/vscode-docker-python
# Base Image
FROM python:3-alpine3.9

EXPOSE 8000

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

# Install pip requirements
COPY requirements.txt .
RUN python -m pip install -r requirements.txt

# Egg info - python package for active development
COPY . .
RUN pip install --editable . 

WORKDIR /project
COPY . /project

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "project.main:create_app('development')"]
