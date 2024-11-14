const nodeMailer = require('nodemailer');

export class NodeEmailService{

    emitEmail = () => {
        const smtp = nodeMailer.createTrasnport({
            host: "smtp.gmail.com",
            port: 587,
            secure: true,
            service: 'gmail',
            auth: {
                user: 'jeffersonthm1@gmail.com',
                pass: '12345'
            }
        });

        const mailOptions = {
            from: 'seuemail@gmail.com',
            to: 'destinatario@exemplo.com',
            subject: 'Bem-vindo!',
            text: 'Obrigado por se cadastrar! Aproveite nossa aplicação.',
            // Ou envie o conteúdo como HTML:
            html: '<p>Obrigado por se cadastrar! Aproveite nossa aplicação.</p>'
          };

          smtp.sendMail(mailOptions, (error:any, info:any) => {
            
            if (error) {
              return console.log('Erro ao enviar e-mail:', error);
            }

            console.log('E-mail enviado com sucesso:', info.response);
          })
    }
}