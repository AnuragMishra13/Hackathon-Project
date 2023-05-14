const jwt = require("jsonwebtoken")
require("dotenv").config();


const auth = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.sign(token,process.env.SECRETKEY)
        console.log(verifyUser);
        next();
    } catch (error) {
        console.log(error)
        res.status(500).send("Error occur")
    }
}

module.exports = auth ;