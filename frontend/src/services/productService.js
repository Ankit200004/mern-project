import axios from "axios";

const BASE_URL = "http://localhost:3000/api/products";

export const getProducts = () => axios.get(`${BASE_URL}/get`);
export const uploadImage = (formData) => axios.post(`${BASE_URL}/upload-image`, formData);
export const addProduct = (data) => axios.post(`${BASE_URL}/add`, data);
export const updateProduct = (id, data) => axios.put(`${BASE_URL}/edit/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${BASE_URL}/delete/${id}`);
