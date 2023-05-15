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
const {postEditor,getEditor} = require("../controllers/editorControllers");
const { postSignup, postLogin , getLogin , getSignup} = require("../controllers/userControllers");
const {homeId , home} = require("../controllers/homeControllers");

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")))
app.set("view engine", "ejs");

app.get("/home",home)
app.get("/home/:_id",auth ,homeId)

app.route("/login").get(getLogin).post(postLogin);
app.route("/signup").get(getSignup).post(postSignup);
app.route("/editor").get(auth,getEditor).post(postEditor);


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening at port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
    })
