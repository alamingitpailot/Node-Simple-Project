

const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    // res.send('Hi i am alamin');
});

// body parser
app.post("/register", (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    res.send(`your first Name ${fullName} and Email ${email}`);
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})