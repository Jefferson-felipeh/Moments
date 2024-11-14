import prismaClient from "../prisma"
import { CreateUser } from "../interfaces/ValideAtrib";
const bcrypt = require('bcrypt');

export class CreateUserService{
    execute = async ({name,email,cpf,age,phone,cep,uf,city,num,rua,password,confirmPassword}:CreateUser) => {

        //Hasheando a senha com bcrypt_
        //Gerando o salt com 10 rodadas(um número seguro de rodadas)_
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        //Hashear a senha usando o salt_
        const hashedPassword = await bcrypt.hash(password,salt);
        const hashedPasswordTwo = await bcrypt.hash(confirmPassword,salt);

        //Cadastrando os dados no banco de dados_
        const createUser = await prismaClient.user.create({
            data: {
                name: name,
                email:email,
                cpf:cpf,
                age: age,
                phone:phone,
                cep:cep,
                uf:uf,
                city:city,
                num:num,
                rua:rua,
                password:hashedPassword,
                confirmPassword:hashedPasswordTwo
            }   
        });

        return createUser;
    }
}