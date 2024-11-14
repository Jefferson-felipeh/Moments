import { FastifyRequest, FastifyReply } from "fastify";
import { LoginUserService } from "../services/LoginUserService";

export class LoginUserController{

    loginUser = async (request:FastifyRequest,reply:FastifyReply) => {
        //OBTENDO OS DADOS DO CORPO DA REQISIÇÃO_
        const {email, password} = request.body as {email:string, password:string};
        const formatEmail = email.toLowerCase();
        console.log('Controller: '+email,password);
        //VALIDAÇÃO DOS CAMPOS DO CORPO DA REQUISIÇÃO_
        if(!email || !password){
            return reply.status(400).send({error: 'Campos Inválidos!'});
        }
    
        //TRATAMENTO DE ERRO_
        try{
            //INICIANDO O SERVICE_
            const serviceLogin = new LoginUserService();
            //CHAMANDO O MÉTODO DO SERVICE, E PASSANDO OS DADOS PARA ELE_
            const login = await serviceLogin.executeLogin({email:formatEmail,password});

            //RECEBENDO A RESPOSTA DO SERVIDOR PARA A REQUISIÇÃO, E ENVIANDO ESSA RESPOSTA DIRETAMENTE PARA O CLIENTE_
            return reply.status(200).send(login);
            
        }catch(error){
            await reply.status(400).send(error);
        }   
    }
}