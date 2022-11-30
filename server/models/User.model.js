import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const userSchema =  new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    phone : {type : String, required : true},
    password1 : {type : String, required : true},
    password2 : {type : String, required : true},
})

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

export const User = mongoose.model("user",userSchema);


