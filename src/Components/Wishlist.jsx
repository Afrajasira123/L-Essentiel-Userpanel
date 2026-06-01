import React from "react";
import { Link } from "react-router-dom";
import { PiHeartFill } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import useWishlist from "../hooks/useWishlist.js";
import useCart from "../hooks/useCart.js";
const LuxuryLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <svg className="w-12 h-12 animate-spin" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="square"
          strokeDasharray="90 150"
          strokeDashoffset="0"
        />
      </svg>
    </div>
  );
};

const Wishlist = () => {
  const { wishlist, loading, toggleWishlist, clearWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();

  if (loading) return <LuxuryLoader />;

  return (
    <div className="px-10 py-16 tracking-widest">
      <div className="text-center mb-16 relative">
        <h1 className="text-5xl font-medium">Your Wishlist</h1>
        <p className="text-gray-500 mt-4">Pieces you love. Save them for later.</p>

        {wishlist.length > 0 && (
          <button
            onClick={clearWishlist}
            className="absolute top-0 left-0 text-red-600 text-sm hover:underline transition-colors uppercase tracking-widest"
          >
            Clear All
          </button>
        )}
      </div>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center mt-24">
          <PiHeartFill className="text-gray-300 text-6xl mb-6" />
          <p className="text-gray-600 text-lg">Your wishlist is currently empty</p>
          <Link to="/" className="mt-6 border px-8 py-3 text-sm hover:bg-black hover:text-white">
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist
            .filter((item) => item && item._id)
            .map((item) => (
              <div key={item._id} className="group relative border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100"
                >
                  <PiHeartFill className="text-red-700 text-xl" />
                </button>

                <Link to={`/details/${item._id}`}>
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="h-[360px] w-full object-cover"
                  />
                </Link>
                <div className="flex gap-4">
                  <div className="p-4 ">
                    <h2 className="text-sm font-medium uppercase tracking-wide">
                      {item.productName}
                    </h2>
                    <p className="text-gray-600 mt-2">₹{item.price}</p>
                  </div>
                  <div className="flex-1 flex items-end justify-end p-4">
                    <button
                      onClick={() => addToCart(item)}
                      className={`text-2xl transition-colors ${isInCart(item._id) ? "text-black" : "text-gray-600 hover:text-black"
                        }`}
                    >
                      <CiShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
