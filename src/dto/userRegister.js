import { Type } from '@sinclair/typebox';
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import addErrors from 'ajv-errors'
import { emailDTOschema, idDTOschema, nameDTOschema, passwordDTOschema, surnameDTOschema } from './dto-types.js';
const registerSchemaValidator = Type.Object({
    _id: idDTOschema,
    name:nameDTOschema,
    surname: surnameDTOschema,
    email: emailDTOschema,
    password: passwordDTOschema

},{additionalProperties:false,
    errorMessage:{
     additionalProperties:"El formato del objeto no es valido "
    }
 });

const ajv = new Ajv({allErrors:true});

ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addFormats(ajv,["email","uuid"]);
addErrors(ajv)
const validateSchema=ajv.compile(registerSchemaValidator);

const userRegisterDTO=(req,res,next)=>{

 const isValid=validateSchema(req.body);

 if(!isValid)return res.status(400).send({errors:validateSchema.errors.map((error)=>error.message)});

 next();
}


export default userRegisterDTO;