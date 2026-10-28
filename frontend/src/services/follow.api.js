import api from "./api.js";

export const toggleFollow = async (userId) => {
  const res = await api.get(`/follow/followUser/${userId}`);
  return res.data;
};
