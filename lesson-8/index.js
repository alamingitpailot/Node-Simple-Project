const app = require('./app')
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Surver is runing http://localhost:${PORT}`);
})