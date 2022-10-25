//Add a “light blue” background color and some padding to the <div>.
let divNode = document.body.firstElementChild;
divNode.style.background = "blue";
divNode.style.padding = "50px";


//Do not display the <li> that contains the text node “John”.
let liJohn = document.body.children[1].firstElementChild;
liJohn.innerHTML = " ";

//Add a border to the <li> that contains the text node “Pete”.
let liOfPete = document.body.children[1].lastElementChild;
liOfPete.style.border =  "1px solid black";

//Change the font size of the whole body.
let bodyNode = document.firstElementChild;
bodyNode.style.fontSize = "20px"

//Bonus: If the background color of the div is “light blue”, alert “Hello x and y”
// (x and y are the users in the div).

