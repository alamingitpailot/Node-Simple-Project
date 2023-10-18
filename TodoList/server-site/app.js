
const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todoRouter = require('./Routes/todo.route');
app.use("/api/todo", todoRouter);

require("./config/db");
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/./views/index.html')
});

app.use((req, res, next) => {
    res.status(400).json({
        message: "Router Not Found"
    })
});

app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something is broken"
    })
})

module.exports = app;