const jwt = require("jsonwebtoken")

const auth = function (req, res, next) {

    let token = req.headers["x-Auth-token"]
    if (!token) token = req.headers["x-auth-token"]

    if (!token) return res.send({ status: false, msg: "Token must be present" })

    let decodedToken = jwt.verify(token, "This Password is very very Secret")
    if (!decodedToken)
        return res.send({ status: false, msg: "Token is Invalid" })
        next()
}

module.exports.auth = auth