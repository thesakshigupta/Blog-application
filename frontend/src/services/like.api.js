import api from "./api.js";

export const toggleLike = async (blogId) => {
  const res = await api.get(`/like/likeUser/${blogId}`);
  return res.data;
};
