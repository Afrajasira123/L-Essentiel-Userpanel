import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Essential from "./Components/Essential.jsx";
import Category from "./Components/Category.jsx";
import OurBrands from "./Components/OurBrands.jsx";
import Featured from "./Components/Featured.jsx";
import Reviews from "./Components/Reviews.jsx";
import Footer from "./Components/Footer.jsx";

const Home = () => {
  return (
    <div className="bg-purple-100">
      <Navbar />
      <Essential />
      <Category />
      <OurBrands />
      <Featured />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
