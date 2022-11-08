//🌟 Exercise 1 : Comparison

//Create a function called compareToTen(num) that takes a number as an argument.
//The function should return a Promise:
//the promise resolves if the argument is less than 10
//the promise rejects if argument is greater than 10.

//1

function compareToTen(num) {
const myPromise = new Promise ((resolve, reject) => {
    if(num < 10) {
        resolve("yes")
    } else {
        reject ("no")
    }
})
return myPromise
}
compareToTen(15)
.then((result) => console.log(result))
.catch((error) => console.log(error))
.finally(() => console.log("finaly"))

//2


function compareToTen(num) {
    const myPromise = new Promise ((resolve, reject) => {
        if(num < 10) {
            resolve("yes")
        } else {
            reject ("no")
        }
    })
    return myPromise
    }

compareToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error))

________________________________________________________

//🌟 Exercise 2 : Promises
//Create a promise that resolves itself in 4 seconds 
//and returns a “success” string.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (myPromise) {
            resolve("success!")
        } else {
            reject("something went wrong")
        }
    })
}, 4000)

myPromise
.then(result => console.log(result))
.catch((err) => console.log(err))

//How can you make your promise from part 1 shorter 
//using Promise.resolve() and console.log “success”?
//Add code to catch errors and console.log ‘Ooops something went wrong’.

Promise.resolve('Success')
.catch("somthing is wrong")
.then((value) => {
    setTimeout( () => console.log(value) ,4000)
})

________________________________________________________

//🌟 Exercise 3 : Resolve & Reject
//Use Promise.resolve(value) to create a promise that will 
//resolve itself with a value of 3.

const promise = Promise.resolve(3);
promise.then(function(val) {
    console.log(val);
});


//Use Promise.reject(error) to create a promise that will 
//reject itself with the string “Boo!”


const promise = Promise.reject(3);
promise.catch(function(err) {
    console.log(err);
});




//Exercise 4: Quizz - Not Mandatory
//Follow this tutorial and do the quizz until the 
//page called “a few tricks with promises”.