/*
🌟 Exercise 1 : Scope
Instructions
Analyse the code below, and predict what will be the value of a in all the following functions.
Write your prediction as comments in a js file. Explain your predictions.
*/
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

//anwer _____________________________________________
// the function returns 3. a local verible ("let") drclatred
//inside the function. 5 is greater then 5, so a value will
//change to 3.

//#1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//answer ______________________________________________
//if i run const indsted let, a value won't change.
//actually I got an error



//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

//answer_______________________________________________
//if I call funcThree () I get 0, becuse the a varible declered inside funcTwo is local
//and a=0 decleard in the widow global scoope.


// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()

//answer ________________________________________________
//when I ran fun3 for the 1st time I got 0 - from the a value
//decleared on the gloobal scoope.
//fun2 is underfined - I never asked the function to return
//anything. only change the value of a variable.
//calling the fun3 for the second time, after calling fun2
//that changed the value of a - will return a new value - 5.


// #2.2 What will happen if the variable is declared 
// with const instead of let ?

//anwer ____________________________________________________
//if i change to const ill get 0 on every function call.
//wrong - errow, a alredy decleared.

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
//nothing will hapened because we didnt changed first let a
//inside the function - we created diffrent variable, with the
//same name and diffrent value.
//acctually it said that he's allredy declered; I understand
//now that its becuse we declered a in the global scoope, 
//so we cant over rigth him in the function.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?



/*
🌟 Exercise 2 : Ternary Operator
Instructions
Using the code below:
*/
function winBattle(){
    return true;
}

//Transform the winBattle() function to an arrow function.
const winBattle = () => {return true;}
 
//Create a variable called experiencePoints.
let experiencePoints;

//Assign to this variable, a ternary operator. 
//If winBattle() is true, the experiencePoints variable 
//should be equal to 10, else the variable should be 
//equal to 1.

experiencePoints = winBattle(true)? 10 : 1;
//Console.log the experiencePoints variable. //10

/*
🌟 Exercise 3 : Is It A String ?
Instructions
Write a JavaScript arrow function that checks whether 
the value of the argument passed, is a string or not. 
Use ternary operator
Check out the example below to see the expected output
Example:
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false
*/


/*
🌟 Exercise 4 : Colors
Using this array :
Write a JavaScript program that displays the colors in the following order: 
“1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
*/
    const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
    colors.forEach((number, index) => { 
    console.log(number + " is my " + (index+1)   + " choice") 
    }); 

/*Check if at least one element of the array is equal to the value “Violet”.*/
    const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
    let color = colors.some((value)=> { return (value == "Violet"); })

//If yes, console.log("Yeah"), else console.log("No...")
//Hint : Use the array methods taught in class. Look at the lesson Array Methods.

function funColor () {
    return colors.some("Violet")? "yeah" : "no..."
    }
/*


🌟 Exercise 5 : Colors #2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

//Write a JavaScript program that displays the colors in the following order : 
//“1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
//Hint : Use the array methods taught in class and ternary operator.
*/
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

//explanation for me - index+1 of colors, value of ordinal, value of colors
//1st, 2nd, 3rd, 4th, 5th, 7th, 7th 

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((number, index) => { 
console.log((index+1) + " choice is " + number) 
}); 


/*
Exercise 6 : Bank Details
In this exercise, you have to decide which type of variables you have to use (ie. let or const):
Create a global variable called bankAmount which value is the amount of money currently in your account.
Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
Create an array with all your monthly expenses, both positive and negative (money made and money spent).
Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
Create a program that modifies the expenses 
(ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
Display your current bankAccount standing at the end of the month.

*/
let bankAccount = (10,000);
const details = ["+200", "-100", "+146", "+167", "-2900"]
details.forEach(function(number, i, arr) { 
return arr[i] =  number * 1.17; 
}); 
console.log(details)
