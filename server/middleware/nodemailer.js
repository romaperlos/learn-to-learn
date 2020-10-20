import nodemailer from 'nodemailer';
import './env.js';
const user = process.env.MAIL_ACC;
const pass = process.env.MAIL_PASS;

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user,
    pass,
  },
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent', info);
  });
};

export default mailer;
