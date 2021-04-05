CREATE DATABASE ucode_web;
CREATE USER 'vchukhrii'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON * . * TO 'vchukhrii'@'localhost';
FLUSH PRIVILEGES;