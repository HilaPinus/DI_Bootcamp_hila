const b = 5;

module.exports = {
    b:b
};


// // //______________________________________________

// Part II:
// In the script.js file create a server using the http module (require('http')).
// Create a server instance and bind it at port 3000. 
//Therefore your server should run on http://localhost:3000/. 
//When the server run, you should console.log("I'm listening") in the terminal.
// Set the response header to 
//res.setHeader('Content-Type', 'text/html')
//(look at this tutorial- Part named “Serving HTML)

// Respond (res.end) with a HTML paragraph saying 
//"My Module is <result from Part I>", and an HTML 
//<h1> saying “Hi there at the frontend
let http = require("http");

const server = http.createServer((request, response) =>{
    const scriptMain =  require('./main.js');
    const partOne = scriptMain.resultPartOne;
    console.log('im listening');
    response.setHeader('Content-Type', 'text/html');
    response.end("My Module is " + partOne + "<h1>Hi there at the frotend<h1>");

});
 server.listen(3000);




// const myDate = require('./main.js');

// const newDate = myDate.date;
// console.log(newDate);
