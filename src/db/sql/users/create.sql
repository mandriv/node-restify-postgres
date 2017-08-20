INSERT INTO users(username, password_hash)
VALUES($(username), $(passwordHash))
RETURNING *;
