import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./database/db-connection.js";
import userRouter from "./routes/user.route.js";
import leaveRouter from "./routes/leave.route.js";

dotenv.config();
mongoose.set("strictQuery", false);

const app = express();
// mongodb connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/user/", userRouter);
app.use("/api/leave/", leaveRouter);

const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log("Server Started at Port" + Port);
});
//module.exports.app=app;