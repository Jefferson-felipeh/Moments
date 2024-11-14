import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { ListUserController } from "./controllers/ListUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { UpdateUserController } from "./controllers/UpdateuserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import {schema} from './validated/schema';
import { LoginUserController } from "./controllers/LoginController";

export const routes = async (fastify:FastifyInstance,options:FastifyPluginOptions) => {
    fastify.get('/listUsers', async (request:FastifyRequest,reply:FastifyReply) => {
        const listUsers = new ListUserController();
        return listUsers.ListUser(request,reply);
    });

    fastify.post('/createUser', async (request:FastifyRequest, reply:FastifyReply) =>{
        const {error} = schema.validate(request.body);
        if(error) return reply.status(400).send({error: error.details[0].message});
        try{
            const createUser = new CreateUserController();
            return (await createUser.CreateUser(request,reply));
        }catch(err){
            return reply.status(400).send({err: 'Inconsistencia ao cadastrar Usuário!'});
        }
    });

    fastify.put('/api/:id/update/',(request:FastifyRequest, reply:FastifyReply) => {
        const {error} = schema.validate(request.body);
        if(error) return reply.status(400).send({error:error.details[0].message});

        try{
            const updateUser = new UpdateUserController();
            return updateUser.UpdatedUser(request,reply);
        }catch(err){
            return reply.status(400).send({err: 'Inconsistemcia ao Atualizar usuário!'});
        } 
    });

    fastify.delete('/api/:id/delete/',(request:FastifyRequest,reply:FastifyReply) => {
        const deleteUser = new DeleteUserController();
        return deleteUser.DeleteUser(request,reply);
    });

    //Rota responsável por receber as requisições de Login_
    fastify.post('/loginUser/',(request:FastifyRequest,reply:FastifyReply) =>{
        const loginController = new LoginUserController();
        return loginController.loginUser(request,reply);
    });
}