import api from "./api.js";

export const createBlog = async (data) => {
  const res = await api.post("/blog/createblog", data);
  return res.data;
};

export const deleteBlog = async (blogId) => {
  const res = await api.delete(`/blog/delete/${blogId}`);
  return res.data;
};

export const getMyBlogs = async () => {
  const res = await api.get("/blog/read-blog");
  return res.data;
};

export const getAllBlogs = async () => {
  const res = await api.get("/blog/read-allblog");
  return res.data;
};

export const updateBlog = async (blogId, data) => {
  const res = await api.put(`/blog/update-blog/${blogId}`, data);
  return res.data;
};
