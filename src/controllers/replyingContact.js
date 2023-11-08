import { Contact } from "../models/Contact";
import { transporter } from "../utils/nodeMailer";

export const replyContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const body = req.body;

    const contact = await Contact.findById(contactId);

    if (!contact) {
      res.status(404).json({ success: false, message: "Sorry!, Contact Not Found" });
    }

    const mailOptions = {
      from: process.env.EMAIL,
      to: contact.email,
      subject: body.subject,
      message: `Hello Again!,\n ${body.message}`
    };
    console.log(mailOptions);

    await transporter.sendMail(mailOptions, async (error, response) => {
      if (error) {
        console.log(error);
        res.status(403).json({ success: false });
      }
      console.log("email sent", response);
      let reply = await Contact.findByIdAndUpdate(contact._id, {
        isReplied: true,
      });

      if (!reply) {
        console.log("failed to reply contact, please try again");
      }
      res
        .status(201)
        .json({
          success: true,
          message: "Contact Replied Successfully",
          isReplied: true,
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};