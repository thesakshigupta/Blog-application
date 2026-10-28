import { Router } from "express";
import { authentication } from "../middleware/usermiddleware.js";
import { createcommentController } from "../controller/comment.controller.js";
const commentRouter = Router()
commentRouter.post('/commentblog/:blogId', authentication, createcommentController)


export default commentRouter;