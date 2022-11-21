const express = require('express'); 
const app = express();
app.get('/', (req, res) => {
    const user = {
        name: 'hila',
        lastname: "zamir"
    }
    res.send(user)
    // res.send("hellooooo")
});
app.listen(3000);