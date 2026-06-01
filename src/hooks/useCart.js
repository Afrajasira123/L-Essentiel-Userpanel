import { base_url } from "../utils/baseUrl";
import { useEffect, useState } from "react";
import axios from "axios";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${base_url}/cart`, {
        withCredentials: true,
      });
      const validCart = (res.data || []).filter(
        (item) => item && item.product && item.product._id,
      );
      setCart(validCart);
    } catch (error) {
      console.error("Cart fetch failed", error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    if (!product || !product._id) return;
    if (isInCart(product._id)) {
      alert("Item already in cart");
      return;
    }
    try {
      await axios.patch(
        `${base_url}/cart/add`,
        { productId: product._id },
        { withCredentials: true },
      );
      await fetchCart();
    } catch (error) {
      console.error("Add to cart failed", error);
      alert(error.response?.data?.error || "Error adding to cart");
    }
  };

  const isInCart = (productId) => {
    if (!cart || !productId) return false;

    const foundItem = cart.find((item) => {
      return (
        item &&
        item.product &&
        item.product._id &&
        item.product._id.toString() === productId.toString()
      );
    });

    return !!foundItem;
  };



  const updateCartQty = async (item, qty) => {
    try {
      await axios.patch(
        `${base_url}/cart/update/${item._id}`,
        { qty, itemId: item._id },
        { withCredentials: true },
      );
    } catch (error) {
      alert(error.response?.data?.error || "Something went wrong");
      throw error;
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const res = await axios.patch(
        `${base_url}/cart/remove`,
        { itemId },
        { withCredentials: true },
      );

      await fetchCart();
      return res.data.cart;
    } catch (error) {
      console.error("Remove failed", error);
      throw error;
    }
  };

  const clearCart = async () => {
    axios.patch(`${base_url}/cart/clear`, {}, { withCredentials: true });
  };

  return { cart, loading, fetchCart, removeFromCart, updateCartQty, clearCart, addToCart, isInCart };
};

export default useCart;
