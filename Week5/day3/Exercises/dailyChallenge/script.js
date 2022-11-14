
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

let words = ["hila", "zamir", "metan", "mia", "shilo"];

function makeAllCaps(words){
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



const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


function toJson(json) {
    const jToObj = JSON.parse(json)
    const prom1 = new Promise ((resolve, reject) => {
        if(Object.keys(jToObj).length != 0) {
            resolve(jToObj)
        } else {
            reject('JSON is empty')
        }
    })
    return prom1
}


function toMorse(morseJS){
    const promtString = prompt('enter word').toLocaleLowerCase().
    replace( / /g, `-`).split("");
    const prom2 = new Promise ((resolve, reject) => {
        if(promtString.every(c=>moreseJS[c])){
            resolve(promtString.map(c=>morseJS[c]))
        } else {
            
        }
    })
}




