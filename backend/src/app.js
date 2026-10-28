import express from "express";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import appRouter from "./routes/user.routes.js";
import blogRouter from "./routes/blog.routes.js";
import followRouter from "./routes/follow.routes.js";
import likeRouter from "./routes/like.routes.js";
import commentRouter from "./routes/comment.routes.js";

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/user', appRouter);
app.use('/api/blog', blogRouter);
app.use('/api/follow', followRouter);
app.use('/api/like', likeRouter);
app.use('/api/comment', commentRouter);

export default app;
