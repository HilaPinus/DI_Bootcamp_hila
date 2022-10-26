//Create a banner saying "The sales end in 10min ! " . 
//Style the banner and make it visible 
//to the user after 5 sec.

let banner = document.createElement("h1");
let textBanner = document.createTextNode("The sales end in 10min!");
banner.style.backgroundColor = "red";

function bannerTime () {
banner.appendChild(textBanner);
document.body.appendChild(banner);
console.log(banner + " " + textBanner);
}

setTimeout(bannerTime, 2000)


//Use the same code as before but create a countdown
//in the banner.
//... "The sales end in 10sec ! "
//... "The sales end in 9sec ! " etc ... until 0
//If you need help for this exercise, 
//look at the 1st video of this tutorial
let counter = 10;    
let countdownDiv = document.createElement("div");
let counterNewText = countdownDiv.appendChild(document.createTextNode("The sales end in " + counter + "sec"));

let countDwon = setInterval(function(){
  console.log(countdownDiv);
  counter--
  if (counter === -1) {
    clearInterval(countDwon)  
}
}, 1000);

