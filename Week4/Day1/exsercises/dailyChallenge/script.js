    const gameInfo = [
    {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
    },
    {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
    },
    {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
    },
    {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
    },
    ];

  
var newUser = [];
gameInfo.forEach(user => newUser.push(user.username + "!"));
console.log(newUser);

/*
Create an array using forEach that contains all the usernames from the gameInfo array, 
add an exclamation point (ie. “!”) to the end of every username.
The new array should look like this :
const usernames = ["john!", "becky!", "susy!", "tyson!"]
*/

var newUser = [];
gameInfo.forEach(user => newUser.push(user.username + "!"));
console.log(newUser);

/*
2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
The new array should look like this :
const winners = ["becky", "susy"]
*/
    
let winners =[];
for (winners in gameInfo) {
   console.log(gameInfo.score>5);
}


//3. Find and display the total score of the users. (Hint: The total score is 71)





//class answer
//1
const newArr = [];
gameInfo.forEach((user) => {
    const nameOfUser = user.username + "!";
    newArr.push(user)
})

//2
const bestUser = [];
gameInfo.forEach((user) => {
    if (user.score > 5) {
        bestUser.push(user.username)
    }
})

//3
let total = 0;
gameInfo.forEach((user) => total += user.score)


