Exercise 1 : The World Translator
Ask the user which language they speak.
Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in
 the if statement. For example “english” or “English” or “ENGlish” ect…”
Create a few conditions :
If the user speaks French : display “Bonjour”
If the user speaks English : display “Hello”
If the user speaks Hebrew : display “Shalom”
If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’

let userLang = prompt("what lang you speak?").toLocaleLowerCase()
if (userLang === "french") {
  console.log("Bonjour");
} else if (userLang === "english") {
    console.log("Hello");
} else if (userLang === "hebrew") {
    console.log("Shalom");
} else {
    console.log(010101010100101101);
}

switch solution - 
let userLang = prompt("what lang you speak?").toLocaleLowerCase()
switch (userLang) {
  case "French":
  console.log("Bonjur!");
  break;
case "english":
console.log("hello!")
break;
case "hebrew":
console.log("Shalom!")
break;
}

/*
Exercise 2 : The Grade Assigner
Ask the user for their grade.
If the grade is bigger than 90, console.log “A”
If the grade is between 80 and 90 (included), console.log “B”
If the grade is between 70(included) and 80 (included), console.log “C”
If the grade is lower than 70, console.log “D”
code:
let userGrade = +prompt("what is your grade?");
if (userGrade >=90) {
  console.log("A");
} else if (userGrade < 90 && userGrade>=80) {
  console.log("B");
} else if (userGrade <80 && userGrade >=70) {
  console.log("C");
} else if (userGrade < 70) {
  console.log("D");
}



Exercise 3 : Verbing
Prompt the user for a string. It must be a verb.
If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
If the length of the string is less than 3, leave it unchanged.
Example:
  The string is : "swim" , your program should console.log : "swimming"
  The string is : "swimming", your program should console.log : "swimmingly"
  The string is : "go" your program should console.log : "go"

  let userVerb = prompt("type in a verb");
  if (userVerb.length >= 3 && !userVerb.endsWith("ing")) {
    console.log(userVerb + "ing");
  } else if (userVerb.length >= 3 && userVerb.endsWith("ing")) {
    console.log(userVerb + "ly");
  } else (userVerb.length < 3)
    console.log(userVerb);
  */