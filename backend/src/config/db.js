import mongoose from "mongoose";
import { DB_URI } from "./env.js";

if (!DB_URI) {
  throw new Error("❌ DB_URI is not provided in environment variables");
}

export async function connectDB() {
  try {
    await mongoose.connect(DB_URI);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); 
  }
}
