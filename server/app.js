import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const start = async () => {
  await connectDB(process.env.DATABASE_URL);
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};

start();
