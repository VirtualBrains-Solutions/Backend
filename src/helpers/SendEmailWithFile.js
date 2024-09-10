import nodemailer from "nodemailer";
import path from "path"
import { fileURLToPath } from "url";


const sendEmailWithFile = (email) => {
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
    
    const message = {
        from: "pcisneros18@gmail.com",
        to: `${email}`,
        subject: "Datos de usuario",
        text: "Estos son tus datos de usuario",
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

export default sendEmailWithFile;