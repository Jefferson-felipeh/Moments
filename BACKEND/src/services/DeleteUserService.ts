import prismaClient from "../prisma";
interface idProps{ id:number };

export class DeleteUserService{
    execute = async ({id}:idProps) => {
        if(!id) throw new Error('Error ao encontrar id!');

        const deleteUser = await prismaClient.user.findMany({
            where: {
                id: Number(id)
            }
        });

        if(!deleteUser) throw new Error('Dados não encontrados!');

        const deleted = await prismaClient.user.delete({
            where: {
                id: Number(id)
            },
        });

        return deleted;
    }
}