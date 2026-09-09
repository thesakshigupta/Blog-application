
const config = (value) => {
    if (!value) {
        throw new Error(`Missing environment variable: ${value}`);
    }
    return value;
};

const env = {
    PORT: config(process.env.PORT),
    MONGO_URI: config(process.env.MONGO_URI)
};

export default env;
