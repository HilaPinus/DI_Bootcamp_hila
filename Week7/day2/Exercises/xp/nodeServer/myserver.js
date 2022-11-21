// Exercise 1 : HTTP
// Instructions
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. 
//You should return at least three different lines of HTML to the browser. 
//(Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/


const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/welcome') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Welcome new user</p></body></html>');
        res.end();
    } else {
        res.end('<html><body><h1>My first response</h1> <br> <h1> my first response</h1> <br><p>My first response</p></body></html>');
    }
});
server.listen(5000);
