import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";

import UserRouter from "./routes/UserRouter.js";
import ShortnerRouter from "./routes/ShortnerRouter.js";

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log({ error });
  });

const app = express();

app.use(express.json());

app.use(morgan("dev"));
app.use("/api", UserRouter);
app.use("/api", ShortnerRouter);

app.listen(3000, () => {
  console.log("Server Running on PORT 3000");
});