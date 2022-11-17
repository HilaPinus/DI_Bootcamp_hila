CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')


CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)

SELECT * FROM FirstTab

SELECT * FROM SecondTab



-- Q1. What will be the OUTPUT of the following statement?
 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- 0 - "where id is null" - NOT IN - this poins to id number 2 - and id number 2 doesnt exist in table1, 
so its 0
 -- the real anwer is, that null isnt = null so its 0, although the logic tells that it was sepused to point
 -- to the 3 id's that arent null, but that's not the case. we cant comper with null. 
 
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
	
-- id=5 in the secondtab = id of table 5 is pawan ->2;

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
	--still 2
	-- wrong. dont really understand why.
	
	    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
	--not null its like the the second code -> 2