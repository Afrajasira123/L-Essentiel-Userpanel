import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import { base_url } from "../utils/baseUrl";

const curtainVariant = {
  hidden: { scaleY: 1 },
  visible: {
    scaleY: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${base_url}/product/featured`);
        if (res.data && res.data.products) {
          setProducts(res.data.products);
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="bg-[#f3e6d8] mt-40 py-15 px-20 p tracking-widest">
      <div>
        <div className="flex gap-100 pb-20">
          <h1 className="text-3xl font-semibold">New In</h1>
          <h2 className=" text-xl">EMBRACE OUR NEWEST CHIC ARRIVALS TO ELEVATE YOUR LOOKS</h2>
        </div>
        <motion.div
          className="relative flex  gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {products.map((item, index) => (
            <div key={index} className=" relative w-[350px] overflow-hidden">
              <Link to={`/details/${item._id}`}>
                <div className="relative z-0">
                  <img
                    src={item.image}
                    className="w-full h-[400px] object-cover"
                    alt={item.productName}
                  />
                  <div className="mt-3">
                    <h3 className="text-md font-medium mt-5">{item.productName}</h3>
                    <p className="text-sm text-gray-700">₹{item.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <motion.div
            variants={curtainVariant}
            className="absolute inset-0 bg-[#f3e6d8]  origin-bottom z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
