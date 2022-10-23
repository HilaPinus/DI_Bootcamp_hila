/*
🌟 Exercise 1 : Information
Part I : function with no parameters

Create a function called infoAboutMe() that takes no parameter.
The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
Call the function.
*/

function infoAboutMe() {
    console.log("My Name is Hila, I'm 31 years old and I have two babies - Mia and Shilo.");
}

/*
Part II : function with three parameters

Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
Call the function twice with the following arguments: 
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
*/
function infoAboutPerson (personName, personAge, personFavoriteColor) {
    console.log("Your name is " + personName  + ",you are " + personAge + " years old, and your favorite color is" + personFavoriteColor);
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

/*
🌟 Exercise 2 : Tips
John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
Create a function named calculateTip() that takes no parameter.
Inside the function, use prompt to ask John for the amount of the bill.
Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.
Console.log the tip amount and the final bill (bill + tip).
Call the calculateTip() function.
*/
function calculateTip() {
    bill = +prompt("what is your bill amount?");
    if (bill < 50) {
        console.log("you should tip " + bill*1.2 );
    } else if (bill >= 50 || bill < 200) {
        console.log("you should yip " + bill*1.15 );
    } else if (bill> 200) {
        console.log("you should tip " + bill*1.1 );
    }
}

calculateTip();

/*
🌟 Exercise 3 : Find The Numbers Divisible By 23
Create a function call isDivisible() that takes no parameter.
In the function, loop through numbers 0 to 500.
Console.log all the numbers divisible by 23.
At the end, console.log the sum of all numbers that are divisible by 23.
Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313
*/
        function isDivisible(numberDiv) {
        let sum = 0
        for (let i=0; i<=500; i++) {
        if (i % 23 === 0) sum = sum + i
        }
                console.log(i);
                console.log(sum)
            } 

        isDivisible();
        
        //Bonus: Add a parameter divisor to the function.

        function isDivisibleMain(numberDiv) {
            let sum = 0
            for (let i=0; i<=500; i++) {
        if (i%numberDiv === 0) sum = sum + i
        }
        console.log(i);
        console.log(sum)
    }

isDivisible(10)

/*

🌟 Exercise 4 : Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

Add the stock and prices objects to your js file.
Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”.
It means that you have 1 banana, 1 orange and 1 apple in your cart.
Create a function called myBill() that takes no parameters.
The function should return the total price of your shoppingList.
 In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.
Call the myBill() function.
Bonus: If the item is in stock, decrease the item’s stock by 1

*/
    const stock = { 
        "banana": 6, 
        "apple": 0,
        "pear": 12,
        "orange": 32,
        "blueberry":1
    }  

    const prices = {    
        "banana": 4, 
        "apple": 2, 
        "pear": 1,
        "orange": 1.5,
        "blueberry":10
    } 

    const shoppingList = ["banana", "orange", "apple"];
    function myBill () {
        for(const item of shoppingList) {
        const quantityInStock = stock[item]
        if(quantityInStock > 0) {
        let price = prices[item]
            console.log(item, "costs", price, ",", "we have", stock[item], item+"s", "in stock", "the new stock will be", stock[item]-1);
        } else {
            console.log("no ", item, "in stock");
        }
    }
}
    myBill()


/*
Exercise 5 : What’s In My Wallet ?
Note: Read the illustration (point 4), while reading the instructions
Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
an item price and an array representing the amount of change in your pocket.

In the function, determine whether or not you can afford the item.
If the sum of the change is bigger or equal than the item’s price 
(ie. it means that you can afford the item), the function should return true
If the sum of the change is smaller than the item’s price 
(ie. it means that you cannot afford the item) the function should return false

Change will always be represented in the following order: quarters, dimes, nickels, pennies.
A quarters is 0.25
A dimes is 0.10
A nickel is 0.05
A penny is 0.01
*/
function calculationSum (arr) {
    let sum = 0
    for (let i=0; i<arr.length; i++) {
        let coinsValue;
        const numberOfCoins = (arr[i]);
        if (i === 0) {coinsValue = 0.25} 
        if (i === 1) {coinsValue = 0.10} 
        if (i === 2) {coinsValue = 0.05} 
        if (i === 3) {coinsValue = 0.01} 
        sum = sum + numberOfCoins *coinsValue;
    }
    return sum
}
 calculationSum([25, 20, 5, 0])


 function changeEnough (itemPrice, amountOfChange) {
    const sum = calculationSum(amountOfChange)
    if (sum > itemPrice) {
        console.log("you can buy");
        return true
    } else {
        console.log("not enough");
        return false
    }
    }
    changeEnough(4.25, [25, 20, 5, 0])



🌟 Exercise 6 : Vacations Costs
Let’s create functions that calculate your vacation’s costs:

/*Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.
*/
function hotelCost(pricePerNigth, numberNigths = +prompt("what is the number of nights they would like to stay in the hotel?")) {
console.log(numberNigths*pricePerNigth);
}
hotelCost(140)
*******see video to check -If the user doesn’t answer or if the answer is not a number, ask again.


/*
Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$
*/
function planeRideCost (userDastination=prompt("whats your destonation?")) {
    if (userDastination === "london") {
        console.log("183$");
    } else if (userDastination === "paris") {
        console.log("220$");
    } else {
        console.log("300$");
    }
 }

 planeRideCost ()
 *******see video to check -If the user doesn’t answer or if the answer is not a number, ask again.


 /*

Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.

*/
function rentalCarCost(costPerDay, userNum = +prompt("number of days to rent the car")) {
    if (userNum > 10) {
        console.log("the total cost of a car for", userNum, "days is", (costPerDay*userNum)*0.95 );
    } else {
    console.log("the total cost of a car for", userNum, "days is", costPerDay*userNum );
}
}
rentalCarCost (40)

/*
Define a function called totalVacationCost() that returns the total cost of the user’s
 vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() 
inside the function totalVacationCost().
Call the function totalVacationCost()
Bonus: Instead of using a prompt inside the 3 first functions, only use a 
prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
*/


___________________________

function totalVacationCost (rentalCarCost, planeRideCost, hotelCost) {

function hotelCost(pricePerNigth, numberNigths = +prompt("what is the number of nights they would like to stay in the hotel?")) {
    console.log(numberNigths*pricePerNigth);
    }
    hotelCost(140)
    
function planeRideCost (userDastination=prompt("whats your destonation?")) {
        if (userDastination === "london") {
            console.log("183$");
        } else if (userDastination === "paris") {
            console.log("220$");
        } else {
            console.log("300$");
        }
     }
    
     planeRideCost ()
    
function rentalCarCost(costPerDay, userNum = +prompt("number of days to rent the car")) {
        if (userNum > 10) {
            console.log("the total cost of a car for", userNum, "days is", (costPerDay*userNum)*0.95 );
        } else {
        console.log("the total cost of a car for", userNum, "days is", costPerDay*userNum );
    }
    }
    rentalCarCost (40)
    
    
function totalVacationCost (rentalCarCost, planeRideCost, hotelCost) {
        console.log(rentalCarCost+planeRideCost+hotelCost)
    }
    
    console.log(rentalCarCOst, planeRideCost, hotelCost);
}

totalVacationCost()
