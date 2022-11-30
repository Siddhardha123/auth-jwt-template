import {User} from '../models/User.model.js';
import validator from '../validator.js';
import bcrypt from 'bcrypt'
const userController = async (req,res) =>{
     try{
         const {error} = validator.Regvalidate(req.body)
         if(error){
            return res.status(400).send({message : error.details[0].message});
         } 
         const user = await User.findOne({email:req.body.email});
         if(user){
             return res.status(409).send({message : "email already exists"})
         }
         if(req.body.password1 != req.body.password2){
             return es.status(409).send({message : "passwords doesnt match"})
         }


        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password1,salt);
        await new User({...req.body,password1 : hashPassword}).save();

        res.status(201).send({message : "User created successfully"})

     }catch(error){
       res.status(500).send({message : "internal server error"})
     }
}




export default userController;