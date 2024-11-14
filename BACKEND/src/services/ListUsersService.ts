import prismaClient from "../prisma";

export class ListUserService{
    execute = async () => {
        const users = await prismaClient.user.findMany();
        return users;
    }
}