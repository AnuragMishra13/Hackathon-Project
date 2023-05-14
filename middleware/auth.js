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
        res.send('alert("Token not found") ; window.location.href = "/home";')
        res.redirect("http://localhost:3000/home") 
    }
}

module.exports = auth ;