const jwt = require("jsonwebtoken")

const authentication = function (req, res, next) {

    try {
        let token = req.headers["x-auth-token"]

        if (!token) return res.status(400).send({ status: false, msg: "Token must be present in the request header" })

        let decodedToken = jwt.verify(token, "This Password is very very Secret")
        if (!decodedToken)
            return res.status(401).send({ status: false, msg: "Token is Invalid" })

        let paramsUserId = req.params.userId
        let userLoggedIn = decodedToken.userId

        if (paramsUserId != userLoggedIn) {
            return res.status(401).send({ msg: "This Token is not allowed for this user ID" })
        }
        next()
    }
    catch (err) {
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

module.exports.authentication = authentication