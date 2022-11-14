//🌟 Exercise 1: Conversion
//Instructions
//Convert the below promise into async await:


myAsyncFunction()
async function myAsyncFunction () {
    const res = await fetch ('https://www.swapi.tech/api/starships/9/');
    const data = await res.json();
console.log(data);
}


//🌟 Exercise 2: Analyze
//Instructions

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
//calling 1
// results = resolved (after 2 sec) ---- acctually it wasnt resolved, it was a promise
//resolved login
