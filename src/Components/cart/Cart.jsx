import React, { useEffect, useState } from "react";
import QtySelector from "./QtySelector.jsx";
import useCart from "../../hooks/useCart.js";
import Checkout from "../../Components/payment/Checkout.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

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

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const { cart: serverCart, loading, removeFromCart, updateCartQty, clearCart } = useCart();

  useEffect(() => {
    setCart(serverCart || []);
  }, [serverCart]);

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleRemove = async (itemId) => {
    try {
      await removeFromCart(itemId);
    } catch (err) {
      console.log("Remove failed");
    }
  };

  const handleClearCart = async () => {
    const prevCart = cart;
    setCart([]);
    try {
      await clearCart();
    } catch (err) {
      setCart(prevCart);
    }
  };

  const handleIncrease = async (item) => {
    if (item.product.stock === 0) return;
    if (item.qty >= item.product.stock) return;

    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem._id === item._id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem,
      ),
    );

    try {
      await updateCartQty(item, item.qty + 1);
    } catch {
      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem._id === item._id ? { ...cartItem, qty: item.qty } : cartItem,
        ),
      );
    }
  };

  const handleDecrease = async (item) => {
    if (item.product.stock === 0) return;
    if (item.qty === 1) return;

    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem._id === item._id ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem,
      ),
    );

    try {
      await updateCartQty(item, item.qty - 1);
    } catch {
      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem._id === item._id ? { ...cartItem, qty: item.qty } : cartItem,
        ),
      );
    }
  };

  if (loading) return <LuxuryLoader />;

  if (cart.length === 0) {
    return <p className="text-center mt-20">Your cart is empty</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-10 py-24">
      <h1 className="text-4xl mb-10">Your Cart</h1>

      <button
        onClick={handleClearCart}
        className="mb-8 text-sm uppercase tracking-wider text-red-600 hover:underline"
      >
        Clear Cart
      </button>

      <div className="space-y-6">
        {cart.map((item) => {
          if (!item || !item.product) return null;
          const isOutOfStock = Number(item.product?.stock) === 0;

          return (
            <div
              key={item._id}
              className={`flex gap-6 items-center border-b pb-6 ${isOutOfStock ? "opacity-60" : ""
                }`}
            >
              <img
                src={item.product.image}
                alt={item.product.productName}
                className="w-28 h-36 object-cover"
              />

              <div className="flex-1">
                <h2 className="text-xl">{item.product.productName}</h2>
                <p className="text-stone-600">₹{item.product.price}</p>
              </div>

              {isOutOfStock ? (
                <p className="text-sm text-red-500 font-medium">Product currently unavailable</p>
              ) : (
                <QtySelector
                  qty={item.qty}
                  stock={Number(item.product?.stock)}
                  onIncrease={() => handleIncrease(item)}
                  onDecrease={() => handleDecrease(item)}
                />
              )}

              <button
                onClick={() => handleRemove(item._id)}
                className="text-sm text-red-500 hover:underline ml-6"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-12 border-t pt-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-xl font-medium">Total</p>
          <p className="text-xl font-semibold">₹{cartTotal}</p>
        </div>

        <button
          onClick={handleCheckout}
          className="cursor-pointer w-full bg-black text-white py-3 uppercase tracking-widest hover:opacity-90 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
