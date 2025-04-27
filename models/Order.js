const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    name : String,
    number: Number,
    orderedFood : Array,
    table : Number,
    status : {
        default: "Pending",
        type: String
    }
})
module.exports = mongoose.model("Order", OrderSchema)