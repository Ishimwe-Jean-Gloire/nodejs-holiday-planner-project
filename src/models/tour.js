import mongoose from "mongoose";

const holidaySchema = mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  backDropImage: {
    type: String,
    required:true,
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
    required:true,
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
    required:true,
  },
  tourType: {
    type: String,
    required:true,
  },
  Departure: {
    type: String,
    required:true,
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
    required:true,
  },
  priceIncluded: {
    type: String,
    required:true,
  },
  priceNotIncluded: {
    type: String,
    required:true,
  },
},
{timestamps:true}
);

export const tourSchema = mongoose.model("tour", holidaySchema);
