-- CREATE DATABASE IF NOT EXISTS codrrdatabase
SELECT 'CREATE DATABASE codrrdatabase'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'codrrdatabase')\gexec