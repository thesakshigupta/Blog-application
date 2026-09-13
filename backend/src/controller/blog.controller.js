import { sendRes } from "../utils/sendRes.js";
import BlogModel from "../model/Blog.model.js";
import UserModel from "../model/User.model.js";

export const createBlogController =  async (req, res) => {
    try{ 
    const userId = req.user.id
    const{heading, content} = req.body;
   
    if(!userId){
        return sendRes(res, 401, "User not found", "eror", null)
    }
  
    const isuser = await UserModel.findById(userId)
    if(!isuser){
        return sendRes(res, 401, "User does not exits in database", "error", null)
    }
     console.log(isuser);

    const blog = await BlogModel.create({
        heading,
        content,
        userId: isuser
    })
    
    return sendRes(res, 200, "Create Blog Successfully", "success", blog)
}catch(error) {
    return sendRes(res, 500, "Internal Server Error" , "error", null)
}
}


export const deleteblogController = async (req, res) => {
     try {
        const userId = req.user.id;
        const blogId = req.params.blogId
        console.log(blogId);
         

       if(!userId){
        return sendRes(res, 400, "blogId is required", "error", null)
       }

        const deleteblog = await BlogModel.findByIdAndDelete({
            _id: blogId,
            userID: userId
        })
          if(!deleteblog){
            return sendRes(res, 404, "blog not found or you are not authorized to delete this post","error", null )
          }
        return sendRes(res, 200, "blog Delete Successfully", "success", deleteblog)

     } catch (error) {
        return sendRes(res, 500, "Internal Server Error", "error", null)
     }                   
}


export const getBlogController = async (req, res) => {
   try{
    const userId = req.user.id;
    const blogId = req.params.blogId
    console.log(blogId);
    
    if(!userId) {
        return sendRes(res, 400, "User not found", "error", null)
    }
    
    const getBlog = await BlogModel.findById({ blogId})

    if(!getBlog){
        return sendRes(res, 400, "blog does not exist", "error", null)
    }

    return sendRes(res, 200, "Get blog Successfully", "success", getBlog)
} catch(error) {
     return sendRes(res, 500, "Internal Server Error", "error", null)
}
}

/*
export const getAllBlogController = async (req, res) => {

}


export const updateBlogController = async (req, res) => {

}

*/