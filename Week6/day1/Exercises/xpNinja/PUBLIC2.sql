-- Update the first name of Matt Damon to "Maty"
-- UPDATE actors SET first_name='Maty' WHERE first_name = 'Matt';

-- Update the number of oscars of George Clooney to 4, and return the updated record
-- UPDATE actors SET numbers_oscars='4' WHERE first_name='George' AND last_name='Clonney'
-- RETURNING*;
-- SELECT * FROM actors;

-- Rename the 'age' column by 'birthdate'
-- ALTER TABLE actors RENAME COLUMN date_birth TO age;
-- SELECT * FROM actors;


-- -- Delete one actor and return it
-- DELETE FROM actors WHERE actor_id = 7
-- RETURNING*;

-- SELECT * FROM actors ORDER BY actor_id ASC;

-- -- DELETE FROM actors WHERE actor_id = 9;

-- SELECT * FROM actors;

-- INSERT INTO actors (first_name, last_name, age, numbers_oscars)
-- VALUES ('Lea', 'Zamir', '1959-10-07', 2)
-- RETURNING*;

-- SELECT * FROM actors ORDER BY actor_id ASC;


