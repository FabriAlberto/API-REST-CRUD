
import UserModel from "#schemas/user.js";
import {compare} from 'bcrypt'

const userUpdateEmailController = async (req, res) => {

    const { id} = req;
    const {email, password} = req.body;

    const userById = await UserModel.findOne({ id}).exec();

    if (!userById) 
    return  res.status(401).send({errors:['Usuario no autorizado']});

    const checkPassword = await compare(password, userById.password);

    if (!checkPassword) 
    return res.status(401).send({errors:['Credenciales incorrectas']});
   
    userById.email=email;
    await userById.save();

    return res.status(201).send("Actualizacion exitosa (email)")
}  


export default userUpdateEmailController;