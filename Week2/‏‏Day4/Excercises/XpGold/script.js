/*Exercise 1 : Is_Blank
Write a program to check whether a string is blank or not.
console.log(isBlank('')); --> true
console.log(isBlank('abc')); --> false
*/

function isStringBlank () {
    userString = prompt("type sentence")
    if (userString.length===0){
        console.log(true); 
    } else {
        console.log(false);
    }
}
isStringBlank()
 /*

Exercise 2 : Abbrev_name
Write a JavaScript function to convert a string into an abbreviated form.
*/


function abbreviated () {
    userFullName = prompt("type full name")
    if (userFullName.length > 1) {
        return (userFullName[0] + " " + userFullName[1].charAt(0) + ".");
    }
    return userFullName[0];
}
abbreviated()


/*
Exercise 3 : SwapCase
Write a JavaScript function which takes a string as an argument and swaps the case of each character.
For example :

if you input 'The Quick Brown Fox' 
the output should be 'tHE qUICK bROWN fOX'.


Exercise 4 : Omnipresent Value
Instructions
Create a function that determines whether an argument is omnipresent for a given array.
A value is omnipresent if it exists in every subarray inside the main array.
To illustrate:

[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
Examples

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
