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
  MONGO_URI: config(process.env.MONGO_URI, "MONGO_URI"),
  JWT_SECRET: config(process.env.JWT_SECRET, "JWT_SECRET"),
};

export default env;
