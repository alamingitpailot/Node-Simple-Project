const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("This is home page");
    res.end();
});

app.post("/", (req, res) => {
    res.send("Post request Send");
    res.end();
});

app.put("/", (req, res) => {
    res.send("put request send");
    res.end();
})

app.delete("/", (req, res) => {
    res.send("Delete request send");
    res.end();
})

module.exports = app;