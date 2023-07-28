

const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// body parser  
app.post('/user', (req, res) => {
    const name = req.body.name;
    const fatherName = req.body.fatherName;
    res.send(`Welcome --- ${name} Father Name -- ${fatherName}`);
});

// Header Parameter 
// app.get('/', (req, res) => {
//     const { id, name } = req.headers;
//     res.send(`Student Id-${id} and Student Name-${name}`);
// });

// Route Parameter 
// app.get('/id/:id/name/:name/', (req, res) => {
//     const { id, name } = req.params;
//     res.send(`Student Id-${id} and Student Name-${name}`);

// });

//  Query parameter
// app.get('/', (req, res) => {
//     http://localhost:3000/?id=20&name=alamin&age=23
//     const { id, name, age } = req.query;
//     res.send(`Student ID=${id}Name=${name} Age=${age}`);
// });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})