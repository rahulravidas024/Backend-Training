const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

const createUser = async function (req, res) {
  let data = req.body
  let savedData = await userModel.create(data)
  res.send({ msg: savedData, status: true })
}

const loginUser = async function (req, res) {
  let email = req.body.email
  let password = req.body.password

  let user = await userModel.findOne({ emailId: email, password: password })
  if (!user)
    return res.send({ status: false, msg: "email or the password is not corerct" })

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Plutonium",
    },
    "This Password is very very Secret"
  );
  res.setHeader("x-auth-token", token)
  res.send({ status: true, token: token })
}

const getUserData = async function (req, res) {

  let userId = req.params.userId
  let userDetails = await userModel.findById(userId)
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" })

  res.send({ data: userDetails, status: true, })
}

const updateUser = async function (req, res) {

  let userId = req.params.userId
  let user = await userModel.findById(userId)
  if (!user) { return res.send({ msg: "No such user exists", status: false }) }

  let userData = req.body
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true })
  res.send({ data: updatedUser, status: true })
}

const deleteUser = async function (req, res) {

  let userId = req.params.userId
  let user = await userModel.findById(userId)
  if (!user) { return res.send({ msg: "No such user exists", status: false }) }

  let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true }}, { new: true })
  res.send({ data: deletedUser, status: true })
}

module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser