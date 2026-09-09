import mongoose from "mongoose";
import env from "./env.js";


const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI, {
      dbName: "blogDB",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};


export default connectDB;

