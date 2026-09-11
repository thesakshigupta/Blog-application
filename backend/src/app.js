import express from "express";
import cookieParser from 'cookie-parser';
import appRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user',appRouter);


export default app;