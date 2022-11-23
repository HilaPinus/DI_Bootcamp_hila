    const express = require('express');
const app = express();

app.use(express.static('public'));

app.post('/', (req, res) => {
})

app.listen(3000, () => console.log('Example app listening on port 3001!'));