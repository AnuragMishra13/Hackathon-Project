const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const postSignup = async (req,res)=>{
    const password = req.body.password;
    const username = req.body.username;
    const email = req.body.email;
    const token = await jwt.sign(email,process.env.SECRETKEY);

    const hashPassword = await bcrypt.hash(password,10);

    const data = {
        username:username,
        email:email,
        password:hashPassword,
        token:token
    }

    await user.insertMany([data]);
}

const postLogin = async (req,res)=>{
    try {
        const password = req.body.password;
        const check = await user.findOne({email:req.body.email});
        const matchPassword = bcrypt.compare(password , check.password)
        if(matchPassword){
            return res.redirect("http://localhost:3000/home");
        }
        res.send("Invalid password");

    } catch (error) {
        console.log(error);
        res.send("Wrong Credential")
    }
}

module.exports = {
    postLogin,postSignup
}