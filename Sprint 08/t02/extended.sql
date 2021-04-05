USE ucode_web;
CREATE TABLE IF NOT EXISTS powers(
    id INT PRIMARY KEY AUTO_INCREMENT,
    hero_id INT NOT NULL,
    name TEXT NOT NULL,
    points INT NOT NULL,
    type ENUM('attack', 'defence') NOT NULL
);

CREATE TABLE IF NOT EXISTS races(
    id INT,
    hero_id INT NOT NULL,
    name TEXT NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE 
);

CREATE TABLE IF NOT EXISTS teams(
    id INT,
    hero_id INT NOT NULL,
    name TEXT NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE
);