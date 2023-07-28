const fs = require('fs');

// Write file
fs.writeFile('test.txt', 'Hi i am alamin', (error) => {
    if (error) {
        console.log("Wrong");
    } else {
        console.log("success");
    }
})

// Another content added
fs.appendFile('test.txt', 'I am 23 years old', (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("success");
    }
})

// File content read
fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})

// FIle Rename
fs.rename('test.txt', 'test1.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("success");
    }
})

// Delete File 
fs.unlink('test1.txt', (error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("success");
    }
})