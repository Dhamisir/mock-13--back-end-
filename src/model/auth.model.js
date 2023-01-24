const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"]
    }
})

const authModel = mongoose.model("auth", authSchema)

module.exports = authModel