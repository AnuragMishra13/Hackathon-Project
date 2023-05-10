const express = require("express");
const app = express()
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const User = require("../models/user")
const {postSignup,postLogin} = require("../controllers/userControllers");

const PORT = process.env.PORT || 3000; 

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"../public")))
app.set("view engine","ejs");

app.get("/home",(req,res)=>{
    res.render("index")
})
app.post("/login",postLogin);
app.post("/signup",postSignup);
app.get("/editor",(req,res)=>{
    res.render("editor");
})

app.get("/userpage",(req,res)=>{
    res.render('userpage',)
})

app.get("/home/:_id",async (req,res)=>{
    try {
       const userDetails = await User.findOne(req.params)

    } catch (error) {
        console.log(error)
    }
})


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Listening at port ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error)
})
