//In a JS file, write a JavaScript function 
//to get the values of First and Last name of the 
//following form

//let formNode = document.forms[0].elements[0];
//console.log(formNode.value); inside f

//let formNodetwo = document.forms[0].elements[1];
//console.log(formNodetwo.value); inside f


const firstForm = document.forms[0];
firstForm.addEventListener("submit", retrieveData)

function retrieveData(event){
    event.preventDefault(); 
    const firstValue = firstForm.elements[0].value; 
    const srcondValue = firstForm.elements[1].value; 

    console.log(firstValue,srcondValue);
}