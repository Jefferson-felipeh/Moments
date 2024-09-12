import prismaClient from "../prisma"

interface IdpropsDelete{
    id: number
}

export class DeleteUserService{
    DeleteUser = async ({id}: IdpropsDelete) => {
        const user = await prismaClient.user.findUnique({
            where: {
                id: Number(id)
            }
        });

        if(!user){
            throw new Error('Error ao encontrar usuario!');
        }

        await prismaClient.user.delete({
            where: {
                id: Number(id)
            }
        });

        return 'Usuario deletado com sucesso!';
    }
}