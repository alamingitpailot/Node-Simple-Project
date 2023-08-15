
const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        name: "Al-Amin",
        email: "alamincmt7418@gmail.com"
    },
    {
        id: uuidv4(),
        name: "Momin",
        email: "momin@gmail.com"
    }
]

module.exports = users;