const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
    },
    token:{
        type:String,
        required:true
    }
}, {timestamps : true });

UserSchema.methods.generateAuthtoken = async function(){
    try {
        const Uniquetoken = await jwt.sign({_id:this._id.toString()},process.env.SECRETKEY)
        this.tokens = this.tokens.concat({token:Uniquetoken});
        await this.save()
        return Uniquetoken;    
    } catch (error) {
        res.status(500).send(error);
    }
}

const user = mongoose.model("User",UserSchema);

module.exports = user;