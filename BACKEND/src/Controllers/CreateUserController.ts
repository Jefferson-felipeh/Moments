import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../Services/CreateUserService";

export class CreateUserController{
    CreateUser = async (request: FastifyRequest, reply: FastifyReply) => {
        const {name, email, cpf, age, password} = request.body as {name: string, email: string, cpf: string, age: number, password:string};

        const createService = new CreateUserService();
        const create = await createService.execute({name, email, cpf, age, password});
        
        await reply.send(create);
    }
}