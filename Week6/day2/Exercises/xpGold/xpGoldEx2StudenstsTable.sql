
-- Update
-- ‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. 
 -- Update both their birth_dates to 02/11/1998.
-- Change the last_name of David from ‘Grez’ to ‘Guez’.

-- UPDATE students SET student_birth_date='1998-11-02' WHERE student_first_name='Benichou' OR student_last_name='Marc';

-- ALTER TABLE students RENAME COLUMN student_first_name TO last_name;
-- ALTER TABLE students RENAME COLUMN student_last_name TO first_name;
-- ALTER TABLE students RENAME COLUMN student_birth_date TO birth_date;




-- Delete
-- Delete the student named ‘Lea Benichou’ from the table.
DELETE FROM students WHERE first_name='Lea';
SELECT * FROM students;

-- Count
-- Count how many students are in the table.
SELECT count(*) AS counting_students FROM students;
-- Count how many students were born after 1/01/2000.
SELECT COUNT (*) AS students_born_after_2000 FROM students WHERE birth_date > '01-01-2000';

-- Insert / Alter
-- Add a column to the student table called math_grade.
ALTER TABLE students ADD COLUMN math_grade SMALLINT;
SELECT * FROM students;
-- Add 80 to the student which id is 1.
-- Add 90 to the students which have ids of 2 or 4.
-- Add 40 to the student which id is 6.
UPDATE students SET math_grade='80' WHERE student_id='1';
UPDATE students SET math_grade='90' WHERE student_id='2' OR student_id='4';
UPDATE students SET math_grade='40' WHERE student_id='6';

-- Count how many students have a grade bigger than 83
SELECT COUNT (*) AS math_grarde_more_83 FROM students WHERE math_grade > '83';

-- Add another student named ‘Omer Simpson’ with the same birth_date as the one 
--already in the table. Give him a grade of 70.
INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Ome', 'impson', '1980-10-03', '70');
SELECT * FROM students;


-- Now, in the table, ‘Omer Simpson’ should appear twice. It’s the same student, although he received 2 different grades because he retook the math exam.
-- Bonus: Count how many grades each student has.
-- Tip: You should display the first_name, last_name and the number of grades of each student. 
--If you followed the instructions above correctly, all the students should have 1 math grade, 
--except Omer Simpson which has 2.
-- Tip : Use an alias called total_grade to fetch the grades.
-- Hint : Use GROUP BY.

SELECT math_grade, COUNT(math_grade) AS total_grade FROM students GROUP BY math_grade;

-- SUM
-- Find the sum of all the students grades.
SELECT sum(math_grade) AS sum_math_grades FROM students;
