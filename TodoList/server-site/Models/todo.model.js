

const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const userSchema = mongoose.Schema({
    id: {
        type: String,
        default: uuidv4

    },
    title: {
        type: String,
        reuire: true
    },
    createOn: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String
    }

})
module.exports = mongoose.model("Todo", userSchema)