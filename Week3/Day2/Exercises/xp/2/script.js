//Retrieve the form and console.log it.
let form = document.form[0];
console.log(form);

//Retrieve the inputs by their id and console.log them.
let inputFname = document.getElementById("fname");
let inputLname = document.getElementById("lname");
let inputSubmit = document.getElementById("submit");
console.log(inputFname);
console.log(inputLname);
console.log(inputSubmit);

//Retrieve the inputs by their name attribute
// and console.log them.
const firstNameByAttribute = document.querySelector("[name=fname");
const SecondNameByAttribute = document.querySelector("[name=lname");
console.log(firstNameByAttribute);
console.log(SecondNameByAttribute);

//When the user submits the form (ie. submit event listener)
//use event.preventDefault(), why ?

//get the values of the input tags

const bottun = document.getElementById("submit");
bottun.addEventListener("click", values)

function values (e) {
    let firstValue = inputFname.value;
    let lastValue = inputLname.value;
    console.log(e);

    console.log(firstValue);
    console.log(lastValue);
}