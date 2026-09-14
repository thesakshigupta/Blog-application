import  LikeModel from "../model/Likes.model.js";
import { sendRes } from "../utils/sendRes.js";

export async function likeUnlikePostController(req, res) {
   try {
      const blogId = req.params.blogId;
      const userId = req.user.id;    
       
      console.log(blogId);

    if(!blogId) {
        return sendRes(res, 400, "Post ID is required", "error", null )
    }

    const isLiked = await LikeModel.findOne({userId: userId, blogId: blogId});

    if(!isLiked){
       const newLike = await LikeModel.create({ userId: userId, blogId: blogId})
       return sendRes(res, 200, "Post liked Successfully", "success", newLike);
    }
    else {
        const deletedLike = await LikeModel.findOneAndDelete({ userId: userId, blogId: blogId});
        return sendRes(res, 200, "Post unliked Successfully", "success", deletedLike);
    }
   } catch (error) {
       console.error(error);
     return sendRes(res, 500, "Internal Server Error", "error", null);
   }
}

