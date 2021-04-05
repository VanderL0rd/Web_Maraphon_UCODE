SELECT res_1.name as name, res_1.point as points
FROM (
    SELECT *
FROM(
    SELECT hero_id AS h_id, SUM(powers.points) AS point
    FROM powers 
    GROUP BY hero_id
) AS res
LEFT JOIN heroes 
ON heroes.id = res.h_id
WHERE res.point=(SELECT MAX(point) AS max
FROM(
    SELECT hero_id as h_id, SUM(powers.points) AS point
    FROM powers 
    GROUP BY hero_id
) AS res) )AS res_1;

SELECT res_1.name as name, res_1.point as points
FROM (
    SELECT *
FROM(
    SELECT hero_id AS h_id, SUM(points) AS point
    FROM powers 
    WHERE type='defence'
    GROUP BY hero_id
) AS res
LEFT JOIN heroes 
ON heroes.id = res.h_id
WHERE res.point=(SELECT MIN(point) AS max
FROM(
    SELECT hero_id as h_id, SUM(powers.points) AS point
    FROM powers 
    WHERE type='defence'
    GROUP BY hero_id
) AS res) )AS res_1;

SELECT * 
FROM (
SELECT *
FROM(
    SELECT hero_id AS h_id, SUM(powers.points) AS point
    FROM powers 
    GROUP BY hero_id
)AS res
LEFT JOIN  heroes
ON heroes.id=res.h_id
ORDER BY res.point DESC
)AS f;

SELECT *
FROM (
    SELECT rex.alias, SUM(rex.points) AS point
    FROM (
        SELECT teams.hero_id AS h_id, teams.name AS alias, powers.points
        FROM teams
        LEFT JOIN powers
        ON powers.hero_id=teams.hero_id
    )AS rex
    GROUP BY rex.alias
)AS ty
ORDER BY ty.point
