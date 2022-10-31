
//for loop
let family = ["hila", "matan", "mia", "shilo"];
for (i=0; i<family.length; i++) {
    console.log(family[i]);
}


//for of loop
let family = ["hila", "matan", "mia", "shilo"];
for (let fam of family) {
    console.log("hi " + fam);
}

//for each loop
let family = ["hila", "matan", "mia", "shilo"];
family.forEach((name) => console.log("hi " + name));


let family = ["hila", "matan", "mia", "shilo"];
function isHilaHere () {
    let isHilaInArray = false;
    for (const fam of family) {
        console.log("fam:", family);
        if (fam === "hila") {
            console.log("we found hila!");
            isHilaInArray = true;
        }
    }
    return isHilaInArray;
}

isHilaHere()


//EX 1
//Create a function to check the year given by the user
//If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

function centory () {
return +prompt("enter year") < 2021 ? ("You live in the Middle Age") : ("You are in the 21st century");
}
centory()  

//EX2
//Using arrow function and ternary operator create a calculator that returns the result 
//of the calculus depending on the operator : +, - , * ,
//The function should be able to to take 2 numbers as parameters

    
let sum = (a, b) => a + b;
let sum = (a, b) => a * b;
let sum = (a, b) => a / b;
let sum = (a, b) => a - b;



//Create a function that selects only the even numbers in the array myArr
let myArr = [10,11,12,15,20];
myArr.forEach((myArr) => {return number %2 == 0});

let myArr = [10,11,12,15,20];
myArr.forEach((myArr%2 ==0 )) => return true;


