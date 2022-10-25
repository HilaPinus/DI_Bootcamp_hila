
//Create an array which value is the planets of the solar system.
let planets = ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

//For each planet in the array, create a <div> using createElement.
for (let planet of planets) {
console.log("planet:", planet);

//This div should have a class named "planet".
let div = document.createElement("div");
div.classList.add("planet");
div.classList.add(planet.toLowerCase());
console.log("div:",div);

//Each planet should have a different background color.
//(Hint: you could add a new class to each planet - 
//each class containing a different background-color).

const section = document.querySelector(".listPlanets");
section?.appendChild(div)
}

let earthPlanet = document.getElementsByClassName("planet earth").style.backgroundColor=("red");

//Finally append each div to the <section> in the HTML (presented below).
//Bonus: Do the same process to create the moons.
//Be careful, each planet has a certain amount of moons. How should you display them?
//Should you still use an array for the planets ? Or an array of objects ?