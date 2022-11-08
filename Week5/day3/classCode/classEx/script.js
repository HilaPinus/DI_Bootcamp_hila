//EXERCISE 1
//Create a function that takes in a single parameter and returns a new promise.
//Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
//If the parameter is a string, the promise resolves with that same string uppercased.
//If the parameter is anything but a string it rejects with that same input.
//Use then to repeat the string twice 
//use catch to console.log the error 
//finally call a function that console.log ("congratulation")



/*
    sentence = 123;
    const myFunction = new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(typeof sentence ===  `string`) {
                resolve(sentence.toUpperCase())
            } else {
                reject(sentence)
            }
        },5000)
    
    })

    myFunction
    .then((result) => console.log("resolved" + " " +result + " " + result))
    .catch((err) => console.log("error catch", err));

    function congratulation() {
        console.log("congratulation");
    }

congratulation();


*/
//class

function checkString(word){
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof word === "string") {
                resolve(word.toLocaleUpperCase())
            } else {
                reject(word)
            }
            },5000)
        })
        return myPromise;
    }

    //1 = checkString("hello")
    // 2 = checkString(123)
    .then((result) => console.log(result.repeat(2)))
    .catch((err) => console.log("in the catch", err))
    .finally(() => console.log("test"))





