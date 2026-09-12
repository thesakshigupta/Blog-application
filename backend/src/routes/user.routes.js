import { Router } from "express";
import { Register, getUser, loginController, logout} from "../controller/user.Controller.js";
import { authentication } from "../middleware/usermiddleware.js";
import { validate } from "../middleware/validate.js";
import { registerValidator, loginValidator } from "../validator/user.validator.js"; 
const appRouter = Router();

appRouter.post("/register", validate(registerValidator) ,Register);
appRouter.post("/login", validate(loginValidator), loginController);

appRouter.get("/getuser",authentication,getUser)
appRouter.get("/logout", logout)


export  default appRouter;
