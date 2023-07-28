

const express = require('express');
const router = express.Router();


router.get("/list", (req, res) => {
    res.send("<h1>Teacher List</h1>");
})

module.exports = router
