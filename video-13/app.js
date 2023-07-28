const express = require('express');
const app = express();

const useRouter = require('./routes/users.route');
const teacherRouter = require('./routes/techer.route');

app.use("/api/user", useRouter);
app.use("/api/teacher", teacherRouter);

app.use('/register', (req, res) => {

    res.statusCode = 200;
    res.sendFile(__dirname + "/views/register.html")

    // res.status(200).json({
    //     "message": "Hi i am register page",
    //     "status": 200
    // })

    // res.redirect('/login')
});

app.use('/login', (req, res) => {
    // res.cookie('name', 'alamin');
    // res.cookie('age', 23);
    res.clearCookie('name');
    res.append("id", "13000");
    res.end();
})

app.use('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res) => {
    res.send("<h1>404 !!! Not a Valid Url</h1>")
})

module.exports = app;