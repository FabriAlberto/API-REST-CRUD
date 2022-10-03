
import UserModel from "#schemas/user.js";
import {compare,hash} from 'bcrypt'

const  userUpdatePasswordController = async (req, res) => {

    const { id} = req;
    const {oldPassword,newPassword} = req.body;

    const userById = await UserModel.findOne({ id}).exec();

    if (!userById) 
    return  res.status(401).send({errors:['Usuario no autorizado']});

    const checkPassword = await compare(oldPassword, userById.password);

    if (!checkPassword) 
    return res.status(401).send({errors:['Credenciales incorrectas']});
      
    const hashedPassword= await hash( newPassword,12); 

    userById.password=hashedPassword;

    await userById.save();

    return res.status(201).send("Contraseña del usuario actualizada")
}  


export default  userUpdatePasswordController;