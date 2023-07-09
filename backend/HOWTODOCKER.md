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
```

### Check for dangling images
```sh
	docker image

	_and_

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