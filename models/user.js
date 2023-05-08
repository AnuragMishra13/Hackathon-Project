const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

    name:{
        type: String,
        trim:true,
        required:true 
    },
    surname:{
        type: String,
        trim:true,
        required:true
    },
    username:{
        type: String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    }
}, {timestamps : true });

const user = mongoose.model("User",UserSchema);

module.exports = user;