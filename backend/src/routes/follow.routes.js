import {Router} from  "express";
import { authentication } from "../middleware/usermiddleware.js";
import { followUnfollowUserController } from "../controller/folllow.controller.js";
const followRouter = Router()

followRouter.get('/followUser/:userId', authentication, followUnfollowUserController)

export default followRouter;