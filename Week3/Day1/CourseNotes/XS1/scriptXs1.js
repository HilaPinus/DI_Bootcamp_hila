//div DOM
// way 1
let divElement = document.body.firstElementChild
console.log(divElement);
// way 2
let SecondDivElement = document.body.children[0]
console.log(SecondDivElement);

//ul DOM
// way 1
let ulElement = divElement.nextElementSibling
console.log(ulElement);
// way 2
let SecondulElement = document.body.children[1]
console.log(SecondulElement);

//second li
// way 1
let secondLiElement = ulElement.children[1]
console.log(secondLiElement);
// way 2
let SecondLiElementTwo = ulElement.lastElementChild
console.log(SecondLiElementTwo);
