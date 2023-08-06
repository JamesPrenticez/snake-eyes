# Backing Sheets - Backend
## Installation Instructions
Azure Functions require Python 3.9.x

============================================
### INSTALLING/SETUP VIRTUAL ENVIRONMENT
============================================
```sh
pip install virtualenv
```

```sh
virtualenv venv --python=python3.9.13
```
============================================
### SPINNING UP VIRTUAL ENVIRONMENT
============================================
```sh
	. venv/Scripts/activate

	_and_

	deactivate

```
============================================
### REQUIREMENTS
============================================
```sh
	pip install -r requirements.txt
```

============================================
### SET ENVIORNMENT VARIABLES
============================================
cd backend 
cp .env.example .env
update the .env file

============================================
### TESTING
============================================
```sh
	python -m pytest -v

```
============================================
### TEST COVERAGE
============================================
```sh
python -m pytest --cov-report term-missing --cov=project
```

============================================
### LINTING / FORMATTING
============================================
```sh 
	autopep8 --in-place --aggressive --recursive project
```

============================================
### FILE STRUCTURE
============================================
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

============================================
### Swagger Documentation
============================================

[https://dev.to/sanjan/how-to-add-swagger-ui-to-a-plain-flask-api-project-with-an-openapi-specification-file-1jl8]

[https://editor.swagger.io/]

[https://github.com/sanjan/flask_swagger]