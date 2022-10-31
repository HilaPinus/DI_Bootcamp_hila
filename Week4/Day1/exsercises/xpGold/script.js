//Exercise 1: Sum Elements
//Write a JavaScript program to find the sum of all elements in an array.

let myArray = [1, 2, 3, 4, 5]
let sumArrayElements = 0;
for (let i = 0; i < myArray.length; i++) {
    sumArrayElements += myArray[i];
console.log(sumArrayElements);
}







//Exercise 2 : Remove Duplicates
//Write a JavaScript program to remove duplicate items in an array.


let family = ["hila", "hila", "hila", "matan", "matan", "matan"];
function removeDuplicate(family) {
return family.filter((name, index) => family.indexOf(name) === index);
}
console.log(removeDuplicate(family));







//Exercise 3 : Remove Certain Values
//Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
//Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
//Expected result : [15, -22, 47]

function remove(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (isNaN(arr[i]) || arr[i] === 0 || arr[i] === false || arr[i] === "" || arr[i] === undefined || arr[i] === null) {
            arr.splice(i, 1);
        }
    }
    console.log(arr);
}
remove([NaN, 0, 15, false, -22, '', undefined, 47, null]);









//Exercise 4 : Repeat Please !
//Write a JavaScript function to concatenate a given string n times (default is 1).
//Create the repeat function yourself:
//console.log(repeat('Ha!',3));
//"Ha!Ha!Ha!"


function repeat (sentence, numberOfTimes) {
   console.log;"haaa!";
}
repeat("haaa!", 3)



/*
//Exercise 5 : Turtle & Rabbit
//For this exercise, look at the lesson More JS methods.
//Using this code :
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
Line up the Turtle and the Rabbit at the start line.
Expected Output:

    When you write:

    console.log(startLine);
    console.log(turtle);
    console.log(rabbit);

    It should look like this:

    '     ||<- Start line'
    '       🐢'
    '       🐇'


*/
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';


console.log(startLine);
console.log(turtle.padStart(5));
console.log(rabbit.padStart(5));


//What happens when you run turtle = turtle.trim().padEnd(9, '='); ?

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.trim().padEnd(9, '=');
console.log(startLine);
console.log(turtle);
console.log(rabbit);
