const numbers = [10, 20, 30, 40];

//without reduce;
function addNumbers () {
const sum = 0;
for(let num of numbers){
    sum += num
}
console.log(sum);
}
addNumbers()




//with reduce
const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((accumulator, element, index) => {
const totalSum = accumulator+element;
return totalSum;
})

console.log(sum);


//withn 1000 +
const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((accumulator, element, index) => {
const totalSum = accumulator+element;
return totalSum;
},1000)

console.log(sum);


//reduce with string - secret password from the first letter of every name
const users = ["Leah", "Sarah", "Tom", "Vanessa"];
const secret = users.reduce((accumulator, element) => {
const sentence = accumulator+element[0];
    return sentence;
}, "")

console.log(secret);

//another way on one line

const users = ["Leah", "Sarah", "Tom", "Vanessa"];
const secret = users.reduce((accumulator, element) => accumulator+element[0], "");
console.log(secret);







