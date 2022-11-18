-- Part I

-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)


CREATE TABLE customer (
customer_id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL
);

INSERT INTO customer (first_name, last_name) 
VALUES ('hila', 'zamir'), ('matan', 'pinus'), ('shilo', 'mia');


CREATE TABLE customerProfile (
profile_id SERIAL PRIMARY KEY,
isLoggedIn BOOLEAN DEFAULT FALSE,
customer_id INTEGER UNIQUE REFERENCES customer(customer_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO customerProfile (customer_id, isLoggedIn)
VALUES ((SELECT customer_id FROM customer WHERE first_name='hila' AND last_name='zamir'), TRUE),
((SELECT customer_id FROM customer WHERE first_name='matan' AND last_name='pinus'), FALSE);

-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers

SELECT first_name 
FROM customer
INNER JOIN customerProfile
ON customer.customer_id = customerProfile.customer_id
WHERE customerProfile.isLoggedIn = TRUE;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT first_name, isLoggedIn
FROM customer
LEFT JOIN customerProfile
ON customer.customer_id = customerProfile.customer_id;

-- The number of customers that are not LoggedIn
SELECT first_name AS number_users_not_logged
FROM customer
FULL JOIN customerProfile
ON customer.customer_id = customerProfile.customer_id
WHERE isLoggedIn IS NOT TRUE;
-- IS NOT WORKS WITH NULL! NOT IN, DOESNT WORK WITH NULL




-- Part II:

-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE book (
book_id SERIAL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
author VARCHAR(50) NOT NULL
);

-- Insert those books :
-- Alice In Wonderland, L ewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

INSERT INTO book (title, author)
VALUES 
('Alice In Wonderland', 'L ewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')
;

-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, 
-- age. Make sure that the age is never bigger than 15 (Find an SQL method);

CREATE TABLE Student (
student_id SERIAL PRIMARY KEY,
student_name  VARCHAR(50) NOT NULL UNIQUE,
age SMALLINT NOT NULL CHECK(age<=15)
);

-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14

INSERT INTO student (student_name, age)
VALUES ('John', 12), ('Lera', 11), ('Patrick', 10), ('Bob', 14);


CREATE TABLE book_student (
book_fk_id INTEGER REFERENCES book(book_id) ON DELETE SET NULL ON UPDATE SET NULL,
student_fk_id INTEGER REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
borrowed_date DATE,
PRIMARY KEY (book_fk_id, student_fk_id)
);


-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table

-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

INSERT INTO book_student (book_fk_id, student_fk_id, borrowed_date)
VALUES 
((SELECT book_id FROM book WHERE title ILIKE '%Alice In Wonderland%'), 
 (SELECT student_id FROM student WHERE student_name = 'hila'), 
 '2022-02-12'
),
 
((SELECT book_id FROM book WHERE title ILIKE '%Alice In Wonderland%'), 
 (SELECT student_id FROM student WHERE student_name = 'matan'), '2022-02-14'),

((SELECT book_id FROM book WHERE title ILIKE '%To kill a mocskingbird%'), 
 (SELECT student_id FROM student WHERE student_name = 'shilo'), now()),
 
 
((SELECT book_id FROM book WHERE title ILIKE '%Harry Potter%'), 
 (SELECT student_id FROM student WHERE student_name = 'shilo'), now());

-- Display the data
-- Select all the columns from the junction table
-- Select the name of the student and the title of the borrowed books
-- Select the average age of the children, that borrowed the book Alice in Wonderland
-- Delete a student from the Student table, what happened in the junction table ?
