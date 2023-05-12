# README.md

## Development environment preset with dev containers

Requirements:

- docker
- vscode
- dev containers extension

Steps:

1. `F1` > `Dev Containers: Open Folder in Container...`
2. Enjoy preset development environment with all black / isort / pylint! 🎉

## Running server

```sh
docker compose up -d
```

You have available:

- <localhost:8000> - django server
- <localhost:8888> - last code coverage html report
- <localhost:5432> - postgres instance
- <localhost:5050> - pgadmin (`postgres@postgres.com` / `postgres`)

## Running tests

```sh
docker compose exec web bash -c "pip install -r test/requirements.txt && pytest"
```

## Logs

```sh
docker compose logs -f [service]
```
