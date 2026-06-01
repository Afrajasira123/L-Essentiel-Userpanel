import axios from "axios";
import React from "react";
import { base_url } from "../../utils/baseUrl.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const addToCart = async (productId) => {
  try {
    await axios.patch(
      `${base_url}/cart/add`,
      {
        productId,
        qty: 1,
      },
      { withCredentials: true, validateStatus: (status) => status < 500 },
    );

    return true;
  } catch (error) {
    console.error("Add to cart failed", error);
    return false;
  }
};

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [isInCart, setIsInCart] = useState(false);

  const checkIfInCart = async (productId) => {
    try {
      const res = await axios.get(`${base_url}/cart`, {
        withCredentials: true,
      });

      const exists = res.data.some((item) => item.product?._id === productId);

      setIsInCart(exists);
    } catch (err) {
      console.error("Failed to check cart");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${base_url}/product/${id}`);
        setProduct(res.data);
        setActiveImage(res.data.images?.[0] || res.data.image || "");

        checkIfInCart(res.data._id);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }
  const images = product.images?.length ? product.images : [product.image];

  return (
    <div className="max-w-7xl mx-auto px-10 py-24 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Image Section */}
        <div className="bg-[#f7f5f2] p-8 ">
          <img
            src={activeImage}
            alt={product.productName}
            className="w-full h-[520px] object-cover "
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-6 tracking-wide">
          <h1 className="text-5xl font-light tracking-wide text-stone-900">
            {product.productName}
          </h1>

          <p className="text-xl text-stone-700 leading-relaxed max-w-xl">{product.description}</p>
          <p className="uppercase tracking-[0.3em] text-sm text-stone-500">
            Brand: {product.brand}
          </p>

          <p className="text-3xl font-medium text-stone-900">price: ₹{product.price}</p>

          {/* Divider */}
          <div className="h-px w-20 bg-stone-300 my-4"></div>

          {/* Actions */}
          <div className="flex gap-6 mt-4">
            {!isInCart ? (
              <button
                className="cursor-pointer bg-stone-900 text-white px-10 py-4 tracking-widest uppercase text-sm hover:bg-stone-800 transition disabled:opacity-50"
                onClick={async (e) => {
                  e.stopPropagation();
                  const success = await addToCart(product._id);
                  if (success) setIsInCart(true);
                }}
              >
                Add to Cart
              </button>
            ) : (
              <Link to="/cart">
                <button className="cursor-pointer bg-stone-900 text-white px-10 py-4 tracking-widest uppercase text-sm hover:bg-stone-800 transition">
                  My Cart
                </button>
              </Link>
            )}

            <Link to="/wishlist">
              <button className="border border-black px-10 py-4 cursor-pointer tracking-widest uppercase text-sm hover:bg-stone-100 transition">
                Wishlist
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
