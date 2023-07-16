# Create dir inside container
docker exec -d baania-postgres-db mkdir mockData

docker cp mockups/pg/table/init.sql baania-postgres-db:mockData/init.sql

docker exec -d baania-postgres-db psql -U postgres -f ./mockData/init.sql
