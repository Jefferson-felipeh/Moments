import {FastifyRequest, FastifyReply} from 'fastify';
import { DeleteUserService } from '../Services/DeleteUserService';

export class DeleteUserController{
    DeleteUser = async (request:FastifyRequest, reply:FastifyReply) => {
        try{
            const {id} = request.params as {id: number};
            const DeleteController = new DeleteUserService()
            const Delete = await DeleteController.DeleteUser({id});
            reply.status(200).send(Delete);
        }catch(err:any){
            reply.status(400).send({err: err.message})
        }
    }
}