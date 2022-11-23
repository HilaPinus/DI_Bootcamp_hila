
// Exercise 1 : Reading From A File In Node.JS
// Create a text file and write something inside (example: ‘Some Text To See’)
// Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal

const fs = require('fs');

fs.readFile('./textFile.txt', (err, data) => {
    if(err) {
        console.log('error');
    }
    console.log(data.toString());
})

// Exercise 2 : Writing Files With Node JS
// Create an fs.js file, and use the Node js File System to create a new text file and write to it.
fs.appendFile('./data.txt', 'bla bla', err => {
    if (err) {
        console.log('err');
    }
})

//Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)
fs.appendFile('./textFile.txt', 'some more text to text file', err => {
    if (err) {
        console.log('err');
    }
})

// Use the Node js File System to delete the file.
fs.unlink('./data.txt', err => {
    if(err) {
        console.log(err);
    }
})

