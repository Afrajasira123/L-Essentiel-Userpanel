import axios from "axios";
import { base_url } from "../utils/baseUrl";

const API = axios.create({
  baseURL: `${base_url}/wishlist`,
  withCredentials: true,
});

export const addToWishlist = (productId) => API.patch("/add", { productId });

export const removeFromWishlist = (productId) => API.patch(`/remove/${productId}`, {});

export const getWishlist = () => API.get("/");

export const clearWishlist = () => API.patch("/clear");
