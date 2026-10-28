import { sendRes } from "../utils/sendRes.js";
import BlogModel from "../model/Blog.model.js";
import UserModel from "../model/User.model.js";

export const createBlogController = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { heading, content } = req.body;

    if (!userId) {
      return sendRes(res, 401, "User not authenticated", "error", null);
    }

    if (!heading || !heading.trim() || !content || !content.trim()) {
      return sendRes(res, 400, "Title and content are required", "error", null);
    }

    const isUser = await UserModel.findById(userId);
    if (!isUser) {
      return sendRes(res, 404, "User does not exist in database", "error", null);
    }

    const blog = await BlogModel.create({
      heading: heading.trim(),
      content: content.trim(),
      userId: userId,
    });

    const populatedBlog = await BlogModel.findById(blog._id).populate("userId", "username avatar");

    return sendRes(res, 201, "Blog created successfully", "success", populatedBlog || blog);
  } catch (error) {
    console.error("Create blog error:", error);
    return sendRes(res, 500, "Internal Server Error", "error", null);
  }
};

export const deleteblogController = async (req, res) => {
  try {
    const userId = req.user?.id;
    const blogId = req.params.blogId;

    if (!userId) {
      return sendRes(res, 401, "Unauthorized", "error", null);
    }

    if (!blogId) {
      return sendRes(res, 400, "Blog ID is required", "error", null);
    }

    const deleteblog = await BlogModel.findOneAndDelete({
      _id: blogId,
      userId: userId,
    });

    if (!deleteblog) {
      return sendRes(res, 404, "Blog not found or you are not authorized to delete this post", "error", null);
    }

    return sendRes(res, 200, "Blog deleted successfully", "success", deleteblog);
  } catch (error) {
    console.error("Delete blog error:", error);
    return sendRes(res, 500, "Internal Server Error", "error", null);
  }
};

export const getBlogController = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return sendRes(res, 401, "Unauthorized", "error", null);
    }

    const getBlog = await BlogModel.find({ userId: userId })
      .sort({ createdAt: -1 })
      .populate("userId", "username avatar");

    return sendRes(res, 200, "User blogs retrieved successfully", "success", getBlog);
  } catch (error) {
    return sendRes(res, 500, "Internal Server Error", "error", { message: error.message });
  }
};

export const getAllBlogController = async (req, res) => {
  try {
    const getAllblog = await BlogModel.find()
      .sort({ createdAt: -1 })
      .populate("userId", "username avatar");

    return sendRes(res, 200, "All blogs retrieved successfully", "success", getAllblog);
  } catch (error) {
    console.error("Get all blogs error:", error);
    return sendRes(res, 500, "Internal Server Error", "error", null);
  }
};

export const updateBlogController = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { heading, content } = req.body;
    const blogId = req.params.blogId;

    if (!userId) {
      return sendRes(res, 401, "Unauthorized", "error", null);
    }

    if (!heading || !heading.trim() || !content || !content.trim()) {
      return sendRes(res, 400, "Title and content are required", "error", null);
    }

    const updateblog = await BlogModel.findOneAndUpdate(
      { _id: blogId, userId: userId },
      { heading: heading.trim(), content: content.trim() },
      { new: true }
    ).populate("userId", "username avatar");

    if (!updateblog) {
      return sendRes(res, 404, "Blog not found or unauthorized", "error", null);
    }

    return sendRes(res, 200, "Blog updated successfully", "success", updateblog);
  } catch (error) {
    console.error("Update blog error:", error);
    return sendRes(res, 500, "Internal Server Error", "error", null);
  }
};
