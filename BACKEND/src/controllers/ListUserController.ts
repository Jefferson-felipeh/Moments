import { FastifyRequest, FastifyReply } from "fastify";
import { ListUserService } from "../services/ListUsersService";

export class ListUserController{
    ListUser = async (request: FastifyRequest,reply:FastifyReply) => {
        const listUser = new ListUserService();
        const users = await listUser.execute();

        await reply.send(users);
    }
}