import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserController{
    DeleteUser = async (request:FastifyRequest,reply:FastifyReply) => {
        const {id} = request.params as {id:number};

        if(!id) return reply.status(400).send('Error no identificador!');

        try{
            const deleteUser = new DeleteUserService();
            const deleted = await deleteUser.execute({id});
    
            await reply.send(deleted);
        }catch(error){
            reply.status(400).send({error: 'Erro ao deletar Usuário!'});
        }
    }
}