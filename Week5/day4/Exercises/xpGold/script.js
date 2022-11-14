//Exercise 1: Analyze #2
//Instructions

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");           //2
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");                        //4
            console.log("slow promise is done");     //3   
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");               //5    
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");                            //7
            console.log("fast promise is done");        //6
        }, 1000);
    });
};

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');                //1
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();           
    console.log(fast);
}

sequentialStart()
//Analyse the code provided above before executing it - what will be the outcome?



//Exercise 2: Analyze #3
let resolveAfter2Seconds = function () {
    console.log("starting slow promise");       //2
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");        //4
            console.log("slow promise is done");    //3
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");           //5
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");                        //7
            console.log("fast promise is done");    //6
        }, 1000);
    });
};

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');     //1
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

setTimeout(concurrentStart, 4000)
//Analyse the code provided above before executing it - what will be the outcome?



//Exercise 3 : Modify Fetch With Async/Await
//Instructions
//Using this code:

const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"
      ];

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

getData()


_________________________________________________________________________________________________


const getData = async () => {
    const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"
      ];    
let response = await fetch(urls);
let data = await response.json();

console.log(data);}


//Modify the function above. Add async await in place of the following line:
//fetch(url).then(resp => resp.json())
//So there shouldn’t be any .then() calls anymore!
//Don’t get discouraged… this is a really tough one…
