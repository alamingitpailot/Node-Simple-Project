

const express = require("express");
const app = express();


const PORT = 3000;

const MiddleWare = (req, res, next) => {
    console.log("Middle ware is open");

    req.currentTime = new Date(Date.now());

    next();
}

app.get('/', MiddleWare, (req, res) => {
    console.log("I am home" + req.currentTime);
    res.send('Hi I am home router');
});

app.listen(PORT, () => {
    console.log(`Sever is runing http://localhost:${PORT}`);
})