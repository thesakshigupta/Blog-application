import dotenv from "dotenv";
dotenv.config();
const config = (value, name) => {
    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }
    return value;
};

const env = {
    PORT: config(process.env.PORT),
    MONGO_URI: config(process.env.MONGO_URI),
    JWT_SECRET: config(process.env.JWT_SECRET)
};


export default env;

