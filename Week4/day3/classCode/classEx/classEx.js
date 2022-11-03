//Exercise 1: create a new array that filters only the positive value
const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
const positiveNumbers = numbers.filter((element) => element>0);
console.log(positiveNumbers);

//Exercise 2: Suppose you have a list of Star Trek characters,
//and you want to get just the characters that appeared in Star Trek: 
//The Next Generation. Use filter() to filter the array of characters below

const characters = [
   { name: 'James T. Kirk', 
   series: ['Star Trek'] },

   { name: 'Spock', 
   series: ['Star Trek', 'Star Trek: The Next Generation'] },

   { name: 'Jean-Luc Picard', 
   series: ['Star Trek: The Next Generation'] },

   { name: 'Worf', 
   series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
]; 

const onlyNextG = characters.filter((element) => element.series.includes("Star Trek: The Next Generation");
console.log(onlyNextG);




//Exercise 3 NOT MANDATORY - send me the result by slack
//Use the filter method to create an array without duplicates. 
//The result should be ["blue","red","yellow"]

const colors = ["blue", "red", "red", "blue", "yellow"]



//Exercise 1
//Find the sum of the score of the students using reduce

    const students = [
        {name: 'Rich', score: 33}, 
        {name: 'Peter', score: 55},
        {name: 'John', score: 75}
    ];

    const sum = students.reduce((accumulator, element) => {
        const total = accumulator + element.score;
        return total;
    }, 0)

console.log(sum);


//oneline-

//Exercise 2
//Turn an array of voter objects into a count of how many people voted
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

const numVot = voters.reduce((acc, element) => {
if(element.voted === true) {
    acc += 1;
} else {
    acc += 0;
}
return acc;
}, 0)

console.log(numVot);



//with ternary operator-
const numVot = voters.reduce((acc, element) => {
    return element.voted ? acc++ : acc
} , 0)
console.log(numVot);