let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("mybody")

color1.addEventListener("input", function () {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value
    + ")";
    css.textContent=body.style.background + ";";

})

color2.addEventListener("input", function () {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value
    + ")";
    css.textContent=body.style.background + ";";

})

//dry - 

/*
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("mybody")

function setColors () {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value
    + ")";
}
color2.addEventListener("input", setColors);
color2.addEventListener("input", setColors);
*/