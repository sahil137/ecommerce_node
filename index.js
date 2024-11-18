import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectToDatabase from "./src/config/mongoose.js";
import router from "./src/routes/index.routes.js";

// import admin for firebase admin
import admin from "./src/config/firebase.js";

//Env config
dotenv.config();

const app = express();

// MongoDB connection
connectToDatabase();

app.use(express.json({ limit: "30mb" }));
app.use(cors());

app.use("/", router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT :: ${PORT} 🚀`);
});
