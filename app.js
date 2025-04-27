const express = require("express")
const cors = require("cors")
const app = express()
const connectdb = require("./db")

connectdb()
app.use(express.json())
app.use(cors())
app.use('/api', require('./routes/user'))
app.use('/api', require('./routes/order'))


app.listen(5000, (req,res)=>{
   console.log("the port is running on locahost :5000");
   
})
