import prismaClient from "../prisma";

export class CheckingDatasService{
    ChekingValidationEmail = async (chekingEmail:string) => {
        const dataEmailChecking = prismaClient.user.findUnique({
            where: {
                email: chekingEmail
            }
        });

        return dataEmailChecking;
    }

    ChekingValidationCPF = (chekingCPF:string) => {
        const dataCPFChecking = prismaClient.user.findUnique({
            where: {
                cpf: chekingCPF
            }
        });

        return dataCPFChecking;
    }

    ChekingValidationPhone = (chekingPhone:string) => {
        const dataPhoneChecking = prismaClient.user.findUnique({
            where: {
                phone: chekingPhone
            }
        });

        return dataPhoneChecking;
    }
}