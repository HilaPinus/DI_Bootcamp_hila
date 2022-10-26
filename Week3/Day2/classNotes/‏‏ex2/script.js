let btn = document.getElementById("jsstyle");

btn.addEventListener("click", atcion);
btn.addEventListener("mouseover", atcionOne);
btn.addEventListener("mouseout", atcionOneOut);

function atcion() {
    console.log("you clicked");
}

function atcionOne() {
    btn.style.backgroundColor = "red";
    console.log(btn);
}

function atcionOneOut () {
    btn.style.backgroundColor = "";
    console.log(btn);
}


