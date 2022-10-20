Conditionals - 

Exercise 1 - Make a keyless car!
This car will only let you drive if you are over 18. Make it do the following:
Using prompt() and alert(), ask a user for their age.
IF they say they are below 18, respond with: 
IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

    let userAge = prompt("what is your age?");
    if (userAge === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    } else if (userAge < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off");
    } else if (userAge > 18) {
        console.log("Powering On. Enjoy the ride!");
    }

    Exercise 2
let a = 2 + 2;  // 4
switch (a) {
  case 3:
    alert( 'Too small' ); // not 4, go on
    break;
  case 4:
    alert( 'Exactly!' ); 4 === 4
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}

Exercise 3
let a = 2 + 2;
switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

Introduction On Objects
Exercise 1
Create a stuctured html file linked to a JS file
1. Create an object that has properties "username" and "password". Fill those values in with strings.
let userInfo = {
  userName: "hila",
  password: "1234",
};

2. Create an array which contains the object you have made above and name the array "database".
let dataBase = [userInfo];

3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsFeed = [
              {
                userName: "matan", 
                password: "456"
              },
              {
                userName: "mia", 
                password: "789"
              },
              {
                userName: "shilo",
                password: "159"
              }
            ]; 
