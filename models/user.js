const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
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