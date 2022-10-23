/*Exercise 1 : Play A Guessing Game
Create a new folder on your computer.
Clone or Download the index.html and style.css files from this github link.
Follow the steps written below
Steps
Explanation of the game : the point of the game is to guess the number that the computer has in “mind”.
First Part
Create a JS file and link it to the index.html file.
Take a look at your html file, you should have a button with an “onclick” event.
This event is equal to the function playTheGame(). It means that when you will click on the button, 
the function playTheGame() will be called. We will learn more about events next week ;)
Now let’s create the function:
In the JS file, create a function called playTheGame() that takes no parameter.
*/

let userQuetion = confirm("would you like to play a game?")
function playTheGame() {
    if (userQuetion == false) {
        alert("No problem, Goodbye");
    } else {
        userNumber = +prompt("type number between 1-10");
    } 
    
    if (isNaN(userNumber)) {
        alert("sorry, not a number, goodbye!");
    } else if (userNumber < 0 || userNumber > 10) {
        alert("sorry, not a good number, goodbye!");
    } else if (userNumber < 11 && userNumber > 0) {
        console.log(userNumber);
        let computerNumber = (Math.floor(Math.random()))
        console.log(Math.floor(Math.random(computerNumber) * 11))                ;
    }
}
                
playTheGame()
                    
/*
In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).
If the answer is false, alert “No problem, Goodbye”.
If his answer is true, follow these steps:
Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function).
You then have to check the validity of the user’s number :

If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
    Else (ie. he entered a number between 0 and 10), create a variable named computerNumber
    where the value is a random number between 0 and 10
(Hint: Use the built-in Math.random() function). Make sure that the number is rounded.

*/
function compareNumbers (userNumber,computerNumber) {
    if (computerNumber === userNumber) {
        alert("winner!");
    } else if (computerNumber < userNumber) {
        alert("your number is bigger then the computer/’s, guess again");
    } else if (computerNumber > userNumber) {
        alert("Your number is smaller then the computer/’s, guess again");
    }
}
compareNumbers (userNumber, computerNumber)
___________________________________________________________________________________________________________________________________________
/*Second Part
Outside of the playTheGame() function, create a new function named compareNumbers
(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber
*/


//final code 

let userQuetion = confirm("would you like to play a game?")
function playTheGame() {
    if (userQuetion == false) {
        alert("No problem, Goodbye");
    } else {
        userNumber = +prompt("type number between 1-10");
    } if (isNaN(userNumber)) {
        alert("sorry, not a number, goodbye!");
    } else if (userNumber < 0 || userNumber > 10) {
        alert("sorry, not a good number, goodbye!");
    } else if (userNumber < 11 && userNumber > 0) {
        console.log(userNumber);
        computerNumber = (Math.floor(Math.random()))
        console.log(Math.floor(Math.random(computerNumber) * 11))                ;
    }
function compareNumbers (userNumber,computerNumber) {
    if (computerNumber === userNumber) {
        alert("winner!");
    } else if (computerNumber < userNumber) {
        alert("your number is bigger then the computer/’s, guess again");
    } else if (computerNumber > userNumber) {
        alert("Your number is smaller then the computer/’s, guess again");
    }
}
compareNumbers (userNumber, computerNumber)
}

playTheGame()

/*
The point of this function is to check if the userNumber is the same as the computerNumber:
If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

If the user guessed more than 3 times, alert “out of chances” and exit the function.

Bonus
In the First Part, instead of stopping the process if the user didn’t enter a valid number. Continue asking for a number until the user enters a valid number.




