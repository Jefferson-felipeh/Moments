import Joi from 'joi';

export const schema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
        'string.empty': 'Field Name needs a value!',
        'string.min': 'Field Name need slong 3 caracter1',
        'string.max': 'Field Name must be at most 100 characters long!',
        'any.required': 'Field Name is Required!'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Field Email must a be email valid address!',
        'string.empty': 'Field Email needs a value!',
        'string.required': 'Field Email is requered!'
    }),
    cpf: Joi.string().required().messages({
        'string.pattern.base': 'O CPF deve estar no formato 000.000.000-00',
        'string.empty': 'O CPF é obrigatório'
    }),
    age: Joi.string().min(2).max(3).required().messages({
        'number.min': 'Field Age must be at least 18.',
        'number.max': 'Field Age must be at most 100.',
        'any.required': 'Field Age is required!'
    }),
    phone: Joi.string().pattern(/^\d{10,11}$/).required().messages({
        'string.pattern.base': 'Field Phone must be 10 or 11 digits.',
        'string.empty': 'Field Phone needs a value!',
        'any.required': 'Field Phone is required!'
    }),
    cep: Joi.string().pattern(/^\d{5}-\d{3}$/).required().messages({
        'string.pattern.base': 'Field CEP must follow the format XXXXX-XXX.',
        'string.empty': 'Field CEP needs a value!',
        'any.required': 'Field CEP is required!'
    }),
    password: Joi.string().min(4).max(10).required().messages({
        'string.min': 'Field Password must be at least 4 characters long.',
        'string.max': 'Field Password must be at most 10 characters long.',
        'string.empty': 'Field Password needs a value!',
        'any.required': 'Field Password is required!'
    }),
    uf: Joi.string().length(2),
    city: Joi.string(),
    rua:Joi.string(),
    num:Joi?.string(),
    confirmPassword: Joi.string().min(4).max(10).required().messages({
        'string.min': 'Field Password must be at least 4 characters long.',
        'string.max': 'Field Password must be at most 10 characters long.',
        'string.empty': 'Field Password needs a value!',
        'any.required': 'Field Password is required!'
    }),
});