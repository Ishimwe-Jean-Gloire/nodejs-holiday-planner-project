import Booking from "../models/Booking";
import { tourSchema } from "../models/tour";
import { All } from "../models/all";
import { transporter } from "../utils/nodeMailer";

//create a new booking

export const createBooking = async (req, res) => {

  const tourID = req.body.tourId;
  const tour = await tourSchema.findById({ _id: tourID });

    const userID = req.body.userId;
    const user = await All.findById({ _id: userID });

  const newBooking = new Booking(req.body);



  // try {
  //   const mailOptions = {
  //     from: process.env.EMAIL,
  //     to: req.body.email,
  //     subject: "Thank you for booking tour!!",
  //     text: "Thank you to book your tour.",
  //   };

  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.error("Error while you send email:", error);
  //     } else {
  //       console.log("Email sent:", info);
  //     }
  //   });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ message: "internal server error" });
  // }

  try {
    const savedBooking = await newBooking.save();

    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      userData: user,
      tourData:tour,
      BookingData: savedBooking,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Booking.findById(id);
    res
      .status(200)
      .json({ success: true, message: "successful retrieved", data: book });
  } catch (err) {
    res.status(404).json({ success: true, message: "not found" });
  }
};

//get all booking
export const getAllBooking = async (req, res) => {
  try {
    const book = await Booking.find();
    res
      .status(200)
      .json({ success: true, message: "successful retrieved", data: book });
  } catch (err) {
    res.status(500).json({ success: true, message: "internal server error" });
  }
};
