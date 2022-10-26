//In a JS file, write a JavaScript function 
//to add rows to a table. Use the code below as a base

/*
let newTr = document.createElement("tr");
let FirstNewTd = document.createElement("td");
let secondNewTd = document.createElement("td");

let tableNode = document.body.firstElementChild;


FirstNewTd.appendChild(newTr);
newTr.appendChild(FirstNewTd);

secondNewTd.appendChild(newTr);
newTr.appendChild(secondNewTd);;


newTr.appendChild(tableNode);
tableNode.appendChild(newTr);
*/


//let tableNode = document.body.firstElementChild[0].createElement(tr);


var table = document.getElementById("sampleTable");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";