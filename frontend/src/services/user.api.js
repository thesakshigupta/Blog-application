import api from "./api.js";

export const signup = async (data) => {
  const res = await api.post("/user/register", data);
  return res.data;
};

export const login = async (data) => {
  const res = await api.post("/user/login", data);
  return res.data;
};

export const getUser = async () => {
  const res = await api.get("/user/getuser");
  return res.data;
};

export const logout = async () => {
  const res = await api.get("/user/logout");
  return res.data;
};
