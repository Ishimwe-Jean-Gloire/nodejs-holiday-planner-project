import { Contact } from "../models/Contact";

const nodemailer = require('nodemailer');

// create a new contact


export const createContact = async (req, res) => {

  let config = {
    service: 'gmail',
    auth: {
      user: 'ishimwegloire@gmail.com',
    }

  }

  let transporter = nodemailer.createTransport(config)

// let testAccount = await nodemailer.createTestAccount();

// let transporter = nodemailer.createTransport({
//   host: "smtp.example.com",
//   port: 587,
//   secure: false, // upgrade later with STARTTLS
//   auth: {
//     user: "username",
//     pass: "password",
//   },
// });

// let message = {
//   from: '"Fred Foo 👻" <foo@example.com>', // sender address
//   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
// };

// transporter.sendMail(message).then((info)=>{
//   return res.status(201).json({message:"you should receive an email",info: info.messageId,preview:nodemailer.getTestMessageUrl(info)})
// }).catch(error =>{
//   return res.status(500).json({error})
// })
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      message: "contact us successfully",
      data: { contact },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


//get all contact

export const getAllContacts = async (req, res) => {
  try {
    const contact = await Contact.find({});

    if (!contact) {
      return res.status(404).json({
        message: "No Contact Found",
      });
    }

    res.status(200).json(contact);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};