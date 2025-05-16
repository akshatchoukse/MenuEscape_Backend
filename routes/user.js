const express = require('express')
const User = require('../models/User')
const router = express.Router()


router.post('/user', async(req, res)=>{
    let newUser = new User(req.body)
    await newUser.save()
    res.send("User Added Successfully!")
})

router.get('/user', async(req, res)=>{
    let allUsers = await User.find()
    res.send(allUsers)
})

module.exports = router