import api from "./api.js";

export const createComment = async (blogId, data) => {
  const res = await api.post(`/comment/commentblog/${blogId}`, data);
  return res.data;
};
