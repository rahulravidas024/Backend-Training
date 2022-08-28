const express = require('express')
const router = express.Router()
const userController= require("../controllers/userController")
const authMiddleware = require('../middleware/auth')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId", authMiddleware.auth, userController.getUserData)

router.put("/users/:userId", authMiddleware.auth, userController.updateUser)

router.delete("/users/:userId", authMiddleware.auth, userController.deleteUser)

module.exports = router