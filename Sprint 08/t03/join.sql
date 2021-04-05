SELECT heroes.name, teams.name FROM heroes
LEFT JOIN teams ON heroes.id=teams.hero_id;
SELECT powers.name, heroes.name FROM heroes
RIGHT JOIN powers ON heroes.id=powers.hero_id;

INSERT INTO powers(hero_id,name,points,type) VALUES (8,'iron shield',110, 'attack');
INSERT INTO teams(id,hero_id,name) VALUES (3,8,'Avangers');
SELECT heroes.name,powers.name,teams.name FROM heroes
RIGHT JOIN powers ON heroes.id=powers.hero_id
INNER JOIN teams ON heroes.id=teams.hero_id;