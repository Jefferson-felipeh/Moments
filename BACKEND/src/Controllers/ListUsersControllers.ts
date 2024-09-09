import { FastifyRequest, FastifyReply } from "fastify";
import { ListUsersService } from "../Services/ListUsersService";

export class ListUsersController{
    ListUsers = async (request:FastifyRequest, reply:FastifyReply) => {

        const list = new ListUsersService();
        const listUsers = await list.execute();
        await reply.send(listUsers);
    }
}