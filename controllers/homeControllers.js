const mongoose = require("mongoose");
const User = require("../models/user");

const homeId = async (req, res) => {
    try {
        const userDetails = await User.findOne(req.params)
        res.render('userpage',{username:userDetails.username,email:userDetails.email})
    } catch (error) {
        console.log(error)
    }
}

const home = (req,res)=>{
    res.render('index')
}





module.exports = {homeId , home}