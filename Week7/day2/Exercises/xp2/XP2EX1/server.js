// In the server.js file, create an express server and a route /, using the GET method.
// Add the below Javascript Object in the handler function of the route:

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => res.json({user}));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// Use your server to get the static HTML file from the public folder. 
//Check out the lesson named Express Routes & Queries in the Course Notes, 
//more specifically the part “How To Serve Static Files In Express”.

// Your server should run on http://localhost:3000/ to serve the HTML file.
// In the script.js file, fetch your server and get the response. The response should be the JSON Object. console.log this object and display it on the HTML.
