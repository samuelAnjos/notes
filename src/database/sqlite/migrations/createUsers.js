const createUsers = `
CREATE TABLE if not exists users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(80),
    email varchar(80),
    password varchar(80),
    avatar varchar(80) null,
    created_at TIMESTAMP DAFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DAFAULT CURRENT_TIMESTAMP
)`;

module.exports - createUsers;
