const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};



1. Add the lastname Smith to the object
userCart.lastname = "Smith";
console.log(userCart);
//class answer: more recomended with [] and "", then a . as i did
userCart["lastname"] = "Smith"; 

2. Change the price of the pear, so it will contain the Taxes. 17%
userCart["prices"]["pear"] = (userCart["prices"]["pear"])*1.17;

3. Ask the user for the fruit he wants between Apple, Banana and Pear. 
Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"

let userFruit = prompt("choose fruit").toLocaleLowerCase()
console.log(userFruit);
console.log(userCart["prices"]["userFruit"]);


4. Console.log the price for the specific fruit the user wants
console.log(userCart["prices"]["apple"]);






