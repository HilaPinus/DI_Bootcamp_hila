-- SELECT * FROM actors ORDER BY actor_id ASC;

CREATE TABLE movies(
    movie_id SERIAL PRIMARY KEY,
    movie_title VARCHAR (50) NOT NULL,
    movie_story TEXT, 
    actor_playing_id INTEGER REFERENCES actors (actor_id)
);

-- the column actor_playing_id references the column actor_id from actors table
-- FOREIGN KEY - FK

SELECT * FROM movies;

-- INSERT INTO movies (movie_title,movie_story, actor_playing_id)
-- VALUES ('Ocean Eleven', 'Bla Bla', 10); -- ERROR actor_id = 10 doesn't exist

-- SUBQUERIES
INSERT INTO movies (movie_title,movie_story, actor_playing_id)
VALUES ('Ocean Eleven', 'Bla Bla', 
        (SELECT actor_id FROM actors WHERE first_name='Matt' AND last_name='Damon'));

INSERT INTO movies (movie_title,movie_story, actor_playing_id)
VALUES ('Robin Hood', 'Bla Bla', 
        (SELECT actor_id FROM actors WHERE first_name='Matt' AND last_name='Damon'));

INSERT INTO movies (movie_title,movie_story, actor_playing_id)
VALUES ('The little mermaid', 'Bla Bla', 
        (SELECT actor_id FROM actors WHERE first_name='George' AND last_name='Clooney'));

-- select the movies where matt damon played in
SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
INNER JOIN movies
ON actors.actor_id = movies.actor_playing_id
WHERE first_name='Matt' AND last_name='Damon';

-- how many movies matt damon played in
-- how many times do we find the same first name and last name from the movies table
SELECT actors.first_name, actors.last_name, COUNT(movie_title) AS number_movies
FROM actors
INNER JOIN movies
ON actors.actor_id = movies.actor_playing_id
GROUP BY actors.first_name, actors.last_name
HAVING first_name='Matt' AND last_name='Damon';

















