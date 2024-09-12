//Importando fastify_
import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

//Importando os controladores_
import { CreateUserController } from "./Controllers/CreateUserController";
import { ListUsersController } from "./Controllers/ListUsersControllers";
import { DeleteUserController } from "./Controllers/DeleteUserController";
import { UpdateUserController } from "./Controllers/UpdateUserController";

//Validação usando a propriedade Joi_
import schema from "../Validate/ValidateCreate";
import schemaUpdate from "../Validate/ValidateUpdate";

export const routes = async (fastify:FastifyInstance, options: FastifyPluginOptions) => {
    //Rota para criar um usuário_
    fastify.post('/create',(request: FastifyRequest, reply: FastifyReply) => {
        const {error} = schema.validate(request.body);
        if(error) return reply.status(400).send({error: error.details[0].message});
        
        const createService = new CreateUserController();
        return createService.CreateUser(request, reply);
    });

    //Rota para Listar os usuários_
    fastify.get('/listUsers', (request: FastifyRequest, reply: FastifyReply) => {
        const listUsers = new ListUsersController();
        return listUsers.ListUsers(request, reply);
    });

    //Rota para deletar um usuário específico_
    fastify.delete('/api/:id/delete/',(request:FastifyRequest, reply:FastifyReply) => {
        const DeleteUser = new DeleteUserController();
        return DeleteUser.DeleteUser(request, reply);
    });

    //Rota para atualizar um usuário específico_
    fastify.put('/api/:id/update/',(request:FastifyRequest, reply:FastifyReply) => {
        const {error} = schemaUpdate.validate(request.body);
        if(error) return reply.status(400).send({error: error.details[0].message});
        
        const update = new UpdateUserController();
        return update.Update(request,reply);
    });
}