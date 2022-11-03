//Exercise 1 : Analyzing
//Analyze these pieces of code before executing them. What will be the outputs ?
//------1------

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); //result = ['bread',["carrot", "potato"], 'chicken', ["apple", "orange"]];
//(6) ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']   --- rigth answer.



//------2------
const country = "USA";
console.log([...country]); //['U', 'S', 'A']


------Bonus------
let newArray = [...[,,]];
console.log(newArray);


//🌟 Exercise 2 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//Using the map() method, push into a new array the 
//firstname of the user and a welcome message. 
const userWelcome = users.map((element) => "hello " + element["firstName"]);
console.log(userWelcome);


//2. Using the filter() method, create a new array, 
//containing only the Full Stack Residents.
//3. Bonus : Chain the filter method with a map method, to return an array containing 
//only the lastName of the Full Stack Residents.
const onlyFS = users
                .filter((element) => element.role.includes("Resident"))
                .map((element) =>element.firstName);
console.log(onlyFS);



🌟 Exercise 3 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
//Use the reduce() method to combine all of these into a single string.
const newEpic = epic.reduce((acc, part) => {
    return acc + " " + part
})

console.log(newEpic);








//🌟 Exercise 4 : Employees #2
//Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
//Using the filter() method, create a new array, containing the students that passed the course.
const pass = students
        .filter((element) => element.isPassed === true)
        //.map((element) => element.name + element.course)
        //.forEach((element => console.log("good job " + element.name + " you passed " + element.course)));
console.log(pass)


//Bonus : Chain the filter method with a forEach method, to congratulate the 
//students with their name and course name 
//(ie. “Good job Jenner, you passed the course in Information Technology”, 
//“Good Job Marco you passed the course in Robotics” ect…)
