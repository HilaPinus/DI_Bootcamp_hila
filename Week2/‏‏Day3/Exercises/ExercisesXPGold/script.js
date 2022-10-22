//Exercises XP Gold

/*
Exercise 1 : Divisible By Three
Instructions
let numbers = [123, 8409, 100053, 333333333, 7]
Loop through the array above and determine whether or not each number is divisible by three.
Each time you loop console.log true or false.
*/

let myNumbers = Number[123, 8409, 100053, 333333333, 7];
for(i=0; i < myNumbers.length; i++) {
 if(myNumbers[i]%3==0) {
    console.log("true")
 } else {
    console.log("false")
 }
}


//Exercise 2 : Attendance

let guestList = {             n
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

let nameList = Object.keys(guestList);
console.log(nameList);        //input  (5) ['randy', 'karla', 'wendy', 'norman', 'sam']


let userName = prompt("please enter your name");
//for (i=0; i < nameList.length; i++) {               =====> didnt gave me nothing
if (userName[i] !== nameList[-1]) {
  console.log(guestList[i] && guestList.i);             =====>> here I have a problame :(
} else {
  console.log(userName);
}


//Given the object above where the key is the student’s name and the value is the country they are from.
//Prompt the student for their name.
//If the name is in the object, console.log the name of the student and the country they come from.
//For example: "Hi! I'm [name], and I'm from [country]."
//Hint: You don’t need to use a for loop, just look up the statement if ... in
//If the name is not in the object, console.log: "Hi! I'm a guest."



Exercise 3 : Playing With Numbers
//Don’t use built-in Javascript methods to answer the following questions. 
//You have to create the logic by yourself. Use simple for loops.
1. Console.log the sum of all the numbers in the age array.
let age = [20,5,12,43,98,55];
let firstAge = 0;
for (i=0; i <= age.length; i++) {
 firstAge = firstAge + age[i];
}
console.log(firstAge);

//2. Console.log the highest age in the array.

let age = [20,5,12,43,98,55];
let largest = age[0];
for (var i = 0; i < age.length; i++) {
    if (largest < age[i] ) {
        largest = age[i];
    }
}
console.log(largest);



