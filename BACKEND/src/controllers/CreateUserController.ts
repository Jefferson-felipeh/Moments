import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/CreateUserService";
import { CheckingDatasService } from '../services/CheckingDatasService';
import { CreateUser } from "../interfaces/ValideAtrib";
import { schema } from "../validated/schema";

export class CreateUserController{
    CreateUser = async (request:FastifyRequest, reply:FastifyReply) => {
        //Obtendo os dados do corpo da requisição_
        const {name,email,cpf,age,phone,cep,uf,rua,num,city,password,confirmPassword} = request.body as { 
            id:number,
            name:string, 
            email:string,
            cpf:string, 
            age:string, 
            phone:string, 
            cep:string,
            uf: string,
            rua:string,
            num:string,
            city:string,
            password:string,
            confirmPassword:string
        };

        //Sanitização de email e cpf_
        const sanitizedEmail =  await email.trim().toLowerCase();
        const sanitizedCPF = await cpf.trim();
        const sanitizedPhone = await phone.trim();

        //Verificando se o email já está cadastrado no banco de dados_
        const cheking = new CheckingDatasService();
        const datasChekingEmail = await cheking.ChekingValidationEmail(sanitizedEmail);
        if(datasChekingEmail) return reply.status(400).send({error: 'Email já esta em uso!'});

        //Verificando se o CPF já esta cadastrado no banco_
        const datasCheckingCPF = await cheking.ChekingValidationCPF(sanitizedCPF);
        if(datasCheckingCPF) return reply.status(400).send({error: 'CPF já cadastrado no sistema!'});

        //Verificando se o Phone Já existe no banco de dados_
        const datasCheckingPhone = await cheking.ChekingValidationPhone(sanitizedPhone);
        if(datasCheckingPhone) return reply.status(400).send({error: 'Phone já cadastrado no sistema!'})

        const valid = this.ValidFields({name,email,cpf,age,phone,cep,uf,city,num,rua,password,confirmPassword});
        if(valid) return reply.status(400).send({error: valid});

        try{
            //Instanciando o service e passando os dados para serem cadastrados_
            const createUser = new CreateUserService();
            const UserCreated = await createUser.execute({name,email:sanitizedEmail,cpf:sanitizedCPF,age,phone:sanitizedPhone,cep,uf,rua,num,city,password,confirmPassword});
            await reply.status(200).send(UserCreated);
        }catch(error){
            reply.status(400).send({error: 'Erro ao criar usuário!'});
        }
    }

    //Validando os demais campos do formulário, e verificando se todos estão corretos_
    ValidFields = ({ name, email, cpf, age, phone, cep, uf, city, num, rua, password,confirmPassword }: CreateUser) => {
        const formatCPF = cpf.replace(/\D/g, '');
        const formatCEP = cep.replace(/\D/g, '');
        if (!name || name.length < 3) return 'Field Name is invalid or too short!';
        if (!email || !email.includes('@')) return 'Field Email is invalid!';
        if (!formatCPF || formatCPF.length !== 11) return 'Field CPF is invalid!';
        if (!age || Number(age) < 18 || Number(age) > 100) return 'Field Age is invalid!';
        if (!phone || phone.length < 10) return 'Field Phone is invalid!';
        if (!formatCEP || formatCEP.length !== 8) return 'Field CEP is invalid!';
        if (!password || password.length < 4 || password.length > 10) return 'Field Password must be between 4 and 10 characters!';
        if (password !== confirmPassword) return 'Passwords Inválids!';

        return null; // Retorna null se todas as validações forem bem-sucedidas
    }

    validUserSchema = (req:any,res:any,next:any) => {
        const {error} = schema.validate(req.body, {abortEarly:false});
        if(error){
            return res.status(400).json({
                
            })
        }
    }
}