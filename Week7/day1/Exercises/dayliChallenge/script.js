const b = 5;

module.exports = {
    b:b
};


/*
const scriptMain =  require('./main.js');
const partOne = scriptMain.resultPartOne;
//______________________________________________
/*

// In the script.js file create a 
//server using the http module (require('http')).
// Create a server instance and bind it at port 3000. 
//Therefore your server should run on 
//http://localhost:3000/. When the server run, 
//you should console.log("I'm listening") in the terminal.
//Set the response header to 
//res.setHeader('Content-Type', 'text/html')
let http = require("http");

const server = http.createServer(function (req, res) {
    console.log('im listening');
    res.writeHead(200);
    res.setHeader(`Content-Type: text/html`);
    res.end(`My Module is ${partOne}`);

 });
 server.listen(3000);
/*
//another try 
let http = require("http");
let fs = require('fs');

const server = http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("My Module is " + partOne);

    let readStream = fs.createReadStream("./index.html");

    readStream.pipe(res);
    });
server.listen(3000);
console.log("Im listening");
*/



const myDate = require('./main.js');

const newDate = myDate.date;
console.log(newDate);
