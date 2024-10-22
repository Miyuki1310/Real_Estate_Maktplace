import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ message });
});

const start = async () => {
  await connectDB(process.env.DATABASE_URL);
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};

start();
