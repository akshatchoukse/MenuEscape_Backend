const express = require('express')
const Order = require('../models/Order')
const router = express.Router()


router.post('/order', async(req, res)=>{
    let newOrder = new Order(req.body)
    await newOrder.save()
    res.send("Order Added Successfully!")
})

router.get('/order', async(req, res)=>{
    
    let allOrders = await Order.find()
    res.send(allOrders)
})

router.put('/order/:id', async(req, res)=>{
   await Order.findByIdAndUpdate(req.params.id, req.body)
   res.send("Order Updated SuccessFully")
})

module.exports = router