import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

import holidayRouter from "./src/routes/holiday";
import userRoute from "./src/routes/users";
import authRoute from "./src/routes/auth";

dotenv.config();

app.use(bodyParser.json());

const corsOptions ={
  origin:true,
  credentials:true 
}

const port = 8080;

// database connection
mongoose.connect(process.env.MONGO_URI).then((res) => {
  console.log("connected to database");
});

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", holidayRouter);
app.use("/api/v1/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
