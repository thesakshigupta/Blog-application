import { Router } from "express";
import { authentication } from "../middleware/usermiddleware.js";
import { likeUnlikePostController } from "../controller/likes.controller.js";

const likeRouter = Router()
likeRouter.get('/likeUser/:blogId',authentication, likeUnlikePostController)



export default likeRouter;