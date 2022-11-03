//Exercise 1 : Analyzing The Map Method
//Analyze this code, what will be the output ?

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
//2, 4, 6

//Exercise 2: Analyzing The Reduce Method
//Analyze this code, what will be the output ?

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
//[0, 1, 2, 3]
//the answer - [1, 2, 0, 1, 2, 3] 
//acc is the value of each index. cur is the index itself.
//concat return orders the functin to concat VALUE to the next INDEX.
//reduce methode orders the funtion to combine them all to one array.



//Exercise 3 : Analyze This Code
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
//What is the value of i ?
            //the index of each element of the array

//Exercise 4 : Nested Arrays
//Using a method, take this array 
//and modify it to look like this array: [1,2,3,[4],[5]].

const arrayNum = 
const flatNumbers = arrayNum.flat();
console.log(flatNumbers);

//

const numbers = [[1],[2],[3],[[[4]]],[[[5]]]];
const flatNumbers = numbers.flat(1);

console.log(flatNumbers);



//Bonus Try to do it on one line.
//Using a method, take this array  
//and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const flatGreeting = greeting.join();
console.log(flatGreeting);





//Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.
//Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
