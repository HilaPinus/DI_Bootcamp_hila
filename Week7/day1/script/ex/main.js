
// // main.js
// // 1. require users the mudole 
// // 2. call the functin
// // 3. log the data


// const myReuire = require('./users.js')
// console.log(functionTofetch());
// console.log(data);


const users = require('./users.js');
users.getUsers()
.then(data => {
    console.log(data);
})