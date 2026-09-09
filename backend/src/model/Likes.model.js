import mongoose from "mongoose";
const likesSchema = new mongoose.Schema({
 userId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User",
   required: true, 
 },
 blogId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Blog",
   required: true,
 },


}, {timestamps: true} 
);

const Like = mongoose.model("Like", likesSchema);
export default Like


