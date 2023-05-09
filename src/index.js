const express = require("express");
const app = express()
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
// const usersRoutes = require("../routes/userRoutes");
const {postSignup,postLogin} = require("../controllers/userControllers");

const PORT = process.env.PORT || 3000; 

// app.use('/users',usersRoutes)
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"../public")))

app.set("view engine","ejs");

app.get("/home",(req,res)=>{
    res.render("index")
})
app.post("/login",postLogin);
app.post("/signup#",postSignup);
app.get("/editor",(req,res)=>{
    res.render("editor");
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
