/*
//Exercise 1
//Analyse the code below without running it, what will be the output ?

var num = 8;
var num = 10;
console.log(num);
 10 -  it will log the value of the last variable declered. 


//Exercise 2
function numbers() {
  for (var i = 0; i < 5; i += 1) {
    console.log(i);
  }
    console.log(i);
}
error - i was not defined? 

//numbers();
//Change the code so the var i will be undefined outside of the for loop
function numbers() {
    for (var i = 0; i < 5; i += 1) {
    }
      console.log(i);
  }


//Exercise 3
//You have to decide which type of variables you have to use

*/
//Create a global variable that save the amount of money you have in your account
//Create a variable that saves the amount of VAT
//Create a variable that saves the amout of all the expenses and revenu you did /received for the past last month

let moneyInAccount = 10000;
let vat = 1.17;
let expensesAndRevenu = 100;

//Create a JS code that multiplies of the expenses by the VAT
let expensesAndRevenuVatIncludes = vat * expensesAndRevenu;

//Create a JS code that changes the amount of the money you have in your account depending on your expenses/revenu.
moneyInAccount = moneyInAccount+expensesAndRevenuVatIncludes;
console.log(moneyInAccount);

//


let moneyInAccount = 10000;
let vat = 1.17;
let expensesAndRevenu = 100;

//Create a JS code that multiplies of the expenses by the VAT
//Create a JS code that changes the amount of the money you have in your account depending on your expenses/revenu.
moneyInAccount = moneyInAccount+(expensesAndRevenu*vat);
console.log(moneyInAccount);
