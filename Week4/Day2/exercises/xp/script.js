/*
//🌟 Exercise 1 : Find The Sum
//Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

//let myFunction = (a, b) => a + b;
//myFunction(1,2)


//🌟 Exercise 2 : Kg And Grams
//Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

//First, use function declaration and invoke it.
function kiloToGrams(kiloGram) {
    return kiloGram * 1000;
  }
  kiloToGrams(2)

//Then, use function expression and invoke it.
(function(kiloGram){
    const kiloToGrams = kiloGram*1000;
    console.log(kiloToGrams);
}('1'))

//Write in a one line comment, the difference between function declaration and function expression.
functiom expression is Immediately Invoked. 

//Finally, use a one line arrow function and invoke it.
let kiloToGrams = (kilogram) => kilogram*1000;
kiloToGrams(1)





//🌟 Exercise 3 : Fortune Teller
//Create a self invoking function that takes 4 arguments: 
//number of children, partner’s name, geographic location, job title.
//The function should display in the DOM a sentence like 
//"You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

const fullSentence = (function invokingFunction (numChildern, partnerName, location, job){
    const sentence = "You will be a " + job + " in " + location + ", and married to " + partnerName + " with " + numChildern +  " children";
    console.log(sentence);
    return sentence;
})("4", "Matan", "Hadera", "Web Developer")




//🌟 Exercise 4 : Welcome
//John has just signed in to your website and you want to welcome him.
//Create a Bootstrap Navbar in your HTML file.
//In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//The function should add a div in the nabvar, displaying the name of the user and his profile picture.

*/


//TWO WAYS, NON WORKS (WORKS WHEN LOGGED, NOT ON THE BRWOSER)

#1
(function greeting(name){
    const location = document.getElementsByClassName("navbar navbar-default");
    const sentence = nav.textContent = name + ", Welcome To My WebSise!";
    //location.appendChilde(sentence); ??
    console.log(sentence);
}) ("John")

#2
((name) => document.getElementsByClassName("navbar navbar-default").textContent = name +  ", Welcome To My WebSise!")




//🌟 Exercise 5 : Juice Bar
//You will use nested functions, to open a new juice bar.

//Part I:
//The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
//The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a 
//<size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
//Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

function makeJuice (size) {
    function addIngredients (ingredient1, ingredient2, ingredients3) {
        console.log("The client wants a " + size + " containing " +  ingredient1 + ", "+ ingredient2 + "," + ingredients3);
    }
    addIngredients("orange", "grapes", "watermelon")
}
makeJuice("large")


//Part II:
//In the makeJuice function, create an empty array named ingredients.
//The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
//Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.
//The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. 
//Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice (size) {
    const ingredients = [];
    const addIn = function addIngredients (ingredient1, ingredient2, ingredients3) {
        ingredients.push(addIn)
    }
    addIngredients("orange", "grapes", "watermelon")
}
makeJuice("large")












