
import UserModel from "#schemas/user.js";
import { compare } from 'bcrypt';
import {SignJWT} from 'jose'

const userProfileControllers = async (req, res) => {

    const { id} = req;

    const userById = await UserModel.findOne({ id }).exec();

    if (!userById) 
    return  res.status(401).send({errors:['Usuario no autorizado']});
   
    
    const {_id,name,surname,email}=userById;

    return res.send({_id,name,surname,email})
}  


export default userProfileControllers;