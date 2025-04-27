const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : String,
    number: Number,
    table : Number
})
module.exports = mongoose.model("User", UserSchema)