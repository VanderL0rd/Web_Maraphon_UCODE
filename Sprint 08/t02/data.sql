INSERT INTO races(id,hero_id,name) VALUES (1,1,'Human');
INSERT INTO races(id,hero_id,name) VALUES (2,2,'Android');
INSERT INTO races(id,hero_id,name) VALUES (3,4,'Kree');
INSERT INTO heroes(name, description, race, class_role) VALUES ('Red Skull', 'desc', 'human' ,'dps');
INSERT INTO teams(id,hero_id,name) VALUES (1,1,'Avangers');
INSERT INTO teams(id,hero_id,name) VALUES (2,5,'Hydra');
INSERT INTO heroes(name, description, race, class_role) VALUES ('Captain America', 'desc', 'human' ,'dps');
INSERT INTO powers(hero_id,name,points,type) VALUES (6,'iron shield',200, 'defence');
INSERT INTO heroes(name, description, race, class_role) VALUES ('Hulk', 'desc', 'human' ,'dps');
INSERT INTO powers(hero_id,name,points,type) VALUES (6,'iron shield',110, 'attack');