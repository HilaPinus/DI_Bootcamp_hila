//🌟 Exercise 1 : Location
//Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

I am John Doe from Vancouver, Canada. Longitude 49.2827, Longitude -123.1207.
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

______________________________________________________________


//🌟 Exercise 2: Display Student Info
//Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

function displayStudentInfo(objUser){
    const {first: first, last: last} = objUser;
    const sentence = ("your full name is " + first + " " + last);
    return sentence;
    console.log(sentence);
}
displayStudentInfo({first: 'Elie', last:'Schoppik'});



______________________________________________________________


  //🌟 Exercise 3: User & Id
  //Using this object 
  const users = { user1: 18273, user2: 92833, user3: 90315 }

  //Using methods taught in class, turn the users object into an array:
  //Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
  const newUsers = Object.entries(users);
  console.log(newUsers);

  //Modify the outcome of part 1, by multipling the user’s ID by 2.
  //Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

  console.log((newUsers[0][1])*2);
  console.log((newUsers[1][1])*2);
  console.log((newUsers[2][1])*2);



______________________________________________________________

//Exercise 4 : Person Class
//Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); // object





//🌟 Exercise 5 : Dog Class
//Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
//Analyze the options below. 
//Which constructor will successfully extend the Dog class? 2
 
// 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};


  // 2 - this one
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};


//🌟 Exercise 6 : Challenges
//Evaluate these (ie True or False)

[2] === [2]  //false
{} === {}     //false


//What is, for each object below, the value of the property number and why?

const object1 = { number: 5 };  //4
const object2 = object1;        //4
const object3 = object2;        //4
const object4 = { number: 5};   //5

object1.number = 4;             //4
console.log(object2.number)   
console.log(object3.number)
console.log(object4.number)


//Create a class Animal with the attributes name, 
//type and color. 
//The type is the animal type, 
//for example: dog, cat, dolphin ect …



class Animal {
  constructor(name, type, color) {
    this.animelName = name;
    this.animalType = type;
    this.animalColor = color;
  }
}
//const myDog = new Animal("Rex", "German Shefferd", "black") - call dog to check the code in the console
class Mamal extends Animal {
   constructor(name, type, color) {
    super(name, type, color);
   }
  }
sound () {
  console.log(`${this.animalSound} I'm a ${this.animalType}, named ${this.animelName} and I'm ${this.animalColor}`);
}

const myCow = new Mamal("Mooooo", "Cow", "Coco", "black and white");
myCow(sound)




//const myElephent = new Mamal("tiiiiii", "Dolphin", "Dodo", "Blue")
//Create a class Mamal that extends from the Animal class. 
//Inside the class, add a method called sound(). 
//This method takes a parameter: the sound the animal makes, 
//and returns the details of the animal (name, type and color) as well as the sound it makes.

speak () {
  console.log
 }
}
//Create a farmerCow object that is an instance of the class Mamal. 
//The object accepts a name, a type and a color and calls the sound method that
//“moos” her information.
//For example: Moooo I'm a cow, named Lily and I'm brown and white
