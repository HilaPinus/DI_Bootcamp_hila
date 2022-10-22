/*
//Daily Challenge: Stars
//Write a JavaScript program that recreates the pattern below.
//Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
//Do this Daily Challenge by youself, without looking at the answers on the internet.
*  
* *  
* * *  
* * * *  
* * * * *
* * * * * *
*/

let pattern = "";
const star = "*";
for (let counter=1 ; counter <= 6; counter++) {
    //pattern = pattern+star;
    pattern +=star;
    console.log(pattern);
}





//Daily Challenge GOLD: Bubble Sort
//const numbers = [5,0,9,1,7,4,2,6,3,8];
//Using the .toString() method convert the array to a string.

const numbers = [5,0,9,1,7,4,2,6,3,8];
const stringNumber =  numbers.toString();
console.log(stringNumber);

//Using the .join()method convert the array to a string. Try passing different values into the join.
//Eg .join(“+”), .join(” “), .join(“”)
const numbers = [5,0,9,1,7,4,2,6,3,8];
const stringNumber =  numbers.join(" ");
console.log(stringNumber);

//Bonus : To do this Bonus look up how to work with nested for loops
//Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
//The output should be: [9,8,7,6,5,4,3,2,1,0]
//Hint: The algorithm is called “Bubble Sort”
//Use a temporary variable to swap values in the array.
//Use 2 “nested” for loops (Nested means one inside the other).

function SortNum(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] < array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}
var numbersToSort = [5,0,9,1,7,4,2,6,3,8];
var sortedList = SortNum(numbersToSort);
console.log(sortedList);