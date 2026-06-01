import React, { useEffect, useRef, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import useUserLogout from "../../hooks/useUserLogout.js";

const ProfileDropdown = ({ user }) => {
  const { logout } = useUserLogout();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    const confirmLogout = window.confirm("You are signing out here?");
    if (!confirmLogout) return;

    await logout();
    setOpen(false);
  };

  return (
    <div className="relative flex items-center" ref={dropdownRef}>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="text-xl cursor-pointer p-1  hover:opacity-70 transition flex items-center justify-center"
      >
        {user && user.username ? (
          <div className="w-8 h-8 rounded-full border p-1 flex items-center justify-center text-sm font-medium lowercase">
            {user.username.charAt(0)}
          </div>
        ) : (
          <BsPerson />
        )}
      </button>


      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-50 transition-all duration-150 ease-out origin-top">
          <div className="">

            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="block px-5 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition"
            >
              Profile
            </Link>

            <div className="h-px bg-gray-100 " />

            <div>

              <Link
                to="/order"
                onClick={() => setOpen(false)}
                className="block px-5 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition"
              >
                My orders
              </Link>

              <div className="h-px bg-gray-100 " />


              <button
                type="button"
                onClick={handleLogout}
                className="cursor-pointer w-full text-left px-5 py-2 text-sm text-gray-800 hover:bg-gray-50 transition"
              >
                Signout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
