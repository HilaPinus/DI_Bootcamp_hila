
//In the <div>, change the value of the id attribute from navBar
    // to socialNetworkNavigation, using the setAttribute method.

let divNode = document.body.firstElementChild;
divNode.setAttribute("navbar", "socialNetworkNavigation");

//We are going to add a new <li> to the <ul>.
//First, create a new <li> tag (use the createElement method).
let newLi = document.createElement("li");

//Create a new text node with “Logout” as its specified text.
let newTextNode = document.createTextNode("Logout");

//Append the text node to the newly created list node (<li>).
newLi.appendChild(newTextNode);

//Finally, append this updated list node to the unordered list (<ul>), 
//using the appendChild method.
newLi.appendChild(newTextNode);

//Use the firstElementChild and the lastElementChild properties
//to retrieve the first and last <li> elements 
//from their parent element (<ul>). Display the text of each link. 
//(Hint: use the textContent property).

let firstLiOfUl = divNode.firstElementChild.firstElementChild.textContent;
console.log(firstLiOfUl);
let lastLiOfUl = divNode.firstElementChild.lastElementChild.textContent;
console.log(lastLiOfUl);