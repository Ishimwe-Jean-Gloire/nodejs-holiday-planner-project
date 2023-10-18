import mongoose from "mongoose";

const holidaySchema = mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  backDropImage: {
    type: String,
  },
  Title: {
    type: String,
    required:true,
  },
  Description: {
    type: String,
    required:true,
  },
  Duration: {
    type: String,
  },
  GroupSize: {
    type: String,
    required:true,
  },
  Price: {
    type: String,
    required:true,
  },
  discountPercentage: {
    type: String,
  },
  tourType: {
    type: String,
  },
  Departure: {
    type: String,
  },
  Seats: {
    type: String,
    required:true,
  },
  fromMonth: {
    type: String,
    required:true,
  },
  toMonth: {
    type: String,
    required:true,
  },
  departureTime: {
    type: String,
    required:true,
  },
  returnTime: {
    type: String,
    required:true,
  },
  gallery: {
    type: String,
  },
  priceIncluded: {
    type: String,
    required:true,
  },
  priceNotIncluded: {
    type: String,
  },
},
{timestamps:true}
);

export const tourSchema = mongoose.model("tour", holidaySchema);
