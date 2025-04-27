const mongoose = require("mongoose")

const connectDB = ()=>{
    mongoose.connect("mongodb+srv://akshatchoukse:Akshat12345!@cluster0.4uuqq.mongodb.net/menuescape").then(()=>{
        console.log("mongoDb connected successfully");        
    })
}
module.exports = connectDB