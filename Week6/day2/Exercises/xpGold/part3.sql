
-- Create a table named purchases. It should have 3 columns :
-- id : the primary key of the table
-- customer_id : this column references the table customers
-- item_id : this column references the table items
-- quantity_purchased : this column is the quantity of items purchased by a certain customer

-- Insert purchases for the customers, use subqueries:
-- Scott Scott bought one fan
-- Melanie Johnson bought ten large desks
-- Greg Jones bougth two small desks

SELECT * FROM purchases;

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
(SELECT customer_id FROM customers WHERE customers_first_name='Scott'), 
(SELECT items_id FROM items WHERE item_name='Fan'),
1)


INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
(SELECT customer_id FROM customers WHERE customers_first_name='Melanie'), 
(SELECT items_id FROM items WHERE item_size='Large'),
10)


INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
(SELECT customer_id FROM customers WHERE customers_first_name='Greg'), 
(SELECT items_id FROM items WHERE item_size='Small'),
2)

-- Part II

-- Use SQL to get the following from the database:
-- All purchases. Is this information useful to us?
-- All purchases, joining with the customers table.
SELECT * 
FROM purchases
INNER JOIN customers
ON purchases.customer_id = customers.customer_id;

-- Use SQL to show all the customers who have made a purchase. 
-- Show the following fields/columns:
-- Customer first name
-- Customer last name
-- Item name
SELECT customers_first_name, customers_last_name, item_name 
FROM customers
INNER JOIN items
ON customers.customer_id = purchases.customer_id
WHERE quantity_purchased > 0;

