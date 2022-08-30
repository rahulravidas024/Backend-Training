const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

const createUser = async function (req, res) {

  try {
    let data = req.body
    let savedData = await userModel.create(data)
    res.status(201).send({ msg: savedData, status: true })
  }
  catch (err) {
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

const loginUser = async function (req, res) {

  try {
    let email = req.body.email
    let password = req.body.password

    let user = await userModel.findOne({ emailId: email, password: password })
    if (!user)
      return res.status(401).send({ status: false, msg: "email or the password is not corerct" })

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "Plutonium",
      },
      "This Password is very very Secret"
    );
    res.setHeader("x-auth-token", token)
    res.status(201).send({ status: true, token: token })
  }
  catch (err) {
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

const getUserData = async function (req, res) {

  try {
    let userId = req.params.userId
    let userDetails = await userModel.findById(userId)
    if (!userDetails)
      return res.status(400).send({ status: false, msg: "No such user exists" })

    res.status(200).send({ data: userDetails, status: true, })
  }
  catch (err) {
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

const updateUser = async function (req, res) {

  try {
    let userId = req.params.userId
    let user = await userModel.findById(userId)
    if (!user) { return res.status(400).send({ msg: "No such user exists", status: false }) }

    let userData = req.body
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true })
    res.status(200).send({ data: updatedUser, status: true })
  }
  catch (err) {
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

const deleteUser = async function (req, res) {

  try {
    let userId = req.params.userId
    let user = await userModel.findById(userId)
    if (!user) { return res.status(400).send({ msg: "No such user exists", status: false }) }

    let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true })
    res.status(200).send({ data: deletedUser, status: true })
  }
  catch (err) {
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser