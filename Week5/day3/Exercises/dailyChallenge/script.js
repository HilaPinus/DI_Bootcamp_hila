//1rst Daily Challenge
//Create two functions. Each function should return a promise.
//The first function called makeAllCaps(), takes an array of words as an argument
//If all the words in the array are strings, resolve the promise. 
//The value of the resolved promise is the array of words uppercased.
//else, reject the promise with a reason.
//The second function called sortWords(), takes an array of words uppercased as an argument
//If the array length is bigger than 4, resolve the promise. 
//The value of the resolved promise is the array of words sorted in 
//alphabetical order.
//else, reject the promise with a reason.

let words = ["hila kdsg sldhg sdlhsdg"];


function makeAllCaps(){
    const mypromise = new Promise((resolve, reject) => {
        for(let word of words) {
            if (typeof word === "string") {
            resolve(words.map((word) => word.toUpperCase()))
            } else {
                reject(reason)
            }
        }
    })
        return mypromise;
}

makeAllCaps(words)
.then((result) => console.log("resolve" + mypromise))
.catch((err) => console.log("catch" + words))
.finally(() => console.log("test"))

______________________________________________________


function sortWords() {
    const mySecondPromise = new Promise((resolve, reject) => {
        if (myPromise.length > 4) {
            resolve(myPromise.sort())
        } else {
            reject(reason)
        }
    })
    return mySecondPromise;
}
 sortWords(myPromise)
 
makeAllCaps(words)
.then((result) => console.log("resolve" + mySecondPromise))
.catch((err) => console.log("catch" + words))
.finally(() => console.log("test"))
