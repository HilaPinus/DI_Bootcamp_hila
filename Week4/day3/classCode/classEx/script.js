//Exercise 1

const famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]

//Using the array above, use the map method, to create a new array that contains only the name of the people

const newNames = famousPeople.map((element) => element.name);
console.log(newNames);

//class answer  


//Use the map method, to create a new array, that contains objects, 
//each object contains the name of the actor, and it's job


const newNames = famousPeople.map((element) => ({newName :element.name, newJob: element.job}));
console.log(newNames);



//BONUS: Using the array you get from question2, use the for each method, 
//to add the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container")


//Exercise 2

const studentsFootball = [
 {name: 'Rich', score: 33}, 
 {name: 'Peter', score: 55}
];

//Create a new array of objects, containing the name, score and isAboveAverage if the students has a score bigger that 50, 
//the key isAboveAverage will be true, else the key isAboveAverage will be false. Use ternary operator Result

//one way
const nameScoreAndIsAboveAbrege = studentsFootball.map((element) => ({newName :element.name, newScore: element.score, newAb: element.score>50 ? true : false}));
console.log(nameScoreAndIsAboveAbrege);

//2 way - without ternary 
const nameScoreAndIsAboveAbrege = studentsFootball.map((element) => ({newName :element.name, newScore: element.score, newAb: element.score>50}));
console.log(nameScoreAndIsAboveAbrege);