const express = require('express');
const app = express();

app.get('/tutorial/:notion', (req, res) => {
    console.log("req.params: ", req.params)
    res.send(`Tutorial about ${req.params.notion}!`)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));



// Run the server and go to http://localhost:3000/tutorial/javascript
