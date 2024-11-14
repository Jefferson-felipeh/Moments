import prismaClient from "../prisma";
import { UpdatedUser } from '../interfaces/Updated';

export class UpdateUserService{
    execute = async ({id, name,email,cpf,age,phone,cep,password}:UpdatedUser) => {
        if(!id) throw new Error('Erro ao encontrar id!');

        const updatedUser = await prismaClient.user.update({
            where: {
                id: Number(id)
            },
            data:{
                name: name,
                email:email,
                cpf:cpf,
                age:age,
                phone:phone,
                cep:cep,
                password:password
            }
        });

        return updatedUser;
    }
}