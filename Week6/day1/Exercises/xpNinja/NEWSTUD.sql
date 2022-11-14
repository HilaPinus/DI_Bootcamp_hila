-- CREATE TABLE students (
-- 	student_id SERIAL PRIMARY KEY, 
-- 	student_last_name VARCHAR(20) NOT NULL, 
-- 	student_first_name VARCHAR(20) NOT NULL, 
-- 	student_birth_date DATE NOT NULL
-- )

-- COPY students(student_id, student_last_name, student_first_name, student_birth_date)
-- FROM 'C:\Users\Public\STUDENT.excel' 
-- DELIMITER ',' 
-- CSV HEADER;


-- INSERT INTO students (student_last_name, student_first_name, student_birth_date)
-- VALUES 
-- ('Marc', 'Benichou', '02-11-1998'),
-- ('Yoan', 'Cohen', '03/12/2010'),
-- ('Lea', 'Benichou', '27/07/1987'),
-- ('Amelia', 'Dux', '07/04/1996'),
-- ('David', 'Grez', '14/06/2003'),
-- ('Omer', 'Simpson', '03/10/1980');

-- SELECT * FROM students;


-- INSERT INTO students (student_last_name, student_first_name, student_birth_date)
-- VALUES 
-- ('Hila', 'Zamir', '11-08-1991');

-- SELECT * FROM students;


-- Fetch all of the data from the table.
-- SELECT * FROM students;


-- Fetch all of the students first_names and last_names.
-- SELECT student_last_name, student_first_name FROM students;


-- For the following questions, only fetch the first_names and last_names of the students.

-- Fetch the student which id is equal to 2.
-- SELECT student_last_name, student_first_name FROM students WHERE student_id = 2;

-- Fetch the student whose last_name is Benichou AND first_name is Marc.
-- SELECT * FROM students WHERE student_first_name='Marc' AND student_last_name ='Benichou';


-- Fetch the students whose last_names are Benichou OR first_names are Marc.
-- SELECT * FROM students WHERE student_first_name='Marc' OR student_last_name ='Benichou';

-- Fetch the students whose first_names contain the letter a.
-- SELECT * FROM students WHERE student_first_name ILIKE 'a';

-- Fetch the students whose first_names start with the letter a.
-- SELECT * FROM students WHERE student_first_name ILIKE 'a%';

-- Fetch the students whose first_names end with the letter a.
-- SELECT * FROM students WHERE student_first_name ILIKE '$a';

-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- SELECT * FROM students WHERE student_first_name ILIKE '%a%';

-- Fetch the students whose id’s are equal to 1 AND 3 .
-- SELECT * FROM students WHERE student_id = 1 AND student_id =3;

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
-- SELECT * FROM students WHERE EXTRACT(YEAR FROM student_birth_date) >= 01/01/2000;




--Select
--For the following questions, you have to fetch the first_names, last_names and birth_dates of the students.

-- Fetch the first four students. You have to order the four students alphabetically by last_name.
-- SELECT student_first_name, student_last_name, student_birth_date FROM students ORDER BY student_last_name ASC LIMIT 4;


-- Fetch the details of the youngest student.
SELECT * FROM students ORDER BY student_birth_date DESC LIMIT 1;

-- Fetch three students skipping the first two students.
