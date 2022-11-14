-- -- CREATE TABLE actors (

-- -- actor_id SERIAL PRIMARY KEY,
-- -- first_name VARCHAR(20) NOT NULL,
-- -- last_name VARCHAR(20) NOT NULL,
-- -- date_birth DATE NOT NULL,
-- -- numbers_oscars SMALLINT NOT NULL
-- -- )

-- -- INSERT INTO actors (first_name, last_name, date_birth, numbers_oscars)
-- -- VALUES('George', 'Clonney', '1999-01-08', 3);


-- -- INSERT INTO actors (first_name, last_name, date_birth, numbers_oscars)
-- -- VALUES('Matt', 'Damon', '1999-10-10', 1);

-- -- SELECT * FROM actors;

-- -- INSERT INTO actors (first_name, last_name, date_birth, numbers_oscars)
-- -- VALUES('Hila', 'Zamir', '1991-10-08', 10);


-- -- INSERT INTO actors (first_name, last_name, date_birth, numbers_oscars)
-- -- VALUES('Mia', 'Pinus', '2021-02-08', 20);


-- -- INSERT INTO actors (first_name, last_name, date_birth, numbers_oscars)
-- -- VALUES
-- -- ('Shilo', 'Pinus', '2021-02-15', 20),
-- -- ('Chichi', 'Pinus', '2018-09-20', 10),
-- -- ('Lior', 'Zamir', '1994-05-08', 10);


-- -- SELECT * FROM actors;


-- -- SELECT * FROM actors WHERE numbers_oscars >=2;
-- -- SELECT first_name, last_name FROM actors WHERE numbers_oscars >=2;

-- -- SELECT * FROM actors WHERE EXTRACT(YEAR FROM date_birth)= 1991;

-- -- SELECT EXTRACT(DOW FROM date_birth) FROM actors WHERE first_name = 'Mia';

-- -- SELECT * FROM actors WHERE first_name = 'George' AND numbers_oscars >=2;
-- -- SELECT * FROM actors WHERE first_name = 'George' OR numbers_oscars >=2;

-- -- SELECT * FROM actors WHERE last_name LIKE '%us';

-- -- SELECT * FROM actors ORDER BY last_name	ASC;

-- -- SELECT * FROM actors ORDER BY numbers_oscars DESC;

-- -- SELECT * FROM actors LIMIT 2;

-- -- SELECT * FROM actors WHERE EXTRACT(YEAR FROM date_birth) >= 1989 LIMIT 2;

-- -- SELECT first_name, last_name, date_birth FROM actors ORDER BY date_birth asc LIMIT 1;

-- --The first 4 actors
-- --SELECT * FROM actors LIMIT 4;

-- --The first 4 actors ordered in descending order of the last_name 
-- --(ie. sorted DESCENDING by the "last_name" column))
-- --SELECT * FROM actors ORDER BY last_name	ASC LIMIT 4;

-- --The actors that have the letter 'e' in their first_name
-- --SELECT * FROM actors WHERE first_name LIKE '%e';

-- --The actors that got at least 5 oscars
-- --SELECT * FROM actors WHERE numbers_oscars >= 5

-- -- SELECT COUNT(actor_id) FROM actors;

-- INSERT INTO actors (first_name, last_name, date_birth, numbers_oscars)
-- VALUES('George', '', '1999-01-08', 3);

-- SELECT * FROM actors;
