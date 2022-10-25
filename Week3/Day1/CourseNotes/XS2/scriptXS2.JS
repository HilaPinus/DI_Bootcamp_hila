/*
For each of the questions, find 2 WAYS to access :
1. The div node
2. The ul nodes, and render all of it's children one by one
3. The first li of each ul
*/

//div node
// way 1
let divNode = document.body.firstElementChild;
console.log(divNode);
//way2
let divNodeTwo = document.body.children[0];
console.log(divNodeTwo);

//ul nodes
//way 1
let firstUlNode = document.body.firstElementChild.nextElementSibling;
console.log(firstUlNode);
let secondUlNode = document.body.children[2];
console.log(secondUlNode);

//way 2
let secondWayOffirstUlNode = document.getElementsByClassName("list")[0];
console.log(secondWayOffirstUlNode);

let secondWayOfSecondUlNode = document.getElementsByClassName("list")[1];
console.log(secondWayOfSecondUlNode);


let allChildrenFirstUl = document.getElementsByClassName("list")[0].children;
console.log(allChildrenFirstUl);

let allChildrenSecondUl = document.getElementsByClassName("list")[1].children;
console.log(allChildrenSecondUl);


