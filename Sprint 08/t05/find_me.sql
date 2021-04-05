SELECT *
FROM(
    SELECT role.name, COUNT(teams.hero_id) as count, role.id
    FROM(
        SELECT*
        FROM(SELECT *
            FROM(SELECT *
                FROM heroes 
                WHERE NOT race='human'
                )AS not_human
                WHERE not_human.name LIKE '%a%')AS with_a
        WHERE with_a.class_role='healer' OR with_a.class_role='tankman'
    )AS role
    JOIN teams
    ON teams.hero_id = role.id
    GROUP BY role.id
)AS res
WHERE res.id=(SELECT MIN(res.id)
FROM(
    SELECT role.name, COUNT(teams.hero_id) as count, role.id
    FROM(
        SELECT*
        FROM(SELECT *
            FROM(SELECT *
                FROM heroes 
                WHERE NOT race='human'
                )AS not_human
                WHERE not_human.name LIKE '%a%')AS with_a
        WHERE with_a.class_role='healer' OR with_a.class_role='tankman'
    )AS role
    JOIN teams
    ON teams.hero_id = role.id
    GROUP BY role.id
)AS res
);