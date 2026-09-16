import CommentModel from "../model/Comment.model.js";
import { sendRes} from "../utils/sendRes.js";
import UserModel from "../model/User.model.js";

export const createcommentController = async (req, res) => {
  try {
    const userId = req.user.id;
    const blogId = req.params.blogId;
    const { comment } = req.body
    console.log(blogId);
    
    if(!blogId) {
       return sendRes(res, 400, "Post ID is required", "error", null)
    }
    if(!comment) {
        return sendRes(res, 400, "Comment is required", "error", null)
    }

    const newComment = await CommentModel.create({ userId: userId, blogId: blogId, comment: comment});
    return sendRes(res, 200, "Comment create successfully", "success", newComment )
    
} catch (error) {
    console.error(error);
     return sendRes(res, 500, "Internal Server Error", "error", null) 
  }
} 



