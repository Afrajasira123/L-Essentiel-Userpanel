import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Hobo from "./Components/categories/Hobo";
import Crochet from "./Components/categories/Crochet";
import TravelBag from "./Components/categories/TravelBag";
import Totes from "./Components/categories/Totes";
import Leather from "./Components/categories/Leather";
import Minaudiere from "./Components/categories/Minaudiere";
import Details from "./Components/categories/Details";
import Wishlist from "./Components/Wishlist";
import SignIn from "./Components/signin/SignIn";
import Cart from "./Components/cart/Cart";
import ProfileAddress from "./Components/Dropdown/ProfileAddress";
import Contact from "./Components/Contact";
import MyOrders from "./Components/Dropdown/MyOrders";
import Checkout from "./Components/payment/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/hobo" element={<Hobo />} />
      <Route path="/crochet" element={<Crochet />} />
      <Route path="/travel" element={<TravelBag />} />
      <Route path="/totes" element={<Totes />} />
      <Route path="/leather" element={<Leather />} />
      <Route path="/minaudiere" element={<Minaudiere />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<ProfileAddress />} />
      <Route path="/order" element={<MyOrders />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default App;
