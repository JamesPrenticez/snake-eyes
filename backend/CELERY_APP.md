**Redis**
```sh
	docker run -d -p 6379:6379 redis
```

**Celery**
(Getting started with Cerlery)[https://docs.celeryq.dev/en/stable/getting-started/next-steps.html#project-layout]

Run this from inside 'project' directory
```sh
	celery -A celery_app worker -l INFO
```