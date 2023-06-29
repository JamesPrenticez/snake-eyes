
# Backing Sheets - Backend
## Installation Instructions
Azure Functions require Python 3.9.x

### Installation
Hint: You may need to run terminal as administrator

```sh
pip install virtualenv
```

```sh
virtualenv venv --python=python3.9.13
```
============================================
ENV 
============================================
```sh
. venv/Scripts/activate
```
============================================
DOCKER 
============================================
```sh
docker-compose up --build
```
============================================
============================================

```sh
pip install -r requirements.txt
```

cd backend 
cp .env.example .env
update the .env file

## Testing

To run all the tests:

-----------------------------------------
-----------------------------------------
```sh
python -m pytest -v
```
-----------------------------------------
-----------------------------------------

To check the code coverage of the tests:

```sh
python -m pytest --cov-report term-missing --cov=project
```

## Formatting code
```sh 
autopep8 --in-place --aggressive --recursive project
```
===

## File Structure 
root
│   README.md
│   app.py
│
└───project
│   │   __init__.py
│   │   function.json
│   │
│   └───routes
│   │   │   __init__.py
│   │   │   home.py
│   │ 
│   └───auth
│   │   │   __init__.py
│   │   │   decorator.py
│   │
│   └───models
│   │   │   __init__.py
│   │   │   User.py
│   │
│   └───tests
│		    │
│		    └───functional
│		    │   │		__init__.py
│		    │   │		test_security_api.py
│		    │
│		    └─── Unit
│		        │		__init__.py
│		        │		test_models.py
│   
└───HandleApproach
    │   __init__.py
    │   function.json

## Swagger Documentation

[https://dev.to/sanjan/how-to-add-swagger-ui-to-a-plain-flask-api-project-with-an-openapi-specification-file-1jl8]

[https://editor.swagger.io/]

[https://github.com/sanjan/flask_swagger]