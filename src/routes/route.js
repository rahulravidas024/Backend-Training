const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const bookController = require('../controllers/bookController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBookData", bookController.createBookData )

router.post("/getBookData", bookController.getBookData)

module.exports = router;