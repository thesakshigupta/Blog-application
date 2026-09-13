import { Router } from "express";
import { createBlogController, deleteblogController, getBlogController } from "../controller/blog.controller.js";
import { authentication } from "../middleware/usermiddleware.js";
const blogRouter = Router()

blogRouter.post("/createblog", authentication, createBlogController);
blogRouter.delete("/delete/:blogId",authentication, deleteblogController)
blogRouter.get("/read_blog/blogId",authentication, getBlogController )



export default blogRouter