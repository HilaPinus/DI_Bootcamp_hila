-- CREATE TABLE city_info (
-- event_datetime timestamp NOT NULL, 
-- city VARCHAR(50) NOT NULL, 
-- temperature decimal NOT NULL,
-- light decimal NOT NULL, 
-- airquality_raw decimal NOT NULL, 
-- sound decimal NOT NULL, 
-- humidity decimal NOT NULL, 
-- dust decimal NOT NULL )

-- COPY city_info(event_datetime, city, temperature, light, airquality_raw, sound, humidity, dust) 
-- FROM 'C:\Users\Public\city_info.csv' DELIMITER ',' CSV HEADER;


-- 1. Select everything from the table. (every row and columns) - How many records does the table have? 
-- SELECT * FROM city_info;
-- SELECT COUNT(*) FROM city_info; 4711 

-- 2. What was Bostons temperature on the 01/03/2015 at 11am ?
-- SELECT temperature FROM city_info WHERE city='Boston' AND event_datetime='2015-03-01T11:00';

-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ?
-- SELECT event_datetime FROM city_info WHERE temperature > 28 AND temperature < 30 AND city='San Francisco';

-- 4. Which city was the most noisy (show the name of the city, the date and the noise index)? Don't use the MAX function
-- SELECT city, event_datetime FROM city_info ORDER BY sound DESC LIMIT 1;

-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? - Don't use the MIN function
-- SELECT city, event_datetime FROM city_info ORDER BY sound ASC LIMIT 1;

-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.
-- SELECT dust FROM city_info WHERE city='San Francisco' AND event_datetime > '2015-03-26T20:00:00';

-- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
-- SELECT EXTRACT(DOW FROM event_datetime) FROM city_info WHERE city='Geneva' AND humidity BETWEEN 40 AND 60;

-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? Use an alias for the day of the week.
-- SELECT city, EXTRACT(DOW FROM event_datetime) FROM city_info ORDER BY light DESC LIMIT 1;

-- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase). Look at the DISTINCT constraint.
 -- SELECT DISTINCT city FROM city_info WHERE city ILIKE 's%';

-- 10. Add to the table, todays information in Israel - of this very hour. 
--(event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust) -- - 
--Use the return statement to see what you just inserted:
-- INSERT INTO city_info (event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust)
-- VALUES ('2022-11-13T20:00:00', 'Hadera', '35.22793', '6557.749995', '30.35533271', '1572.927093
-- ', '37.06556165', '1285.857243');

-- SELECT city FROM city_info WHERE city LIKE 'H%';
