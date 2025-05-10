import axios from "axios";

const API = "http://localhost:3000/api/auth";

export const login = async (data) => {
  const res = await axios.post(`${API}/login`, data);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const signup = async (data) => {
  const res = await axios.post(`${API}/signup`, data);
  return res.data;
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No auth token found");

  const res = await axios.get(`${API}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
