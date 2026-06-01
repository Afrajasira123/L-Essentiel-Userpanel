import React from "react";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-zinc-200">
      <div className="flex justify-center py-24">
        <h1 className="text-9xl  tracking-widest">L 'Essentiel</h1>
      </div>

      <div className="flex justify-between px-32 text-sm tracking-widest uppercase text-gray-600">
        <div className="space-y-4">
          <p className="hover:text-black cursor-pointer transition">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Home
            </Link>
          </p>
          <p className="hover:text-black cursor-pointer transition">
            <Link to="/contact">Contact</Link>
          </p>
          <p className="hover:text-black cursor-pointer transition">L’Essential App</p>
        </div>

        <div className="space-y-4">
          <p className="hover:text-black cursor-pointer transition">Terms & Conditions</p>
          <p className="hover:text-black cursor-pointer transition">Shipping Policy</p>
          <p className="hover:text-black cursor-pointer transition">Refund Policy</p>
        </div>

        <div>
          <p className="mb-4 text-gray-400">Newsletter</p>
          <input
            type="email"
            placeholder="Email address"
            className="
              bg-transparent border-b border-gray-400
              outline-none py-2 tracking-widest text-sm
              focus:border-black transition
            "
          />
        </div>
      </div>

      <div className="mx-32 my-16 border-t border-gray-200" />

      <div className="flex justify-between items-center px-32 pb-12 text-xs tracking-widest uppercase text-gray-500">
        <p>© 2026 L’Essential</p>

        <div className="flex gap-10 text-lg">
          <FiInstagram className="cursor-pointer hover:text-black transition" />
          <FiTwitter className="cursor-pointer hover:text-black transition" />
          <FaWhatsapp className="cursor-pointer hover:text-black transition" />
        </div>

        <p>Designed for the Refined</p>
      </div>
    </footer>
  );
};

export default Footer;
