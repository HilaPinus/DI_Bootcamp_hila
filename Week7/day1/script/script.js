    //logging into the console and presenting my script by nodeJS through the git bash:
/*
console.log('hello my first NodeJs App');
let arr = [1,2,3,4,5,6,7];

for (var i=0; i<arr.length; i++) {
    console.log(arr[i], i);
}

let obj = {
    name: 'yaniv', 
    do: 'talking to much'
};
console.log(obj.name + ' ' + obj.do);
*/
/*

//logging the location of my dir or my file name -
console.log(__dirname);
console.log(__filename);

*/  

const hello= require('./greeting.js');
hello.greeting('Jhon');
console.log(hello);