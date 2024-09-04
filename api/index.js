import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

//configuring environment variables
import dotenv from "dotenv";
dotenv.config();

//importing db connection
import connectDB from "./config/db.js";
connectDB();

//initializing app
const PORT = process.env.PORT;
const app = express();

//middlewares
//parsing cookies
app.use(cookieParser);

//cross origin policy
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

//parsing json data
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
