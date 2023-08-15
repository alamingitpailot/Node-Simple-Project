

const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const app = express();

const users = require("./Models/users.model");
const userRouters = require("./Routes/users.route");

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(cors());

app.use("/users", userRouters);

// Home Route 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// wrong route request 
app.use((req, res, next) => {
    res.status(400).json({
        message: "route not found"
    })
});

// broken the site 
app.use((req, res, next) => {
    res.status(500).json({
        message: "Something broken"
    });
});

module.exports = app;