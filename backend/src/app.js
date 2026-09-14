import express from "express";
import cookieParser from 'cookie-parser';
import appRouter from "./routes/user.routes.js";
import blogRouter from "./routes/blog.routes.js";
import followRouter from "./routes/follow.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user',appRouter);
app.use('/api/blog',blogRouter);
app.use('/api/follow',followRouter);


export default app;