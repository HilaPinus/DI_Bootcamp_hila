
//Declare a global variable named allBoldItems.
let allBoldItems;

//Create a function called getBold_items() 
//that takes no parameter. 
//This function should collect all the bold items inside 
//the paragraph and assign them to the allBoldItems variable.

function getBold_items() {
    allBoldItems = document.getElementsByTagName("strong");
}

function highLigth () {
    getBold_items();
    for (const boldItem of allBoldItems) {
        boldItem.style.color = "blue";
    }        
}


//Create a function called return_normal() 
//that changes the color of all the bold text back to black.

function return_normal() {
    highLigth () 
    for (const boldItem of allBoldItems) {
        boldItem.style.color = "black";
    }        
}

return_normal()

//Call the function highlight() on mouseover
//(ie. when the mouse pointer is moved onto the paragraph), 
//and the function return_normal() on mouseout 
//(ie. when the mouse pointer is moved out of the paragraph). 
//Look at this example
