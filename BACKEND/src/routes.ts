import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./Controllers/CreateUserController";
import { ListUsersController } from "./Controllers/ListUsersControllers";
import joi from 'joi';


const schema = joi.object({
    name: joi.string().min(3).max(45).required().messages({
        
    }),
    email: joi.string().email().required(),

})

const UserSchema = {
    body:{
        type: 'object',
        required: ['name','email', 'cpf', 'age', 'password'],
        properties: {
            name: {type: 'string', minLength: 3},
            email: {type: 'string', format: 'email'},
            cpf: {type: 'string', minLength: 11},
            age: {type: 'number'},
            password: {type: 'string', minLength: 5},
        },
    }
}

export const routes = async (fastify:FastifyInstance, options: FastifyPluginOptions) => {
    fastify.post('/create',{
        schema: UserSchema
    }, (request: FastifyRequest, reply: FastifyReply) => {
        const createService = new CreateUserController();
        return createService.CreateUser(request, reply);
    });

    fastify.get('/listUsers', (request: FastifyRequest, reply: FastifyReply) => {
        const listUsers = new ListUsersController();
        return listUsers.ListUsers(request, reply);
    });
}