
import UserModel from "#schemas/user.js";
import { compare } from 'bcrypt';
import {SignJWT} from 'jose'

const userUpdateDataController = async (req, res) => {

    const { id} = req;
    const {name,surname } = req.body;
    const userById = await UserModel.findOne({ id }).exec();

    if (!userById) 
    return  res.status(401).send({errors:['Usuario no autorizado']});
   
    
    userById.name=name;
    userById.surname=surname;
    await userById.save();

    return res.status(201).send("Actualizacion exitosa")
}  


export default userUpdateDataController;