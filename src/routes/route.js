const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const bookControllerAssignment = require('../controllers/bookControllerAssignment')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)
//__________________________________________________________________________

router.post("/createBookData", bookControllerAssignment.createBookData)
router.post('/getBookDetails', bookControllerAssignment.getBookDetails)
router.post('/bookList', bookControllerAssignment.bookList)
router.post('/getBooksInYear', bookControllerAssignment.getBooksInYear)
router.post('/getParticularBooks', bookControllerAssignment.getParticularBooks)
router.post('/getXINRBooks', bookControllerAssignment.getXINRBooks)
router.post('/getRandomBooks', bookControllerAssignment.getRandomBooks)

module.exports = router;