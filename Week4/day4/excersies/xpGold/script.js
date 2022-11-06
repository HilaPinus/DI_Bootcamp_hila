//Exercise 1 : Print Full Name

//Create a function called printFullName(studentObj) that accepts an object as a parameter.
//For example : printFullName({first: 'Elie', last:'Schoppik'}).
//The function should return a string like the example below
//printFullName({first: 'Elie', last:'Schoppik'}) 
// 'Your full name is Elie Schoppik`
//Destructure this object DIRECTLY from the parameters (ie. Look at the 
//Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)
//The output of the printFullName() function should be the exact same as the displayStudentInfo function. (Exercise XP)

printFullName(studentObj) {
const {first: first, last: last} = studentObj;
return `your full name is ${first} ${last}`;
}
printFullName({first: 'Elie', last:'Schoppik'})



_______________________________________________________________________________________________________________________________________
//Exercise 2 : Keys And Values
//Create a function that takes an object and returns the keys and values as separate arrays.

function keysAndValues(obj) {

    let newObj = Object.entries(obj);
    console.log(newObj);
    return newObj;)
}
keysAndValues({ a: 1, b: 2, c: 3 })

//Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysAndValues(newObj) {
     let arrkey = newObj.sort((a, b) => a-b);
    console.log(arrkey);
}
keysAndValues(newObj)

//➞ [["a", "b", "c"], [1, 2, 3]]
//keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })//
//➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

//keysAndValues({ key1: true, key2: false, key3: undefined })
//➞ [["key1", "key2", "key3"], [true, false, undefined]]

_______________________________________________________________________________________________________________________________________
//Exercise 3 : Counter Class
//Analyze the code below, what will be the output?

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter(); //0
counterOne.increment(); //1
counterOne.increment(); //2

const counterTwo = counterOne; //2
counterTwo.increment(); //3

console.log(counterOne.count); //3
