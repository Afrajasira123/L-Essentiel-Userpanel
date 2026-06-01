import { useEffect, useState } from "react";
import { addToWishlist, removeFromWishlist, getWishlist, clearWishlist } from "../WishlistService/wishlist.js";

const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlist = async () => {
    try {
      const res = await getWishlist();
      const validItems = (res.data || []).filter(
        (item) => item && item._id && item.price !== undefined,
      );
      setWishlist(validItems);
    } catch (err) {
      console.error("Fetch wishlist failed", err);
      setWishlist([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const isWishlisted = (productId) => {
    return wishlist.find((item) => item._id === productId) ? true : false;
  };

  const toggleWishlist = async (product) => {
    const productId = product._id;
    const already = isWishlisted(productId);

    if (already) {
      setWishlist((prev) => prev.filter((item) => item._id !== productId));

      try {
        await removeFromWishlist(productId);
      } catch (err) {
        console.error("Remove wishlist failed", err);
        fetchWishlist();
      }
    } else {
      setWishlist((prev) => [...prev, product]);

      try {
        await addToWishlist(productId);
      } catch (err) {
        console.error("Add wishlist failed", err);
        setWishlist((prev) => prev.filter((item) => item._id !== productId));
      }
    }
  };

  const handleClearWishlist = async () => {
    try {
      setWishlist([]);
      await clearWishlist();
    } catch (err) {
      console.error("Clear wishlist failed", err);
      fetchWishlist();
    }
  };

  return { wishlist, loading, fetchWishlist, toggleWishlist, isWishlisted, clearWishlist: handleClearWishlist };
};

export default useWishlist;
