//1. Assigning To Existing Variable Names

var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// Destructuring the object into our variables
var { firstname, lastname, dateofbirth } = employee;
console.log( firstname, lastname, dateofbirth);



________________________________________________________________________________________________

//2. Assigning To New Variable Names
var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// Destructuring the object into variables with
// different names than the object variables
var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
console.log( fn, ln, dob);

________________________________________________________________________________________________


//3. Assigning To A Variable With Default Values


var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// Destructuring the object into variables without 
// assigning default values 
var { firstname, lastname, country } = employee;
console.log("Without setting default values")
console.log( firstname, lastname, country);

// Destructuring the object into variables by 
// assigning default values 
var { firstname = 'default firstname', 
      lastname = 'default lastname', 
      country = 'default country' } = employee;
console.log("\n After setting default values")
console.log( firstname, lastname, country);

______________________________________________________



//ex 1

//Use the methods above to :
//Count how many keys and values are in the object below
//Display : "The x# key is : --- The x# value is : ---".


let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

const pairs = Object.entries(myObj);
console.log(pairs);
console.log(pairs.length);

______________________________________________________

//Analyse this code before executing it. What will be the output ?

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };
console.log(admin); // {admin: true, name: 'Lydia', age: 21}




______________________________________________________
let myCar = {
    color : 'blue',
    details : {
      plateNumber: 123,
      name : "Ford"
    }
  }
  
  let myNewCar = {...myCar}
  console.log("myNewCar : ", myNewCar) 
  // myNewCar :  
  // { 
  //      color: 'blue', 
  //      details: { plateNumber: 123, name: 'Ford' } 
  // }

  // SHALLOW COPYING
  myCar.color = "red"
  console.log("myNewCar.color :", myNewCar.color)
  // myNewCar.color : blue -- UNCHANGED
  console.log("myCar.color :", myCar.color)
  // myCar.color : red -- CHANGED
  
  // DEEP COPYING
  myCar.details.plateNumber = 345
  console.log("myNewCar.details.plateNumber :", myNewCar.details.plateNumber)
  // myNewCar.details.plateNumber : 345 -- CHANGED
  console.log("myCar.details.plateNumber :", myCar.details.plateNumber)
  // myCar.details.plateNumber : 345 : red -- CHANGED



  ______________________________________________________


  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  //instance of the class Rectangle
  const square = new Rectangle(10, 10);
  
  //calling the method
  console.log(square.calcArea()); // 100
  
  console.log(square)
  //Rectangle {height: 10, width: 10}
  //__proto__:
  //  constructor: class Rectangle
  //  calcArea: ƒ calcArea()
  //__proto__: Object


  ______________________________________________________

  class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");