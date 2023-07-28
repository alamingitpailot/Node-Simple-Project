

const express = require("express");
const router = express.Router();

router.get('/register', (req, res) => {
    res.send("<h1>This Register Page</h1>");
})

router.get('/login', (req, res) => {
    res.send("<h1>Login Page</h1>")
})

module.exports = router;