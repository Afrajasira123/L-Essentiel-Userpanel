import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PiHeartThin, PiHeartFill } from "react-icons/pi";
import { base_url } from "../../utils/baseUrl";
import useWishlist from "../../hooks/useWishlist.js";
import PaginationComponent from "./Pagination.jsx";

const CategoryPage = ({ title, subtitle, category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { toggleWishlist, isWishlisted } = useWishlist();

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${base_url}/product`, {
          withCredentials: true,
          params: { category, currentPage: page },
        });
        setProducts(res.data.products || []);
        setTotalPages(res.data.totalPages || 1);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, page]);

  if (loading) {
    return <p className="px-16 py-12">Loading…</p>;
  }

  return (
    <div className="px-15 py-15 tracking-widest">
      <div className="text-center mb-15">
        <h1 className="text-6xl font-medium">{title}</h1>
        <p className="text-gray-600 mt-3">{subtitle}</p>
      </div>

      {products.length === 0 ? (
        <p className="text-center">No products found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {products.map((item) => (
              <div
                key={item._id}
                className="relative border h-[400px] rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleWishlist(item);
                  }}
                  className="absolute top-3 right-3 z-10"
                >
                  {isWishlisted(item._id) ? (
                    <PiHeartFill className="text-red-600 text-xl" />
                  ) : (
                    <PiHeartThin className="text-xl" />
                  )}
                </button>

                <Link to={`/details/${item._id}`}>
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="h-[300px] w-full object-cover"
                  />

                  <div className="p-3">
                    <h2 className="text-sm font-medium">{item.productName}</h2>
                    <p className="text-gray-800">{item.description}</p>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <PaginationComponent
            totalPages={totalPages}
            page={page}
            handleChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default CategoryPage;
