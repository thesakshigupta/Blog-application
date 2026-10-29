import followModel from "../model/Follow.model.js";
import { sendRes } from "../utils/sendRes.js";

export const followUnfollowUserController = async (req, res) => {
      try {
        const followToUserID = req.params.userId
        const followFromUserID = req.user.id
        
        if(!followToUserID) {
           return sendRes(res, 400, "User ID is required", "error", null)
        }
        
        if (followToUserID === followFromUserID) {
          return sendRes(res, 400, "You cannot follow/unfollow yourself", "error", null)
        }
       
        const isAlreadyFollowing = await followModel.findOne({followTo: followToUserID, followFrom: followFromUserID});

        if(isAlreadyFollowing){
          await followModel.findOneAndDelete({followTo: followToUserID, followFrom: followFromUserID})
          return sendRes(res, 200, "User unfollow successfully", "success", null)
        }
       else{
        const newfollow = await followModel.create({followTo: followToUserID, followFrom: followFromUserID})
        return sendRes(res, 200, "User followed successfully", "successs", newfollow )
       }
      } catch (error) {
        return sendRes(res, 500, "Internal Server Error", "error", null)
}          
}



