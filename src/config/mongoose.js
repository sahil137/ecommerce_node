import mongoose from "mongoose";

const connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to database :: MongoDB");
    })
    .catch((error) => {
      console.log(`Error in connecting to database : ${error}`);
    });
};

export default connectToDatabase;
