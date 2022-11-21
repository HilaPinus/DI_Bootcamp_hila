// // create server

// const http = require('http'); 
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('Hello World');
// });

// server.listen(5000); 
// console.log('Node.js web server at port 5000 is running..')
//____________________________________________________________________________________________________
// // create server and import json

// const http = require('http'); 
// const server = http.createServer((req, res) => {  
//     if (req.url == '/welcome') { 
//         res.setHeader("Content-Type", "application/json");
//         res.writeHead(200);
//         res.end(JSON.stringify({ message: "Welcome New User"}));
//         // OR
//         // res.write(JSON.stringify({ message: "Welcome New User"}));  
//         //res.end();  
//     } else {
//          res.end("Another page");  
//     }
// });
// server.listen(5000);
// console.log('Node.js web server at port 5000 is running..')
//____________________________________________________________________________________________________
// const json =
// {
//     "menu": {
//         "id": "file",
//         "value": "File",
//         "popup": {
//             "menuitem": [
//                 { "value": "New", "onclick": "CreateNewDoc()" },
//                 { "value": "Open", "onclick": "OpenDoc()" },
//                 { "value": "Close", "onclick": "CloseDoc()" }
//             ]
//         }
//     }
// }

// const http = require('http'); 
// const server = http.createServer((req, res) => {  
//     if (req.url == '/welcome') { 
//         res.setHeader("Content-Type", "application/json");
//         res.writeHead(200);
//         res.end(JSON.stringify({json}));
//         // OR
//         // res.write(JSON.stringify({ message: "Welcome New User"}));  
//         //res.end();  
//     } else {
//          res.end("Another page");  
//     }
// });
// server.listen(5000);
// console.log('Node.js web server at port 5000 is running..')

//____________________________________________________________________________________________________

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/welcome') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Welcome new user</p></body></html>');
        res.end();
    } else {
        res.end('<html><body><p>Another page</p></body></html>');
    }
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running..')