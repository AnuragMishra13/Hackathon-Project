const fs = require("fs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const mongoose = require("mongoose");


const postEditor = async(req,res)=>{
    const data = req.body.data;
    fs.writeFileSync('../public/text.html',data.toString())
    fs.writeFileSync('../public/text.txt',data.toString())
    res.status(200).send("Saved");
}

const getEditor = async(req,res)=>{
    const token = req.cookies.token;
    const verifyUser = jwt.verify(token,process.env.SECRETKEY);
    const existingUser = await User.findOne({_id:verifyUser._id});
    res.render("editor",{username:existingUser.username});
}

module.exports = {postEditor,getEditor}