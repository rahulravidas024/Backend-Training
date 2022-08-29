const jwt = require("jsonwebtoken")

const auth = function (req, res, next) {

    let token = req.headers["x-Auth-token"]
    if (!token) token = req.headers["x-auth-token"]

    if (!token) return res.send({ status: false, msg: "Token must be present in the request header" })

    let decodedToken = jwt.verify(token, "This Password is very very Secret")
    if (!decodedToken)
        return res.send({ status: false, msg: "Token is Invalid" })

    let paramsUserId = req.params.userId
    let userLoggedIn = decodedToken.userId

    if (paramsUserId != userLoggedIn) {
        return res.send({ msg: "This Token is not allowed for this user ID" })
    }

    next()
}

module.exports.auth = auth