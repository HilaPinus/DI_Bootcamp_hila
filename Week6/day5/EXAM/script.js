// 1

// by [] and index of the element, starting with 0 for the array first element.
// for example, to access the second element within that array - 
console.log(nums[1]);



____________________________________________________________________________________________________________________________________
// 2

arrNums.splice(2, 0)
// 2 = start at element index #2
// 0 = index to show at the new array, that's actually delete all elements in my new array



____________________________________________________________________________________________________________________________________
// 3

// this is array de-construction - it will "paste" the bestNumbers array into the favoriteNumbers array and then the secondBestNumbers array into the favoriteNumbers.
// it will look like this:
favoriteNumbers = [4, 5, 6, 1, 2, 3, 7, 8, 9]



____________________________________________________________________________________________________________________________________
// 4

const football = {
    type: "sport",
    clubs: {
      france : "Paris Saint-Germain",
      spain : "Atlético Madrid",
    }
  }  
  
  football.clubs.spain = "Real Madrid";
  console.log(football.clubs.spain);

  // it's an nested object.
  // I think   football.clubs.spain = "Real Madrid" will EDIT, REDEFINE the value of the "spain".
  // loggin the football.clubs.spain will retrive the new value, real madrid and NOT the original value.


  ____________________________________________________________________________________________________________________________________

// 5
const myteam = "bestTeam";
const football = {
  type: "sport",
  clubs: {
    france : "Paris Saint-Germain",
    spain : "Atlético Madrid",
  }
}  

football.clubs[myteam] = "France national football team";
console.log(football.clubs);

// First, creating varibale myteam with a value of bestTeame
// then we have a variable football containg a nested object.
// I'm editing the clubs object, inside the football object, by adding it "myteam" variable as the key and it's value.
// loggin it will return the clubs object with myteam and it's value as well (position lost).


____________________________________________________________________________________________________________________________________

// 6

// That's an anunimus function. we can call it by loggin the variable it was created in and the parametrs in (), like this:
console.log(x(2,5));
//or just 
x(2,5);

____________________________________________________________________________________________________________________________________
// 7 

// no! a function creats her own scope, and keyword as well as varibale, can be only accssesed within the function,
// OR child function can accsses it, when the keyword is in their parent function
 ____________________________________________________________________________________________________________________________________
//8

// YES. it called "callback functions"
// I have 3 funtions - 
// sayHello, greeting and helloMessage.
// FIRST greeting function gets called with the parameters of "sayHello" function, and "JavaScript" string.
// calling a functin with function as parameter, invokes the parameter function, 
// so now sayHello function gets called and returns me "Hello" 
// I noticed that greeting gets calld also inside "sayHello" function, and even with another function (helloMessage) as parameter, 
// BUT we will get undefiend becase the helloMessege doesnt returnt anything.
// the only thing that greeting function gets back is the value of the sayHello function that invoked by executing greeting function (becuse sayHello is parameter)
// and the "JavaScript" string.

____________________________________________________________________________________________________________________________________
// 9
let sum = (x, y) => x + y;
____________________________________________________________________________________________________________________________________
// 10

// I have fun foo(), and bar function nested indise function foo.
// eventhogh the code logging the foo function to execute, the bar inner function will invokes first 
// (in order for foo to get bar returned and also be returned)
// so, bar returns " Poppin bottles " and the result returns to foo, and logged into the console - Poppin bottles
____________________________________________________________________________________________________________________________________
// 11

//click
 
____________________________________________________________________________________________________________________________________
// 12 
// When using an event, we creat a function to describe what we and to do when the event happens, so I think that yes, 
// althogh the sintax is - event and then function. I think it's possible, but in a diffrent function.
// for example, I can drag an element but I can also click it so it will take me to another page.

____________________________________________________________________________________________________________________________________
// 13
//Part I : Create a button in your HTML page, when the user will 
//click the the button a paragraph will be added on the 
//DOM with the content "New Paragraph". Use arrow functions.


const btn = document.getElementsByClassName("btn");
const myDiv = document.getElementsByClassName("myDiv");

btn.addEventListener("click", () => {
    const myP = document.createElement("p").innerHTML("New Para");
    myDiv.appendChild(myP);
})

//Part II : Add to each new paragraph, an event listener of mouse over. 
// When you hover on a paragraph, the paragraph should become red (ie. color of the text).

myP.addEventListener(onmouseover = (event) => {
    myP.style.backgroundColor = red;
 });

____________________________________________________________________________________________________________________________________

// 14
//for loop
    const marks = [67, 60, 89, 90, 67, 42];


    let mySum = 0;
    for (i=0; i < marks.length; i++) {
        mySum += marks[i]
    }
    console.log(mySum);

//for of loop
const marks = [67, 60, 89, 90, 67, 42];
mySum = 0;
for (let mark of marks) {
  mySum += mark;
  console.log(mySum);
}

____________________________________________________________________________________________________________________________________
// 15 What is the value of passed in the following code?

//the test for every element in the array is if it's more than 50. 
// beacuse there are values lower then 50, the array faild the every method test and passed value will be false.
____________________________________________________________________________________________________________________________________

// 16
   const nums = [10, 50, 88];

   const bignums = nums.filter(function(n) {
      return n > 10;
   });

   console.log(bignums);
   
   //filter will filter all values failed the test, and i'll log a new array with the values that passed the test and greather than 10 - 
   // 50, 88.

   ____________________________________________________________________________________________________________________________________
// 17
   //Use a javascript array method to square the value of every element in the array.

   const input = [ 1, 2, 3, 4, 5 ];
   input.forEach(element => console.log(Math.sqrt(element)));


____________________________________________________________________________________________________________________________________

// 18
//Use 2 javascript array methods and chain them to return the sum of all the positives ones.

    const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
    const total = secondInput
                    .filter(input => input > 0)
                    .reduce((x,y) => x+y)

    console.log(total) //42


    ____________________________________________________________________________________________________________________________________
    // 19

   // Use 3 javascript methods and chain them to abbreviate the name and return the name initials.

    const input = 'George Raymond Richard Martin';
    const initials = input.split(' ') 
    console.log(initials)//'GRRM'

    newInitial = initials.map(firstLetter => {
        return firstLetter[0]
    });

    newInitial.toString();

    ____________________________________________________________________________________________________________________________________

    // 20

   // How objects are passed to a function in JavaScript? 
   //By Value or By Reference ? Explain in detail, using the below example:

function changeTshirt (myshirt){
    console.log("myshirt", myshirt); // blue
    myshirt.color = "red"
    console.log("myshirt", myshirt); //this is the parameter // red
    console.log("tshirt", tshirt);   //this is the global variable // red
}


const tshirt = {
    color : "blue",
    price : 10
}

changeTshirt(tshirt)

// data saves by value, but when it's a nested object it will pass by refference so the data will not change.
// logging :
// first log - the color isblue becuse myshirt is parameter on a function that its parameter is tshirt, and within tshirt object, color is blue.
// second log - comes after modifing myshirt to red so it will change to red. the redefining was inside the function scope.
// third log - also logging after changing the color from original blue (parameter inside changeTshirt) wich reffer to the tshirt object color of blue.
// now myshirt is red inside the function.



____________________________________________________________________________________________________________________________________
// 21

//How would you change the code above, so that when you modify the key color from the parameter myshirt, 
//it won't change the global variable tshirt ?

// By calling the function BEFOR 
function changeTshirt (myshirt){
    console.log("myshirt", myshirt); // blue
    myshirt.color = "red"
    console.log("myshirt", myshirt); //this is the parameter // red
    console.log("tshirt", tshirt);   //this is the global variable // red
}

changeTshirt(tshirt)

const tshirt = {
    color : "blue",
    price : 10
}


____________________________________________________________________________________________________________________________________

// 22 

// Use object destructuring to retrieve the value of the keys france and spain

 const football = {
     type: "sport",
     clubs: {
       france : "Paris Saint-Germain",
       spain : "Atlético Madrid",
     }
   }  

const {clubs: {france, spain}} = football
console.log(france);
console.log(spain);


____________________________________________________________________________________________________________________________________

// 23

//Use object destructuring in the function to retrieve the value of the keys france and spain

 function retrieveSports () {
    const franceTeam = {clubs: {france}};
    const spainTeam = {clubs: {spaib}};
    const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
    console.log(sentence);
 }


____________________________________________________________________________________________________________________________________
 // 24      What will be printed in the console

class Item {
   constructor(nameProduct, priceProduct) { 
         this.name = nameProduct;
         this.price = priceProduct;
   }

   displayInfo () {
        console.log(this.name + " is for $ " + this.price)
   }
} 

const cake = new Item("Chocolate Cake", 10);
cake.displayInfo();

// we created an Item class, with constructor of nameProduct and priceProduct.
// .this reffer to the window object, where at the buttom of the code we defined the values of new Item (inside cake const)
// as Chocolate Cake and 10.
// when we call displayInfo, the logging source the "this" from the global (window) scope.
____________________________________________________________________________________________________________________________________

// 25 What will be the output and why ? What will be the state of the promise ?

Promise.resolve('Success!')
.then(data => {
  return data.toUpperCase()
})
.then(data => {
  console.log(data)
})

// the promise will be fullfiled and the output will the value in  uppercas - becuse the only thing is resolved

____________________________________________________________________________________________________________________________________
//26 What will be displayed by the following code, after 2 seconds?

const p = new Promise(function(resolve, reject) {
   setTimeout(function() {
      resolve("OK");
   }, 2000);
});

p.then().then(function(data) {
   console.log(data);
});

//after 2 sec ill get Ok, but the chain "then" are still pending

____________________________________________________________________________________________________________________________________
// 27 Consider the following async function and its output. 
// What will be displayed to the console when calling the test() function? Explain the process

async function test() {
  let result = 'first!';
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  result = await promise;

  console.log(result);
}

test();

// test is async function with setTime to 1 sec.
// inside the function, we defined "result" as - first - and then we await the result variable to a promise. 
// now, we call test function which logs "result" as the resolved value of the promise, so we get the "done" only.

____________________________________________________________________________________________________________________________________

// 28 

// Use async await, and fetch a fact on cats and display it. 
//Use this third party API : https://catfact.ninja/fact
// In the HTML file, create a button, everytime you click it you will add a random cat fact on the DOM
// In the JS file, create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
// Make sure to use try and catch
