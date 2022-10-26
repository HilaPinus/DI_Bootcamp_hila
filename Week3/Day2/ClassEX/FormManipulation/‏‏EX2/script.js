
//Get the value of the 2nd Option


let valueOfSecondOpinion = document.getElementById("select1")[1];
console.log(valueOfSecondOpinion.value); 

//Add a new option with the value 'Work' at the end 
//of the select form

let options = document.getElementById("select1");
let newOption = document.createElement("option");
newOption.value="work";
newOption.appendChild(options);
document.body.appendChild(newOption)
console.log(newOption);

//Add a new option with the value 'Primary School' 
//at the beginning of the select form

//Change 'College' as selected. Use the 3 properties 
//we learned above

//Add a button that alert the choice selected