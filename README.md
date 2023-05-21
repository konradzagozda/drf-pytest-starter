# README.md

## Development environment preset with dev containers

Requirements:

- docker
- vscode
- dev containers extension

Steps:

1. `F1` > `Dev Containers: Open Folder in Container...`
2. Enjoy preset development environment with all black / isort / pylint! 🎉
3. `docker compose up -d`

## Local setup

Requirements:

- docker
- linux

Steps:

1. `cp env/local.env .env` - prepare env for docker
2. `docker compose up -d` - start server

## Running server

```sh
docker compose up -d
```

You have available:

- <localhost:8000> - django server
- <localhost:8000/swagger> - swagger documentation
- <localhost:8000/redoc> - redoc documentation
- <localhost:8888> - last code coverage html report
- <localhost:5432> - postgres instance
- <localhost:5050> - pgadmin (`postgres@postgres.com` / `postgres`)

## Operations

There are vscode tasks defined, to run them press `F1` > `Tasks: Run Task` and select one of:

- `run project` or cmd `docker compose up -d`
- `run tests` or cmd `docker compose exec backend bash -c "cd .. && pip install -r test/requirements.txt && python -m pytest"`
- `migrate` or cmd `cd backend/src && python manage.py migrate`
- `makemigrations` or cmd `backend/src && python manage.py makemigrations`

Add packages:

- `cd backend && poetry add <package>`
- `cd backend && poetry add <package> --group dev`
- `cd backend && poetry add <package> --group test`

`/src/requirements.txt` and `/test/requirements.txt` are generated on pre-commit

## Logs

```sh
docker compose logs -f [service]
```
