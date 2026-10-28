import { Router } from "express";
import { createBlogController, deleteblogController, getBlogController, getAllBlogController, updateBlogController} from "../controller/blog.controller.js";
import { authentication } from "../middleware/usermiddleware.js";
const blogRouter = Router();

blogRouter.post("/createblog", authentication, createBlogController);
blogRouter.delete("/delete/:blogId", authentication, deleteblogController);
blogRouter.get("/read-blog", authentication, getBlogController);
blogRouter.get("/read-allblog", getAllBlogController);
blogRouter.put("/update-blog/:blogId", authentication, updateBlogController);

export default blogRouter;
