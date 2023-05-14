const express = require("express");
const app = express()
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser");
const User = require("../models/user");
const auth = require("../middleware/auth");
const fs = require("fs");

const { postSignup, postLogin , getLogin , getSignup} = require("../controllers/userControllers");

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")))
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
    res.render("index")
})

app.route("/login").get(getLogin).post(postLogin);
app.route("/signup").get(getSignup).post(postSignup);

app.get("/editor", auth, async (req, res) => {
 const token = req.cookies.token;
 const verifyUser = jwt.verify(token,process.env.SECRETKEY);
 const existingUser = await User.findOne({_id:verifyUser._id});
 res.render("editor",{username:existingUser.username});
})

app.post("/editor",async(req,res)=>{
    const data = req.body.data;
    fs.writeFileSync('text.html',data.toString())
    res.status(200).send("ok");
})

app.get("/home/:_id",auth ,async (req, res) => {
    try {
        const userDetails = await User.findOne(req.params)
        res.render('userpage',{username:userDetails.username,email:userDetails.email})
    } catch (error) {
        console.log(error)
    }
})

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening at port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
    })
