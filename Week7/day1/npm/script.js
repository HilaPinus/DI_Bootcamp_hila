/*
const slugify = require('slugify');
console.log(slugify('my new wab site'));

console.log(slugify('my new wab site', ' _ '));


*/

const axios = require('axios');
const getUsers = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        if(res.status == 200) {
        console.log(res.data);
        }
    } catch (e) {
        console.log(e);
    }
}

getUsers()