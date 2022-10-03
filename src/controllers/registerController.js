import UserModel from "#schemas/user.js";
import mongoose from "mongoose";
import {hash} from 'bcrypt'

const userRegisterControllers=async(req,res)=>{
     const {_id,name,surname,email,password} = req.body;
     
     const userById=await UserModel.findById(_id).exec();
     if(userById) return res.status(409).send({errors:[' Ya existe un user con ese id registrado']})

     const userByEmail=await UserModel.findOne({email}).exec();
     if(userByEmail) return res.status(409).send({errors:['Ya existe un user con ese email registrado']});
     
     const hashedPassword= await hash( password,12);

     const newUser =new UserModel({
        _id,name,surname,email,password:hashedPassword
     })

    await newUser.save();
    return res.status(201).send('Usuario registrado con exito')
}


export default userRegisterControllers;