import prismaClient from "../prisma";
import { UserAttributes } from "../../interfaces/UserAttributes ";

export class CreateUserService{
    execute = async ({name, email, cpf, age, password}: UserAttributes) => {
        if(!name || !email || !cpf || !age || !password)        {
            console.error("error");
            return;
        }

        const createUser = prismaClient.user.create({
            data: {
                name,
                email,
                cpf, 
                age,
                password
            }
        });

        return createUser;
    }
}