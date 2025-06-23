const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const vendorRoutes = require('./routes/vendorRoutes')
const firmRoutes = require('./routes/firmRoutes')
const productRoutes = require('./routes/productRoutes')
const path = require('path')

const app = express()

dotEnv.config()
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDB is connected successfully')
})
.catch((error)=>{
    console.log("Error",error)
})
app.use(bodyParser.json())
app.use(express.json())
app.use('/vendor',vendorRoutes)
app.use('/firm',firmRoutes)
app.use('/product',productRoutes)
app.use('/uploads', express.static('uploads'))

app.listen(4000,(req,res)=>{
    console.log("Server created and running successfully at 4000")
})

app.use('/home',(req,res)=>{
    res.send('<h1>Welcome to Home Savora')
})