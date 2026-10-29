import mongoose from "mongoose";
import env from "./env.js";

let isConnected = false;

const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    const conn = await mongoose.connect(env.MONGO_URI, {
      dbName: "blogDB",
    });
    isConnected = true;
    console.log("Connected to MongoDB:", conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectDB;
