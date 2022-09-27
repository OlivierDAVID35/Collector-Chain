const nodemailer = require('nodemailer');
const randomPassword = require('./randomPassword');
require('dotenv').config();

async function forgottenPassword(userEmail) {
    const transporter = await nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASSWORD,
        },
    });
    // console.log(process.env.MAIL);
    // console.log(process.env.PASSWORD);

    const mailOptions = {
        from: process.env.MAIL,
        to: userEmail,
        subject: 'Reset Password Link - Collector Chain',
        text: ` 
        Bonjour !
        Suite à votre demande, vous trouverez ci-joint le mot de passe
        lié à votre compte utilisateur : ${randomPassword}

        Cordialement,

        L'équipe Collector Chain
    `,
    };
    /*
    transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });
    */
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
        }
    });
}

module.exports = forgottenPassword;
