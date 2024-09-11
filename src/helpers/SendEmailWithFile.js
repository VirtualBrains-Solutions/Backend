import nodemailer from "nodemailer";
import path from "path"
import { fileURLToPath } from "url";


const sendEmailWithFile = (user, body) => {
    // Transport
    const transporter =nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "paocisneroslo18@gmail.com",
            pass: "jrtr renu nsfb aqhf"
        }
    })

    // Get the file route
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const projectRoot = path.resolve(__dirname, '../../');
    const filePath = path.resolve(projectRoot, 'Datos.xlsx');

    if(body.type === "me"){
        const message = {
            from: "pcisneros18@gmail.com",
            to: `${body.email}`,
            subject: "Datos de usuario",
            html: `
            <h1>Hola, ¡${user.nombre} ${user.apellido}!</h1>
            <p>Estos son todos los datos registrados de tu cuenta.</p>
            <p>Atentamente,</p>
            <p>Virtual Brain Solutions</p>
            `,
            attachments: [
                {
                    filename: "Datos_Usuario.xlsx",
                    path: filePath
                }
            ]
        }
    
        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo electrónico:', error);
            } else {
                console.log('Correo electrónico enviado:', info.response);
            }
        });
    }
    else{
        const message = {
            from: "pcisneros18@gmail.com",
            to: `${body.email}`,
            subject: "Datos de usuario",
            html: `
            <h1>¡Hola!</h1>
            <p>Estos son todos los datos del usuario ${user.nombre} ${user.apellido}.</p>
            <p>Atentamente,</p>
            <p>Virtual Brain Solutions</p>
            `,
            attachments: [
                {
                    filename: "Datos_Usuario.xlsx",
                    path: filePath
                }
            ]
        }
    
        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo electrónico:', error);
            } else {
                console.log('Correo electrónico enviado:', info.response);
            }
        });
    }
    
    

}

export default sendEmailWithFile;