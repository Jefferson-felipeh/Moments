import prismaClient from "../prisma";
import { IdpropsDelete } from "../../interfaces/UserAttributes ";

export class UpdateUserService{
    Updated = async ({id, name, email, cpf, age, password}:IdpropsDelete) => {
        const user = prismaClient.user.findUnique({
            where:{
                id: Number(id)
            }
        });

        if(!user){
            throw new Error('Usuario não encontado!');
        }

        await prismaClient.user.update({
            where:{
                id: Number(id)
            },
            data: {
                name:name,
                email:email,
                cpf:cpf,
                age:age,
                password:password
            }
        })

        return user;
    }
}