import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    heading: {
       type: String,
       required: true,
       trim:true
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;