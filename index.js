import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";

import holidayRouter from "./src/routes/holiday";
import userRoute from "./src/routes/users";
import authRoute from "./src/routes/auth";

dotenv.config();

app.use(bodyParser.json());

// database connection

const port = 8080;
mongoose.connect(process.env.MONGO_URI).then((res) => {
  console.log("connected to database");
});

// middleware
app.use(express.json());
app.use("/auth", authRoute);
app.use("/tours",holidayRouter);
app.use("/users",userRoute);

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
