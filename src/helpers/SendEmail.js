import nodemailer from "nodemailer";

const sendEmail = (user, token) => {
    // Transport
    const transporter =nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "paocisneroslo18@gmail.com",
            pass: "jrtr renu nsfb aqhf"
        }
    })
    const message = {
        from: "pcisneros18@gmail.com",
        to: `${user.email}`,
        subject: "Confirm your account",
        text: "This is a text message",
        html: `
            <h1>Hola, ¡${user.nombre} ${user.apellido}!</h1>
            <p>Para cambiar tu contraseña ingresa al siguiente enlace:</p>
            <a href = "http://localhost:5173/change-password/${token}">Cambiar contraseña</a>
            <br>
            <p>Atentamente,</p>
            <p>Virtual Brain Solutions</p>
        `,
    }

    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo electrónico:', error);
        } else {
            console.log('Correo electrónico enviado:', info.response);
        }
    });
}

export default sendEmail;