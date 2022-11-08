
const myGrade = 80;
const myPromise = new Promise ((resolve, reject) => {
    if(myGrade > 70) {
        resolve("gift!")
    } else {
        reject("failed")
    }
})

console.log(myPromise);

_______________________________________________________________________________________________________________

const myGrade = 80;
const succses = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if(myGrade > 70) {
            resolve(["phone", "TV"])
        } else {
            reject("failed")
        }
    },3000)
  
})

console.log(succses);
//state pending for 3 sec and then resolve. the result of the promise will be whatever inddide resolve.


_______________________________________________________________________________________________________________




const myGrade = 80;
const succses = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if(myGrade > 70) {
            resolve(["phone", "TV"])
        } else {
            reject("failed")
        }
    },3000)
  
})
//we cant log the promise - we dont know if it will be resolved or rejected

succses.then(function(result) {
    console.log(result);
})

succses.then((result) => {
    result.forEach(element => {
        console.log(element);
    });
})


_______________________________________________________________________________________________________________


const myGrade = 80;
const succses = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if(myGrade > 70) {
            resolve(50)
        } else {
            reject("failed")
        }
    },3000)
  
})

//option 1
console.log(succses.then((money) => console.log(money)) // 50
);

//option 2 - we need to retuen "money", not to log it like op.1 example. 
//nts - it not written specificly "return" befor the "money" afater the "=>" cuz we dont need the word.
console.log(succses.then((money) => money)) // 50


_______________________________________________________________________________________________________________

const myGrade = 80; // if my grade was 60, it will take me to the catch, and the catch takes me to the reject.
const succses = new Promise ((resolve, reject) => {
    console.log(abc); // error undifiend
    setTimeout(() => {
        if(myGrade > 70) {
            resolve(50)
        } else {
            reject("failed")
        }
    },3000)
  
})

succses
.then((result) => console.log(result))
.catch((err) => console.log("in the catch", err));

