createdb <dbname>
psql -U <user>
CREATE TABLE users (user_id serial PRIMARY KEY, username VARCHAR(255) UNIQUE, password_hash VARCHAR(255) UNIQUE);
CREATE TABLE posts (post_id serial PRIMARY KEY, title VARCHAR(255) NOT NULL, body TEXT NOT NULL);
