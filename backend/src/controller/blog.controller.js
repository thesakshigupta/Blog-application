import { sendRes } from "../utils/sendRes.js";
import BlogModel from "../model/Blog.model.js";
import UserModel from "../model/User.model.js";

export const createBlog =  async (req, res) => {
    const{heading, content} = req.body;
    const user = res.user.id
    if(!user){
        return sendRes(res, 400, "User not found", "eror", null)
    }

    const isuser = await UserModel.findById(user)

    const blog = await BlogModel.create({
        heading,
        content,
        userId: isuser
    })
    
    return sendRes(res, 200, "Create Blog Successfully", "success", blog)
   

}
