```sh
	docker --version
	docker-compose --version
```

#
```sh
	docker-compose up --build
```

```sh
	docker-compose exec backend py.test project/tests
```

```sh 
	docker-compose exec website py.test --cov -report term -missing
```

```sh 
	docker-compose exec website flake8 .
```