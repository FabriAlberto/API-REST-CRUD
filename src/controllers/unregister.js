
import UserModel from "#schemas/user.js";
import {compare} from 'bcrypt'

const userUnregisterController= async (req, res) => {

    const { id} = req;
    const {password} = req.body;

    const userById = await UserModel.findOne({ id}).exec();

    if (!userById) 
    return  res.status(401).send({errors:['Usuario no autorizado']});

    const checkPassword = await compare(password, userById.password);

    if (!checkPassword) 
    return res.status(401).send({errors:['Credenciales incorrectas']});
   
    await userById.delete();
   

    return res.status(201).send("Usuario eliminado")
}  


export default userUnregisterController;