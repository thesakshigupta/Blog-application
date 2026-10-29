import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env relative to backend root or project root
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
dotenv.config();

const config = (value, name, fallback) => {
  if (!value && fallback !== undefined) {
    return fallback;
  }
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
};

const env = {
  PORT: config(process.env.PORT, "PORT", 5000),
  MONGO_URI: config(
    process.env.MONGO_URI,
    "MONGO_URI",
    "mongodb+srv://sakshi:dC87GYxSlKZzpGyB@cluster0.eti8bab.mongodb.net/"
  ),
  JWT_SECRET: config(
    process.env.JWT_SECRET,
    "JWT_SECRET",
    "bd83e133f634e4354c0837c3f2b0d11eae82f86393bba47f678e003b3d411778"
  ),
};

export default env;
