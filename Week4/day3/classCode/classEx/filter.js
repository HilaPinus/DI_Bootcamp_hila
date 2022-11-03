//filter


//traditional way - 
const numbers = [2, 10, 35, 15, 6];

function addnumber () {
    const biggerthen10 = [];
    for (let num of numbers) {
        if(num>=10) {
            biggerthen10.push(num) 
        } else {
            continue;
        }
    }
    console.log(biggerthen10);
}

addnumber()

//filter way
const numbers = [2, 10, 35, 15, 6];
const numbigger = numbers.filter((element) => element>=10)
console.log(numbigger);



//filter way
const students = [
    {name: "Rich", score: 33},
    {name: "Peter", score: 55},
    {name: "Jon", score: 75}
]
const numbiggerthen50 = students.filter((element) => element.score>50)
console.log(numbiggerthen50);

const namess = students.map((element) => element.name)
console.log(namess);

//if we want to retrive names of all students pass 10- we can chain it. forEach doesnt return new array so we can not chain it!
const numbiggerthen50 = students
                        .filter((element) => element.score>50) //returns array of objects
                        .map((element) => element.name) // return array of names

console.log(numbiggerthen50);

//if we want to log every name after the chain, at the end, we CAN USE THE FOREACH

const numbiggerthen50 = students
                        .filter((element) => element.score>50)
                        .map((element) => element.name)
                        .forEach((element) =>console.log(element)) //loops array and returns every name
console.log(numbiggerthen50);



//another example - find words start with h 
//traditional way
const strings = ["hello", "great", "hey"];
const wordH = strings.filter((element) => element[0].toLowerCase() === "h")
console.log(wordH);


//if I want 2 conditions - start h + 4letters and more
const strings = ["hello", "great", "hey"];
const wordH = strings.filter((element) => element[0].toLowerCase() === "h" && element.length>4)
console.log(wordH);

