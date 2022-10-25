
//Retrieve the div and console.log it

let divNode = document.body.firstElementChild;
console.log(divNode);
//or
let divNodeWayTwo = document.getElementById("container");
console.log(divNodeWayTwo);

//Change the name “Pete” to “Richard”.

let secondLiToChange = document.getElementsByClassName("list")[0].lastElementChild;
secondLiToChange.setAttribute("Pete" , "Richard”");
console.log(secondLiToChange);

//Change each first name of the two <ul>'s to your name.
let firstNameOfFirstUl = document.getElementsByClassName("list")[0].firstElementChild;
firstNameOfFirstUl.setAttribute("John" , "Hila");
console.log(firstNameOfFirstUl);

let firstNameOfSecondtUl = document.getElementsByClassName("list")[1].firstElementChild;
firstNameOfSecondtUl.setAttribute("David" , "Hila");
console.log(firstNameOfSecondtUl);

//Delete the <li> that contains the text node “Sarah”.
let sharahToDelete = document.getElementsByTagName("li")[3];
sharahToDelete.innerHTML( " ");
console.log(sharahToDelete);
console.log(document.getElementsByTagName("ul")[1]);

//Bonus - Using Javascript:
//Add a class called student_list to both of the <ul>'s.
let firstUl = document.getElementsByClassName("list")[0];
firstUl.classList.add("student_list");
console.log(firstUl);

let secondUl = document.getElementsByClassName("list")[1];
secondUl.classList.add("student_list");
console.log(secondUl);

//Add the classes university and attendance to the first <ul>.

