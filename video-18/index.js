

const express = require('express');
const app = express();
const PORT = 30001;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/register', (req, res) => {
    res.sendFile(__dirname, '/index.html');
});

// body parser
// app.post('/register', (req, res) => {
//     res.send("Hi i am alamin");
// });


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})