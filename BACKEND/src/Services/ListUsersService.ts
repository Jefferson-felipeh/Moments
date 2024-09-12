import prismaClient from "../prisma";

export class ListUsersService{
    execute = async () => {
        const list = await prismaClient.user.findMany();
        return list;
    }
}