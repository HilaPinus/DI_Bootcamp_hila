/*
Introduction To JavaScript

Exercise 1

let addressNumber = "21";
let addressStreet = "Lachish";
let country = "Israel";
let globalAddress = "I live in" + " " + addressStreet + ", " + addressNumber + " " + "in" + " " + country;
console.log(globalAddress);


Exercise 2

let birth = 1991;
let year = 2022; 
let age = year-birth;
let final = "I will be" + " " + age + " " + "in" + " " + year;
console.log(final);

________________________________________________________________
Javascript Arrays
Exercise 3

let pets = ["cat", "dog", "fish", "rabbit", "cow"];
let fav = pets[1];
console.log(fav);

pets.splice(3, 1, "horse");
console.log(pets);
pets.length;




/*EX XP - 

🌟 Exercise 1: Your Favorite Food

let favFood = "Bamba";
let favMeal = "Breakfast";
let iEat = "I eat" + " " + favFood + " " + "at every" + " " + favMeal;
console.log(iEat);


🌟 Exercise 2 : Series

Part I
1.Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength)

2. Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
For example : black mirror, money heist, and the big bang theory
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeriesLength = myWatchedSeries.length;

3. Console.log a sentence using both of the variables created above
For example : I watched 3 series : black mirror, money heist, and the big bang theory
myWatchedSeriesSentence = "I watched only one Series:" + " " + myWatchedSeries[0];

Part II

1. Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeries.splice(2, 1, "friends"); 
console.log(myWatchedSeries) 

2. Add, at the end of the array, the name of another series you watched.
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeries.splice(2, 1, "friends"); 
myWatchedSeries.push("CocoMelone");
console.log(myWatchedSeries); 

3. Add, at the beginning of the array, the name of your favorite series.
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeries.splice(2, 1, "friends"); 
myWatchedSeries.push("CocoMelone");
console.log(myWatchedSeries); 
myWatchedSeries.unshift("Fauda");
console.log(myWatchedSeries); 

4. Delete the series “black mirror”.
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeries.splice(2, 1, "friends"); 
myWatchedSeries.push("CocoMelone");
myWatchedSeries.unshift("Fauda");
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);


5. Console.log the third letter of the series “money heist”.
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeries.splice(2, 1, "friends"); 
myWatchedSeries.push("CocoMelone");
myWatchedSeries.unshift("Fauda");
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries[1][2]);

6. Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeries.splice(2, 1, "friends"); 
myWatchedSeries.push("CocoMelone");
myWatchedSeries.unshift("Fauda");
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

🌟 Exercise 3 : The Temperature Converter
let celsiusTemperature = 23;
let fahrenheit = celsiusTemperature / 5 * 9 + 32;
console.log(fahrenheit);


🌟 Exercise 4 : Guess The Answers #1

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual: 23

1. What will be the outcome of a + b in the first expression ? 55
2. What will be the outcome of a + b in the second expression ? 23
3. What is the value of c? -  undefined
4. Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
3,4 is a number but 5 is a String. js will give me 7+"5".


Exercise 5 : Guess The Answers #2

typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

    typeof(NaN)
// Prediction: NaN
// Actual: number

typeof("hello") 
// Prediction: string
// Actual:

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: treu
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual:

"hamburgers" - "s"
// Prediction: I don't know
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual:

"1" - "3"
// Prediction: I don't know
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: I don't know
// Actual: NaN

99 * "hello"
// Prediction: I don't know
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false


Exercise 6 : Guess The Answers #3

5 + "34"
// Prediction: 534
// Actual:

5 - "4"
// Prediction: Nan
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction: "_ _"
// Actual: "_ _"

" " + 0
// Prediction: 0
// Actual: " _ 0"

true + true
// Prediction: true
// Actual: 2

true + false
// Prediction: I don't know
// Actual: 1

false + true
// Prediction: I don't know
// Actual: 1

false - true
// Prediction: I don't know
// Actual: -1

!true
// Prediction: I don't know
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

    "Bob" - "bill"
// Prediction: NaN
// Actual: NaN

*/