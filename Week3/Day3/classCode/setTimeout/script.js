// syntax
// setTimeout(function to call, time)

//syntax
// element.addEventListener("click", sayHi)


setTimeout(sayHi, 2000) //the function sayHi is going to run after 1 second

function sayHi (){
    console.log("hello");
}

// retrive the button
// the start function is called after the button is clicked
const btn = document.getElementById("btn");
btn.addEventListener("click", start);

function start(){
    console.log("starting");
    setTimeout(sayHi, 2000); //call the function sayHi after 2 seconds
}

function sayHi (){
    console.log("hello");
}