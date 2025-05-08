import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true, 
})

export const signup = (data) => API.post("/sign-up",data);
export const login = (data) => API.post("/login",data);