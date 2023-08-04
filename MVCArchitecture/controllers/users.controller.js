
const users = require('../models/users.models');
const path = require("path");

exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
}

exports.saveUsers = (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const user = { name, age };
    users.module.push(user);
    res.status(201).json({
        message: true,
        users: users.module
    })
}

