//Dependencies
const express = require("express");
const app = express()
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser");
const fs = require("fs");

//Controllers , Schema and Database functions
const {postEditor,getEditor} = require("../controllers/editorControllers");
const { postSignup, postLogin , getLogin , getSignup} = require("../controllers/userControllers");
const {homeId , home} = require("../controllers/homeControllers");
const User = require("../models/user");
const connectDB = require("../db/connect");

//Middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")))
const auth = require("../middleware/auth");

//Template Engine
app.set("view engine", "ejs");

//Routes
app.get("/home",home)
app.get("/home/:_id",auth ,homeId)
app.route("/login").get(getLogin).post(postLogin);
app.route("/signup").get(getSignup).post(postSignup);
app.route("/editor").get(auth,getEditor).post(postEditor);

//DataBase connect
connectDB();

//Start Server
app.listen(3000, () => {
    console.log(`Listening at port 3000`);
  });