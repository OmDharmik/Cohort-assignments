// Middleware for handling auth
const Admin = require("../db/index")
const secret = require("../routes/admin")
const jwt = require('jsonwebtoken')
const JWTsecret = "sEcret";


async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secret)
    if(decoded.username){
        next();
    }
    else{
        res.json({
            msg: "Unauthorized."
        })
    }
}

module.exports = adminMiddleware;