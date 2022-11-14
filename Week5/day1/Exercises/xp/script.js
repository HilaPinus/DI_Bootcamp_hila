//🌟 Exercise 1 : HTML Form

//When you click the Send button, the form will be submitted with a GET method. 
//(you can use the same HTML file for the action url)
//Where will the sent data appear? 
const form = document.getElementById("userForm");
const btn = document.getElementById("btn");
btn.addEventListener("click", getData());

function getData ()

//______________________________________________________________________________________________________________________________

//🌟 Exercise 2 : HTML Form #2
//Use the same form structure as Exercise 1.
//When you click the Send button, the form will be submitted with a POST method.
//(you can use the same HTML file for the action url)
//Where will the sent data appear? Hint : Look at the Network Tab

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form method="POST" action="index.html" id="userForm">

        <label for="name">Name</label> <br>
        <input type="text" id="name" name="name"><br>

        
        <label for="comments">Comments</label><br>
        <textarea name="comments" form="userForm"></textarea><br>
        
        <input type="submit">    

        
    </form>
</body>
</html>
*/




//______________________________________________________________________________________________________________________________

//🌟 Exercise 3 : JSON Mario
//Using this code:

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
//Convert this JS object into a JSON object.
const marioGameToJson = JSON.stringify(marioGame);

//What happens to the nested objects ? 
**Nested objects - deep copying as strings and not at refferences.

//Convert and pretty print this JS object into a JSON object. 
const marioGameToJsonPretty = JSON.stringify(marioGame, null, 2);
console.log(marioGameToJsonPretty);

//Use your web inspector to add a breakpoint. 
//Check the values of the JSON object in the debugger. ??????????????s










