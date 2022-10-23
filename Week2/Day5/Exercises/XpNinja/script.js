//Create A Hangman Game:
//Create the “Hangman” game. Your game will run in the console.
//You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.


//Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).

let userOneWord = prompt("enter word with 8 letters");
coverWord = userOneWord.replace(/./g, '*');
while (userOneWord.length < 8) {
    userOneWord = prompt("enter word with 8 letters");
}

console.log(coverWord);

let userTwoLetters = prompt("enter a letter");
if (userOneWord.includes(userTwoLetters)) {
    alert("the letter you entered is part of the word letters!")
} else {
    alert("the letter you entered *not* a part of the word!")
}

console.log(userTwoLetters.indexOf().subSring(coverWord));

/*

//At this point continuously prompt player 2 for a letter.

If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
If player 1 wins, display a message that says CONGRATS YOU WIN.
