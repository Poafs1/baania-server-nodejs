-- Drop db
DROP DATABASE "baania-dev";

-- Create new
CREATE DATABASE "baania-dev";

\c "baania-dev"

-- Install extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";