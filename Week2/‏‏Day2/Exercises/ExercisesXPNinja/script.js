/*Exercise 1 : Age Difference
Given the years two people were born,
find the date when the younger one is exactly half the age of the older.
Notes: The dates are given in the format YYYY
*/
let yearOne = 1991;
let yearTwo = 1987;
let ageHalf = yearOne % yearTwo;
let yearHalf = ageHalf+yearOne;
console.log(yearHalf);

/*
Exercise 2 : Zip Codes */ didn't do the spsces part of the code 
/*
While working in a Post Office you must have the clients’ zip code in order to send them their letters.
Ask the client for their zip code and console.log “success” or “error” based on the following rules.
Zip codes consists of 5 numbers
Must only contain numbers
Must not contain any whitespace (spaces)
Must not be greater than 5 digits in length
*/
let userZip = +prompt("enter your zipcode here");
if (userZip.length = 5 && typeof userZip === 'number' && userZip != NaN && userZip.length<=5) {
    console.log("succses");
} else {
    console.log("error");
}



/*
Exercise 3 : Secret Word */ didnt do the replace part - cant code multiple
/*
Prompt the user for a word and save it to a variable.
Delete all the vowels of the word and console.log the result. */
const userWord = prompt("enter word");
const noVowels = userWord.replace(/[aeiou]/gi, '');
console.log(noVowels); 

/*
Bonus: Replace the vowels with another character and console.log the result -- */ don't think i managed
a = 1
e = 2
i = 3
o = 4
u = 5

const userWord = prompt("enter word");
let noVowels = userWord.replace(/[a]/gi, '1');
console.log(noVowels);
