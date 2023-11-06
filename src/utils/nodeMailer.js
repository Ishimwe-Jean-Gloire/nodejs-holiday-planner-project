import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})