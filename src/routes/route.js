const express = require('express')
const router = express.Router()
const awsController = require("../controllers/awsController")

router.get('/test', function(req, res){
    return res.send({status: true, msg: "running"})
})

// AWS API-------------------------------------------------------------------------------------

router.post("/write-file-aws", awsController.awsUploadFile)


module.exports = router