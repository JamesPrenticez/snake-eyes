```sh
	docker --version
	docker-compose --version
```

### Spin up docker
```sh
	docker-compose up --build
```

### Tear down docker
```sh
	docker-compose stop
```

### Remove containers
```sh
	docker-compose rm -f
	
	_or_

	docker-compose rm --all
```

### Check for dangling images
```sh
	docker image

	_or_

	docker rmi -f $(docker images -qf dangling=true)
```

### Run Tests
```sh
	docker-compose exec backend py.test project/tests
```

### Code Coverage
```sh 
	docker-compose exec backend py.test --cov-report term-missing --cov project
```

### Linting
```sh 
	docker-compose exec backend flake8 .
```

# CLI 
Its hard to remember all these commands and flags so we set up a CLI app to help make that easy

### Get all commands avliable in our app

```sh
	docker-compose exec backend snakeeyes

	_or_ 

	docker-compose exec backend snakeeyes flake8
	docker-compose exec backend snakeeyes flake8 --help
	docker-compose exec backend snakeeyes flake8 --no-skip-init

	_or_ 

	docker-compose exec backend snakeeyes cov

	_or_

	docker-compose exec backend snakeeyes test
```