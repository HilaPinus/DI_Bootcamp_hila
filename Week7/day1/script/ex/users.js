// // users.js
// // 1. create function
// // 2. fetch https://jsonplaceholder.typicode.com/users
// // 3. return the dats users json
// // 4. export this function with mudole.exports



const functionTofetch = async  () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    return data
}
const myData = functionTofetch().then(data => {
    data.jason()
});

module.exports = {
    functionTofetch
}


const getUsers = async() => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        // console.log(data);
        return data
    } catch (e) {
            console.log(e);
    }
}


module.exports = {
    getUsers
}
