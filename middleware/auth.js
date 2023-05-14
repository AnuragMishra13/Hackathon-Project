const jwt = require("jsonwebtoken")
require("dotenv").config();
const user = require("../models/user");


const auth = async (req,res,next)=>{
    try {
        const token = req.cookies.token;
        const verifyUser = jwt.verify(token,process.env.SECRETKEY)
        const existingUser = await user.findOne({_id:verifyUser._id});
        next();
    } catch (error) {
        res.send('token not found')
    }
}

module.exports = auth ;