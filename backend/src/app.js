import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import appRouter from "./routes/user.routes.js";
import blogRouter from "./routes/blog.routes.js";
import followRouter from "./routes/follow.routes.js";
import likeRouter from "./routes/like.routes.js";
import commentRouter from "./routes/comment.routes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://blog-application-t6q7.vercel.app",
];

const isOriginAllowed = (origin) => {
  if (!origin) return true; // allow curl, mobile, server-to-server
  if (allowedOrigins.includes(origin)) return true;
  // allow any vercel preview / production deployment from blog-application
  if (/^https:\/\/blog-application.*\.vercel\.app$/.test(origin)) return true;
  return false;
};

const corsOptions = {
  origin: (origin, callback) => {
    if (isOriginAllowed(origin)) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "Cookie", "X-Requested-With", "Accept"],
  exposedHeaders: ["Set-Cookie"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Serverless DB connection middleware
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection middleware error:", error);
    next();
  }
});

// Root & Health check
app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", message: "Blog API server is running" });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "healthy", timestamp: new Date().toISOString() });
});

app.use("/api/user", appRouter);
app.use("/api/blog", blogRouter);
app.use("/api/follow", followRouter);
app.use("/api/like", likeRouter);
app.use("/api/comment", commentRouter);

export default app;
