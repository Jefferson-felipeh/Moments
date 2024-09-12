import {FastifyRequest, FastifyReply} from 'fastify';
import { UpdateUserService } from '../Services/UpdateUserService';

export class UpdateUserController{
    Update = async (request:FastifyRequest,reply:FastifyReply) => {
        const {id} = request.params as {id: number};
        const {name, email, cpf, age, password} = request.body as {name:string, email:string, cpf:string, age:number, password:string};

        const updateUser = new UpdateUserService();
        const update = await updateUser.Updated({id, name, email, cpf, age, password});

        reply.send(update);
    }
}