const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const postSignup = async (req,res)=>{
    try {
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
        if(password === confirmpassword){
            const hashPassword = await bcrypt.hash(password,10);
            const UserRegister = new user({
                username:req.body.username,
                email:req.body.email,
                password:hashPassword,
                token:token
            })
            UserRegister.generateAuthtoken();
            await UserRegister.save();
            console.log(UserRegister)
            return res.redirect("http://localhost:3000/home")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
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