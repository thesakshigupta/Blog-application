import { Router } from "express";
import { Register, getUser, loginController, logout} from "../controller/user.Controller.js";
import { authentication } from "../middleware/usermiddleware.js";
const appRouter = Router();

appRouter.post("/register", Register);
appRouter.post("/login", authentication,loginController);
appRouter.get("/getuser",authentication,getUser)
appRouter.get("/logout", authentication  ,logout)


export  default appRouter;

