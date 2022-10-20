//XP exsercise

//🌟 Exercise 1 : List Of People
let people = ["Greg", "Mary", "Devon", "James"];
//Part I - Review About Arrays
//Write code to remove “Greg” from the people array.
people.shift();
//Write code to replace “James” to “Jason”.
people.splice(2,1,"Jason");
//Write code to add your name to the end of the people array.
people.push("Hila")
//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
//Write code to make a copy of the people array using the slice method.
//The copy should NOT include “Mary” or your name.
//Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//Hint: Check out the documentation for the slice method
people.slice(1, 3);
console.log(people);
//Write code that gives the index of “Foo”. Why does it return -1 ?
-1 gets when index not exesist.
**dont know how to solve - // Create a variable called last which value is the last element of the array.
//Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people.indexOf(people.length-1);
console.log(last);

_______________________________________________________________________________________________________

//Part II - Loops
//Using a loop, iterate through the people array and console.log each person.
let people = ["Greg", "Mary", "Devon", "James"];
for (let index=0; index < people.length ;index++){
    console.log(people[index])
}

************* //Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
//Hint: take a look at the break statement in the lesson.
for (i=0; i<people.length; i++) {
    console.log(i);
    if (i == "Jason") { 
        break;
    }
  }


//🌟 Exercise 2 : Your Favorite Colors
//Create an array called colors where the value is a list of your five favorite colors.
let colors = ["red", "blue", "yellow", "pink", "black"];

//Loop through the array and as you loop console.log a string like so:
//“My #1 choice is blue”, “My #2 choice is red” ect… 

    for (i=0; i <= colors.length; i++) {
        console.log("my " + [i+1] + " choice is " + colors[i]);
    }

//Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//Hint : create an array of suffixes to do the Bonus


//🌟 Exercise 3 : Repeat The Question
//Prompt the user for a number.
//Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

let userNumber = +prompt("type a number");

************not complete
//While the number is smaller than 10 continue asking the user for a new number. 
//Tip : Which while loop is more relevant for this situation?
it a matter of true\false - even if prompt is greater or lower then 10.

let userNumber = +prompt("type a number");
while (userNumber <= 10) {
    +prompt("type a number");
        userNumber++;
}

🌟 Exercise 4 : Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
//Console.log the number of floors in the building.
console.log(building.numberOfFloors);

//Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

//Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let rentSarahDavid = (Number(building.numberOfRoomsAndRent.sarah[1])) + (Number(building.numberOfRoomsAndRent.david[1]));
let rentDan = (Number(building.numberOfRoomsAndRent.dan[1]));
if (rentSarahDavid > rentDan ) {
    (building.numberOfRoomsAndRent.dan[1]) = 1200;
}
console.log((Number(building.numberOfRoomsAndRent.dan[1])));

//🌟 Exercise 5 : Family
//Create an object called family with a few key value pairs.

const family = {
    mom:"Hila", 
    dad:"Matan", 
    girl:"Mia",
    boy:"shilo",
};

//Using a for in loop, console.log the keys of the object.
for ( let key in family ) {                             **keys and value
    console.log(`${key} => ${family[key]}`);
}

for ( let key in family ) {                             **keys only
    console.log(key);
}

//Using a for in loop, console.log the values of the object.    

for ( let value in family ) {                   **values only
    console.log(value);
}

//Exercise 6 : Rudolf

const details = {               ** succseed without spaces
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
};
//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let newDetails = Object.entries(details);
newDetails = (newDetails.join(' '));
newDetails  = newDetails.replace(/,/g, '');
console.log(newDetails); 



//Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//A group of friends have decided to start a secret society.
// The society’s name will be the first letter of each of their names sorted in alphabetical order.
//Hint: a string is an array of letters
//Console.log the name of their secret society. The output should be “ABJKPS”
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
for( var i=0; i<names.length; i++ ) {
    console.log( names[i].charAt(0) );