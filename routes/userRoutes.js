const express = require("express")
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const user = require("../models/user");
const router = express.Router();
const {postLogin,postSignup,getLogin,getSignup} = require("../controllers/userControllers")
router.use(express.json());
router.use(express.urlencoded({extended:false}));

router.route("/login").get(getLogin).post(postLogin);
router.route("/signup").get(getSignup).post(postSignup);

module.exports = router ;