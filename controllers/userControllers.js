const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getLogin = (req,res)=>{
  res.redirect("http://localhost:3000/home");
}

const getSignup = (req,res)=>{
  res.redirect("http://localhost:3000/home");
}


const postSignup = async (req,res)=>{
    try {
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
        if(password === confirmpassword){
            const hashPassword = await bcrypt.hash(password,10);
            const UserRegister = new user({
                username:req.body.username,
                email:req.body.email,
                password:hashPassword
            })
            const token = UserRegister.generateAuthtoken();
            res.cookie("jwt",token,{
              expires:new Date(Date.now()+600000),
              httpOnly:true
            })
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
        const matchPassword = bcrypt.compareSync(password, check.password);
        console.log(matchPassword)
        if (matchPassword) {
          const token = jwt.sign({_id:check._id.toString()},process.env.SECRETKEY)
          console.log(token)
          res.cookie("jwt",token,{
            expires:new Date(Date.now()+600000),
            httpOnly:true
          })
          res.redirect(`http://localhost:3000/home/${check._id}`);
        } else {
          res.send("Invalid");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
      }
}

module.exports = {
    postLogin,postSignup,getLogin,getSignup
}