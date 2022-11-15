-- 🌟 Exercise 1 : Items And Customers
-- All items, ordered by price (lowest to highest).
SELECT * FROM items ORDER BY item_price DESC;
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items WHERE item_price>=80 ORDER BY item_price ASC;
-- The first 3 customers in alphabetical order of the first name (A-Z) – 
--exclude the primary key column from the results.
SELECT * FROM customers;
SELECT customers_first_name FROM customers GROUP BY customers_first_name ORDER BY customers_first_name ASC LIMIT 3;
-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT customers_last_name FROM customers  GROUP BY customers_last_name ORDER BY customers_last_name DESC;
