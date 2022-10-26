//Using a DOM property, retrieve the h1 and console.log it.
let h1 = document.querySelector("h1");
console.log("h1:", h1);

//Using DOM methods, remove the last paragraph in the <article> tag.
let article = document.querySelector("article");
article.lastElementChild.remove();

//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

let h2 = document.getElementsByTagName("h2")[0];
console.log(h2);
h2.addEventListener("click", redClick);

function redClick () {
    h2.style.backgroundColor = "red";
}

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.getElementsByTagName("h3")[0];
console.log(h3);
h3.addEventListener("click", disapearH3);

function disapearH3 () {
    h3.style.display = "none";
}

//Add a <button> to the HTML file, that when clicked on, 
//should make the text of all the paragraphs, bold.


let btn = document.createElement("button");
document.body.appendChild(btn);
let allP = document.querySelectorAll("p");

btn.addEventListener("click", boldTextP);
function boldTextP() {
    document.body.allP.style.fontWeight = 900;   
}


