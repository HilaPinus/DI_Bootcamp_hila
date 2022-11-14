-- CREATE TABLE items (item_name VARCHAR(20) NOT NULL, item_size TEXT, item_price SMALLINT);
-- CREATE TABLE customers (customers_first_name VARCHAR(20) NOT NULL, customers_last_name VARCHAR(20) NOT NULL);


-- INSERT INTO items (item_name, item_size, item_price) 
-- VALUES 
-- ('Desk', 'small', 100),
-- ('Desk', 'large', 300),
-- ('Fan', null, 80);

-- INSERT INTO customers(customers_first_name, customers_last_name) 
-- VALUES 
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');


-- -- All the items.
-- 	SELECT * FROM items;

-- -- All the items with a price above 80 (80 not included).
-- SELECT * FROM items WHERE item_price >= 81;

-- -- All the items with a price below 300. (300 included)
-- SELECT * FROM items WHERE item_price < 300;

-- -- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- SELECT * FROM customers WHERE customers_last_name = 'Smith';

-- -- All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE customers_last_name = 'Jones';

-- -- All customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers WHERE customers_first_name = 'Scott';
