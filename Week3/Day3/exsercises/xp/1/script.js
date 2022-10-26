//Part I
//In your Javascript file, using setTimeout, call a function after 2 seconds.
//The function will alert “Hello World”.

function helloAlert () {
    alert("hello world")
}
setTimeout(helloAlert, 2000);


//Part II
//In your Javascript file, using setTimeout, call a function after 2 seconds.
//The function will add a new paragraph <p>Hello World</p> 
//to the <div id="container">.

let divContainer = document.getElementById("container");
let newP = document.createElement("p");
let textP = document.createTextNode("hello world")

function helloP () {
    newP.appendChild(textP);
    divContainer.appendChild(newP);
}
setTimeout(helloP, 2000);

//Part III
//In your Javascript file, using setInterval, call a function every 2 seconds.
//The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
//The interval will be cleared (ie. clearInterval), 
//when the user will click on the button.
//Instead of clicking on the button, the interval will be cleared 
//(ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let myInterval = setInterval (addP2, 2000);
function addP2 () {
    let newP2 = document.createElement("p");
    let textP2 = document.createTextNode("hello world p2");
    newP2.appendChild(textP2);
    divContainer.appendChild(newP2);
}

let btn = document.getElementById("clear");
btn.addEventListener("click", clear);

function clear() {
    clearInterval(myInterval);
}

