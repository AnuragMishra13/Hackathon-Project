const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const user = require("../models/user");

const postSignup = async (req,res)=>{
    const password = req.body.password;
    const username = req.body.username;
    const email = req.body.email;

    const hashPassword = await bcrypt.hash(password,10);

    const data = {
        username:username,
        email:email,
        password:hashPassword
    }

    await user.insertMany([data]);

    res.render("login");
}

const postLogin = async (req,res)=>{
    try {
        
        const password = req.body.password;
        const check = await user.findOne({email:req.body.email});
        const matchPassword = bcrypt.compare(password , check.password);
        if(matchPassword){
            res.redirect(302,"http://localhost:3000/home");
        }

        else{
            return res.send("Wrong Password");
        }

    } catch (error) {
        console.log(error);
        res.send("Wrong Credential")
    }
}

const getSignup = (req,res)=>{
    res.render("signup")
}

const getLogin = (req,res)=>{
    res.render("login")
}

module.exports = {
    postLogin,postSignup,getLogin,getSignup
}