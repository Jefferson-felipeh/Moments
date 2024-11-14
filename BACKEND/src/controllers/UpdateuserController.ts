import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateUserService } from "../services/UpdateUserService";
import { CreateUser } from '../interfaces/ValideAtrib';

export class UpdateUserController{
    UpdatedUser = async (request:FastifyRequest, reply:FastifyReply) => {
        //Obtendo o id passaado nos parametros da rota_
        const {id} = request.params as {id:number};
        //Obtendo os dados do corpo da requisição_
        const {name,email,cpf,age,phone,cep,password} = request.body as { 
            id:number,
            name:string, 
            email:string,
            cpf:string, 
            age:string, 
            phone:string, 
            cep:string, 
            password:string
        };

        //Sanatização dos campos_
        const sanitizedEmail = email.trim().toLowerCase();
        const sanitizedCPF = cpf.trim();
        const sanitizedPhone = phone.trim();

        try{
            const valid = this.ValidFields({name,email:sanitizedEmail,cpf:sanitizedCPF,age,phone:sanitizedPhone,cep,password});
            if(valid) return reply.status(400).send({error: valid});

            //Passando os dados para o service_
            const updateUser = new UpdateUserService();
            const update = await updateUser.execute({
                id,
                name,
                email:sanitizedEmail,
                cpf:sanitizedCPF,
                age,
                phone:sanitizedPhone,
                cep,
                password
            });

            await reply.send(update);
        }catch(error){
            reply.status(400).send({error: 'Dados inválidos!'});
        }
    }

    ValidFields = ({ name, email, cpf, age, phone, cep, password }: CreateUser) => {
        if (!name || name.length < 3) return 'Field Name is invalid or too short!';
        if (!email || !email.includes('@')) return 'Field Email is invalid!';
        if (!cpf || cpf.length !== 11) return 'Field CPF is invalid!';
        if (!age || Number(age) < 18 || Number(age) > 100) return 'Field Age is invalid!';
        if (!phone || phone.length < 10) return 'Field Phone is invalid!';
        if (!cep || cep.length !== 8) return 'Field CEP is invalid!';
        if (!password || password.length < 4 || password.length > 10) return 'Field Password must be between 4 and 10 characters!';

        return null; // Retorna null se todas as validações forem bem-sucedidas
    }
}