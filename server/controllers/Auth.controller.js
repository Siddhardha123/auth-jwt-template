import validator from "../validator.js"
import {User} from '../models/User.model.js'
import bcrypt from 'bcrypt'
const authController = async(req,res)=>{
    try{
        const {error} = validator.logvalidate(req.body)
        if(error){
            return res.status(400).send({message : error.details[0].message});

        }
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(401).send({message : "invalid email or password"});
        }
        const validPassword = await bcrypt.compare(
            req.body.password , user.password1
        )
        if(!validPassword){
            return res.status(401).send({message : "inavalid email or password"})
        }
      const token = user.generateAuthToken();
      res.status(200).send({data : token,message : 
    "logged in successfully"})
    }catch(error){
        console.log(error)
        return res.status(500).send({message : 
        "internal server error"})
    }
}

export default authController;