
require("dotenv").config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello I am home root");
})

app.listen(PORT, () => {
    console.log(`Sever is runing http://localhost:${PORT}`);
});
