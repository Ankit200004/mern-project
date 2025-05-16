import axios from "axios";

const BASE_URL = "http://localhost:3000/api/feature";
const UPLOAD_URL = "http://localhost:3000/api/products";

export const addFeatureImage = (imageUrl) =>
  axios.post(`${BASE_URL}/add`, { image: imageUrl });

export const uploadImage = (formData) => axios.post(`${UPLOAD_URL}/upload-image`, formData);

export const getFeatureImages = () =>
  axios.get(`${BASE_URL}/get`);

export const deleteFeatureImage = (id) =>
  axios.delete(`${BASE_URL}/delete/${id}`);
