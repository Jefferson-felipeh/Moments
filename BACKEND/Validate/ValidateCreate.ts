import Joi from "joi";

const schema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
        'string.empty': 'Nome não pode estar vazio!',
        'string.min': 'Nome precisa ser no mínimo maior que 3 caracteres!',
        'any.required': 'Nome obrigatório!',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Precisa ser um email válido!',
        'any.required': 'O email é obrigatório!',
    }),
    cpf: Joi.string().pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/).required().messages({
        'string.pattern.base': 'O campo CPF preciso seguir essa regra: 000.000.000-00!',
        'any.required': 'CFP é obrigatório!',
    }),
    age: Joi.number().min(18).max(100).required().messages({
        'string.base': 'Campo Age precisa ser um Número!',
        'string.min': 'Campo Age precisa ser no minimo 18 anos!',
        'string.max': 'Campo Age precisa ser menor que 100 anos!',
        'any.required': 'Campo Age é obrigatório!'
    }),
    password: Joi.string().min(6).max(10).required().messages({
        'string.min': 'Campo Password precisa ter no mínimo 6 caracteres!',
        'string.max': 'Campo senha pode ter apenas 10 caracteres!',
        'any.required': 'Campo senha obrigatório!',
    }),
});

export default schema;