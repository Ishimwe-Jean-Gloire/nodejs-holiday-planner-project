import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true

    },
    tourId: {
      type: String,
      required: true

    },
    whoBooked:{
      type: String
    },
    tourBooked:{
      type: String
    },
    status:{
      type: String,
      default:"pending"
    },
    numberofTicket:{
      type: Number
    },
    isPaid: {
      type: String,
      default: false,
      required: true

    },
    paymentMethod: {
      type: String,
      required: true

    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
