const User = require("../db/index")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const uname = req.body.username;
    const pwd = req.body.password;

    try{
        const user = await User.findOne({username:uname, password: pwd})

        if(!user){
            res.json({
                msg: "user not found."
            })
        }
        else{
            const token = jwt.sign({username:uname, password: pwd},secret)
            res.json({
                msg: `Bearer ${token}`
            })
        }
    }
    catch(err){
        res.json({
            msg: err
        })
    }
}

module.exports = userMiddleware;