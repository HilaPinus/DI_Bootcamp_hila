//Add a click event listener to the div

let divNode = document.body.firstElementChild;
divNode.addEventListener("click", divClick, false);

function divClick (e) {
    divNode.style.backgroundColor = "red";
    console.log("you clicked div");
}

//Add a few event listeners to the button. 

let btnNode = document.getElementById("jsstyle");
btnNode.addEventListener("click", btnClick );
function btnClick(e){
    btnNode.style.backgroundColor = "blue";
    console.log("you clicked btn");
}


//With at least one click event. 
//The event listeners should change the style of the button

//Check how the propagation works and try to prevent it