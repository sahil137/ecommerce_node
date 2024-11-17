import dotenv from "dotenv";
import express from "express";
import connectToDatabase from "./src/config/mongoose.js";

//Env config
dotenv.config();

const app = express();

// MongoDB connection
connectToDatabase();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT :: ${PORT} 🚀`);
});
