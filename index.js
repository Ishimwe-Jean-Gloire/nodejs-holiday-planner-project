import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

import holidayRouter from "./src/routes/holiday";
import userRoute from "./src/routes/users";
import authRoute from "./src/routes/auth";
import contactRoute from "./src/routes/contact";
import bookingRoute from "./src/routes/bookings";

dotenv.config();

app.use(bodyParser.json());

const corsOptions = {
  origin: true,
  credentials: true,
};

const port = 4000;

// database connection
mongoose.connect(process.env.MONGO_URI).then((res) => {
  console.log("connected to database");
});

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Holiday Planner API",
      version: "1.0.0",
      description: "A holiday planner project API using nodejs and express",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", holidayRouter);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
