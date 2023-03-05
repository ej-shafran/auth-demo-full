CREATE DATABASE auth_demo_db;

CREATE USER `auth_demo`@`localhost` IDENTIFIED WITH mysql_native_password BY "z10mz10m";

GRANT ALL PRIVILEGES ON auth_demo_db.* TO `auth_demo`@`localhost`;

FLUSH PRIVILEGES;
