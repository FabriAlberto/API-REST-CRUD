import { Type } from '@sinclair/typebox';

export const idDTOschema=Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'El tipo deberia ser un string',
        format: 'el formato de id no es valido deberia ser uuidv4'
    }
});
export const nameDTOschema=Type.String({
    minLength:2,
    maxLength:20,
    errorMessage: {
        type:'El tipo de name no es valido',
        minLength:'name almenos debe tener 2 caracteres de longitud',
        maxLength:'name puede tener hasta 20 caracteres de longitud',
    }
});
export const surnameDTOschema=Type.String({
    minLength:4,
    maxLength:50,
    errorMessage: {
        minLength:'surname almenos debe tener 4 caracteres de longitud',
        maxLength:'surname puede tener hasta 50 caracteres de longitud',
    }
})
export const emailDTOschema=Type.String({
    format:'email',
    errorMessage: {
        type: 'El tipo del email no es valido',
        format: 'El formato del email no es valido , debe cumplir RFC5322'
    }
})
export const passwordDTOschema=Type.String({
    format:'password',
    minLength:10,
    maxLength:25,
    errorMessage: {
        type:'el tipo de password no es valido',
        format:' password debe contener una mayuscula, una minúscula y un numero',
        minLength:'password tiene que tener como minimo 10 caracteres',
        maxLength:'password puede  tener como maximo 25 caracteres',
        
    }
})