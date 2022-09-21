-- SELECT * FROM jokes;
-- 
-- SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id WHERE authors.description LIKE '%march%';

-- SELECT * FROM jokes WHERE author_id IN (2,3,4,5);

-- SELECT id FROM authors WHERE description LIKE '%march%';

SELECT *
FROM jokes
WHERE
  author_id IN (SELECT id FROM authors WHERE description LIKE '%march%')
;

-- UPDATE users
-- SET "currChallenge" = 16
-- WHERE id IN (
--    SELECT id
--    FROM users
--    WHERE id IN (SELECT user_id FROM completions GROUP BY user_id HAVING count(*) = 15 )
--    AND "currChallenge" = 15
-- )

-- Problem: currChallenge should be amount of challenges done + 1

-- First, I find the list of all the users that have completed 15 challenges
-- SELECT user_id FROM completions GROUP BY user_id HAVING count(*) = 15 

-- Second, In that list of user ids, find the ones that have a value of 15 in currChallenge
-- SELECT id
--    FROM users
--    WHERE id IN (LIST OF IDS OF THE FIRST PART)
--    AND "currChallenge" = 15

-- Lastly, update that list of IDs
-- UPDATE users
-- SET "currChallenge" = 16
-- WHERE id IN (LIST OF SECOND PART)