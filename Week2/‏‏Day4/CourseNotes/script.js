CLASS CODE EX

////class EX 1

//Write a Javascript function that takes a parameter: myAge
//In the function, console.log the age of my mum and my dad. 
//My mum is twice my age, and my dad is 1.2 the age of my mum.
//Call the function.

function ages(myAge, mum=2*myAge, dad=1.2*mum) {
    console.log("My age is " + myAge + ", my mum age " + mum + "my dad age is " + dad);
    }
ages(31)

/*
//You are the manager of the chocolate factory, in order to make your clients happy
//you will send them a gift depending on their quantity of chocolate box they ordered.
//Create a function named checkQuantityOrder, that takes one parameter, the quantity the user ordered.

If the client ordered more between 5 and 10 boxes (included) console.log "Dear client, you won a bouquet of flowers"
If the client ordered more between 10 and 20 boxes (included) console.log "Dear client, you won a bottle of wine"
If the client ordered more than 20 boxes (not included) console.log "Dear client, you won a trip to Paris"
Call the function a few times,
checkQuantityOrder(8);
checkQuantityOrder(15);
checkQuantityOrder(30);
*/

Exercise 2

//Write a Javascript function that takes a parameter: myAge
//In the function, return the age of my mum (my mum is twice my age)
//Call the function
//In the global scope, console.log the result of the function ---------------------------------------DONT UNDERSTAND

function ages(myAge, mum=2*myAge, dad=1.2*mum) {
    console.log("My age is " + myAge + ", my mum age " + mum + "my dad age is " + dad);
    return mum;
    }
ages(31)



function checkQuantityOrderWithName(qty, clientName="CLIENT") {
    if(qty>= 5 && qty<=10){
        console.log("Dear " + clientName + ", you won a bouquet of flowers")
    } else if (qty> 10 && qty<=20){
        console.log("Dear " + clientName + ", you won a bottle of wine");
    } else if (qty> 20){
        console.log("Dear " + clientName + ", you won a trip to Paris");
    }
}
checkQuantityOrderWithName(20, "Tom"); //Dear Tom you won a bottle of wine
checkQuantityOrderWithName(6); //Dear CLIENT you won a bouquet of flowers