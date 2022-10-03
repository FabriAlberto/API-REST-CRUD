import { Type } from '@sinclair/typebox';
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import addErrors from 'ajv-errors'
import {nameDTOschema,  surnameDTOschema } from './dto-types.js';

const updateDataSchemaValidator = Type.Object({
    name: nameDTOschema,
    surname: surnameDTOschema,
}, {
    additionalProperties: false,
    errorMessage: {
        additionalProperties: "El formato del objeto no es valido "
    }
});

const ajv = new Ajv({ allErrors: true });

addErrors(ajv)

const validateSchema = ajv.compile(updateDataSchemaValidator);

const userUpdateDataDTO = (req, res, next) => {

    const isValid = validateSchema(req.body);

    if (!isValid) return res.status(400).send({ errors: validateSchema.errors.map((error) => error.message) });

    next();
}


export default userUpdateDataDTO;