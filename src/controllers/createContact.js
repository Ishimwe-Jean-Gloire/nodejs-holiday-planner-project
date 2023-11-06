import { transporter } from "../utils/nodeMailer";

// create a new contact

export const createContact = async (req, res) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: "Thank you for your time!!",
      text: "Hello Thank you for time and idea. We will reply you soon!",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error while you send email:", error);
      } else {
        console.log("Email sent:", info);
      }
    });

    //   const contact = await Contact.create(req.body);
    //   res.status(201).json({
    //     message: "contact us successfully",
    //     data: { contact },
    //   });
    // } catch (error) {
    //   res.status(500).json({
    //     message: error.message,
    //   });
    // }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
