-- Find out how many films there are for each rating.
SELECT * FROM film
SELECT COUNT(title) FROM film GROUP BY rating

-- Get a list of all the movies that have a rating of G or PG-13.
SELECT title FROM film WHERE rating IN ('G') OR rating IN('PG-13'); 

-- Filter this list further: look for only movies that are under 2 hours long, 
--and whose rental price (rental_rate) is under 3.00. 
--Sort the list alphabetically.

SELECT title FROM film WHERE length < 120 AND rental_rate < 3 ORDER BY title ASC;

-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
SELECT * FROM customer WHERE customer_id='524';
UPDATE customer SET first_name='Hila', last_name='Zamir', email='hila.pinus@gmail.com' WHERE customer_id='524' AND address_id='530';



