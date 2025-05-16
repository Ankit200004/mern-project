import axios from "axios";

const BASE_URL = "http://localhost:3000/api/cart";

export const addToCart = (data) => axios.post(`${BASE_URL}/add`, data);
export const getCartItems = (userId) => axios.get(`${BASE_URL}/get/${userId}`);
export const updateCartItemQty = (data) => axios.put(`${BASE_URL}/update-cart`, data);
export const deleteCartItem = (userId, productId) =>
  axios.delete(`${BASE_URL}/${userId}/${productId}`);
