import express from "express";
import { getBookingsCount } from "../controllers/countBooking";

const countBookings = express.Router();


countBookings.post("/",getBookingsCount);

export default countBookings;