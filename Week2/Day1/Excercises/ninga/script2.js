 /*
Exercises XP Ninja

Exercise 1 : Evaluation
*/
5 >= 1 //true
0 === 1 // false
4 <= 1 //false
1 != 1 //false
"A" > "B" //false
"B" < "C" //false --- true XXX
"a" > "A" //false --- true XXX
"b" < "A" //false
true === false //false
true != true //false


Exercise 2 : Ask For Numbers
Ask the user for a string of numbers separated by commas
Console.log the sum of the numbers.
Hint: use some string methods

const usersNumbers = prompt("type numbers separeted by commas");
usersNumbers = usersNumbers.join(,);
console.log(usersNumbers);

const str1 = '5a';
const str2 = '15b';

const result = parseInt(str1, 10) + parseInt(str2, 10);

console.log(result); // 👉️ 20


Exercise 3 : Find Nemo
Ask the user to give you a sentence containing the word “Nemo”.
 For example "I love the movie named Nemo"
Find the word “Nemo”
Console.log a string as follows: "I found Nemo at
 [the position of the word Nemo]".
If you can’t find Nemo, console.log “I can’t find Nemo”.

Exercise 4 : Boom
Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:
If the number given is less than 2 : return “boom”
If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
If the number given is evenly divisible by 2, add a exclamation mark to the end.
If the number given is evenly divisible by 5, return the string in ALL CAPS.
If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
*/