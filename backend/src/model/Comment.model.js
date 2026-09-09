import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
   
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true
    },
    comment: {
     type: String,
     trim: true,
    },
},
{
     timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema)
export default Comment;