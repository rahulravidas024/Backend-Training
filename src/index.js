const express = require('express')
const route = require('./routes/route.js')
const app = express()
const multer= require("multer");

const { AppConfig } = require('aws-sdk');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use( multer().any())

app.use('/', route)

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running on Port " + (process.env.PORT || 3000))
})