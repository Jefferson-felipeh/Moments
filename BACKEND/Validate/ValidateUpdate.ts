import Joi from "joi";

const schemaUpdate = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({

    }),
    email: Joi.string().email().required().messages({

    }),
    cpf: Joi.string().pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/).required().messages({

    }),
    age: Joi.number().integer().min(18).max(100).required().messages({

    }),
    password: Joi.string().min(3).max(10).required().messages({

    })
});

export default schemaUpdate;