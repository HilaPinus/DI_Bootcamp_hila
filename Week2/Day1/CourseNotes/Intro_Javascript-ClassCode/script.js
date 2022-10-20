// a variable is box to save values - to reuse the value

// keyword let, const, var

// declaring a variable and defining it
// let username = "Tom";

// name of the variable is username
// the value is "Tom"

// an adress in the memory is created
// username --> 1x203 --> "Tom"

// display the value
// console.log("the name of the user is ", username);

// let favoriteAnimal;
// favoriteAnimal --> 20x45 --> undefined

// = defining a variable, assign to the variable a value
// == compare the values
// === compare value and data type


// let favoriteAnimal = "dog";
// let username = "Tom";

// let sentence = "The favorite animal of Tom is a dog";

// concatenation +
// let secondSentente = "The favorite animal of " + username + " is a " + favoriteAnimal;
// console.log(secondSentente);

// console.log(favoriteAnimal) --> 'dog'
// console.log("favoriteAnimal") --> 'favoriteAnimal'

let age = 22;
let username = "Tom";

let sentence1 = "The user_age is " + age; //the user_age is 22
let sentence2 = "The user_age is age";  //the user_age is age

// // template literals
let sentence3 = "The user_age is " + age;
let sentence4 = `The user_age is ${age}`;

let sentence5 = "The age of " + username + " is " + age;
let sentence6 = `The age of ${username} is ${age}`;

let sentence7 = `The age of ${lastname} is ${age}`; //lastname is not defined


// let keyword - when you want to redefine a variable
// be able to assign a new value
let pet = "cat";
pet = "rabbit"; //redefining
console.log(pet)

const taxes = 17; //constant
// taxes = 20  ERROR