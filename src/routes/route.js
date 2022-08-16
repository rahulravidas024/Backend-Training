const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const bookController = require('../controllers/bookController')
const customerController = require('../controllers/customerController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBookData", bookController.createBookData )

router.post("/getBookData", bookController.getBookData)

router.post('/createCustomer', customerController.createCustomer)

router.post('/getCustomerData', customerController.getCustomerData)

module.exports = router;