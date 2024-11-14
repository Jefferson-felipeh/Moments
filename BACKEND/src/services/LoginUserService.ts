import prismaClient from "../prisma";
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
interface loginDrops{
    email:string,
    password:string
}

export class LoginUserService{
    //MÉTODO QUE IRÁ VERIFICAR AS CREDENCIAIS ENVIADAS PELO USUÁRIO E RETORNAR ALGO_
    executeLogin = async ({email,password}:loginDrops) => {
        
        //PEQUENA VALIDAÇÃO DOS CAMPOS_
        if(!email || !password) throw new Error('Dados Inválidos!');

        //VERIFICANDO, ATRAVEZ DO EMAIL, SE O USUÁRIO EXISTE OU NÃO NO BANCO DE DADOS_
        const loginUser = await prismaClient.user.findUnique({
            where: {email}
        });

        //SE NÃO EXISTIR, SERÁ RETORNADO ESSE ERRO_
        if(!loginUser) throw new Error('Email não existe. Cadastrar-se!');

        //CASO EXISTA, SERÁ PEGO O PRÓPRIO USUÁRIO E SERÁ COMPARADO A SENHA DESSE USUÁRIO(A QUE ESTA NO SISTEMA COM A QUE ELE INSERIU)_
        const verifyPasswords = await bcrypt.compare(password,loginUser.password);
        //CASO A SENHA ESTIVER INCORRETA, SERÁ RETORNADO UMA MENSAGEM_
        if(!verifyPasswords) throw new Error("Senha Incorreta!");

        //Usando o JWT para autenticação, onde será gerado o token, DEPENDENDO DAS VALIDAÇÕES DAS CREDENCIAS DO USUÁRIO__
        const token = jwt.sign(
            {userId: loginUser.id},     //PAYLOAD, COM INFORMAÇÕES DO USUÁRIO;
            process.env.JWT_SECRET || '123456',     //CHAVE SECRETA PARA ASSINATURA;
            {expiresIn: '1h'}           //DURAÇÃO DE ACESSO, NESSE CASO EXPIRA EM 1H;
        )
        //DEFINIR O JWT_SECRET NO .env;

        return {//RETORNANDO UM OBJETO;
            token,//RETORNANDO O TOKEN GERADO;
            loginUser: {//RETORNANDO O OBJETO, COM DADOS SELECIONADO;
                id:loginUser.id,
                email:loginUser.email,
                name:loginUser.name,
                age:loginUser.age,
                cpf:loginUser.cpf,
                cep:loginUser.cep,
                city:loginUser.city,
                phone:loginUser.phone
            }
        }
    }
}