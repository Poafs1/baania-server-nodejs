# Baania Interview Take Home Exam

## Requirement

1. .env
2. ormconfig.json (root/typeorm)

Example `ormconfig.json`

```JSON
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "",
  "password": "",
  "database": "baania-dev",
  "entities": ["src/**/**.entity{.ts,.js}"],
  "synchronize": true,
  "migrations": ["migrations/*.ts"]
}
```

## Installation

```sh
yarn install
```

### Database

**Step 1**: Initialize Postgres database

```sh
docker-compose -f docker-compose-db.dev.yaml up --build
```

**Step 2**: Create database

```sh
yarn pg:init:database
```

**Step 3**: Run migration

```sh
yarn pg:migration:run
```

**Step 4**: Init mock data

```sh
yarn pg:init:data
```

## Run

### Locally

```sh
yarn start:dev
```

### Docker

```sh
docker-compose -f docker-compose.dev.yaml up --build
```
