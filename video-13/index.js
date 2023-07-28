

// const app = require('./app');
// const Port = 3000;

// app.listen(Port, () => {
//     console.log(`Your Local server http://localhost/${Port}`);
// })

const app = require('./app')
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Surver is runing http://localhost:${PORT}`);
})