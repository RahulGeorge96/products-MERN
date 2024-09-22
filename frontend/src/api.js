import axios from "axios";

const API = axios.create({ baseURL: "https://products-mern.onrender.com" });

export const registerUser = (userData) => API.post("api/auth/register", userData);
export const loginUser = (userData) => API.post("api/auth/login", userData);
export const fetchProducts = () => API.get("api/products");
