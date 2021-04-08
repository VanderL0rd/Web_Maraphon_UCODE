CREATE DATABASE sword;
CREATE USER 'vchukhrii'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON * . * TO 'vchukhrii'@'localhost';
FLUSH PRIVILEGES;
USE sword;
CREATE TABLE IF NOT EXISTS users(
    login VARCHAR(30) PRIMARY KEY NOT NULL,
    pwd VARCHAR(10) NOT NULL,
    email VARCHAR(50) NOT NULL,
    f_name TEXT NOT NULL,
    is_admin ENUM('TRUE', 'FALSE') DEFAULT 'FALSE' NOT NULL
);