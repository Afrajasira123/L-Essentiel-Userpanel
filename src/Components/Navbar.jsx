import React from "react";
import { NavLink, Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { PiHeartThin } from "react-icons/pi";
import ProfileDropdown from "./Dropdown/ProfileDropdown";

const Navbar = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const updateUser = () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to parse user", error);
        setUser(null);
      }
    };

    updateUser(); // Initial check

    window.addEventListener("auth-change", updateUser);
    return () => window.removeEventListener("auth-change", updateUser);
  }, []);

  return (
    <>
      <div className="h-15 flex justify-center items-center border-b ">L 'Essentiel</div>
      <header className="flex items-center">
        <div className="h-15 flex gap-10 justify-center ml-115 items-center text-sm border-0">
          <NavLink to={"/hobo"}>Hobo</NavLink>
          <NavLink to={"/crochet"}>Crochet</NavLink>
          <NavLink to={"/leather"}>Leather</NavLink>
          <NavLink to={"/travel"}>Travelbag</NavLink>
          <NavLink to={"/totes"}>Totes</NavLink>
          <NavLink to={"/minaudiere"}>Minaudiere</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        <div className="flex items-center gap-5 text-lg ml-50 ">
          <ProfileDropdown user={user} />
          <button className="cursor-pointer">
            <Link to="/cart">
              <CiShoppingCart />
            </Link>
          </button>
          <Link className="cursor-pointer " to="/wishlist">
            <PiHeartThin />
          </Link>
          <Link
            to="/login"
            className="text-base cursor-pointer border rounded-sm px-5 py-1 hover:bg-purple-200"
          >
            Sign In
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { IoPersonOutline } from "react-icons/io5";
// import { CiSearch } from "react-icons/ci";
// import { PiHeartThin } from "react-icons/pi";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Top Brand */}
//       <div className="h-14 flex justify-center items-center border-b text-lg">L 'Essentiel</div>

//       <header className="flex items-center justify-between px-6 md:px-16 h-16">
//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-8 text-sm sm:ml-100">
//           <NavLink to="/crochet">Crochet</NavLink>
//           <NavLink to="/hobo">Hobo</NavLink>
//           <NavLink to="/leather">Leather</NavLink>
//           <NavLink to="/travel">Travelbag</NavLink>
//           <NavLink to="/totes">Totes</NavLink>
//           <NavLink to="/minaudiere">Minaudiere</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//         </nav>

//         {/* Right Icons */}
//         <div className="flex items-center gap-5 text-xl">
//           <IoPersonOutline className="cursor-pointer" />
//           <CiSearch className="cursor-pointer" />
//           <PiHeartThin className="cursor-pointer" />

//           {/* Sign In (hidden on small screens) */}
//           <span className="hidden md:block text-base cursor-pointer border rounded-sm px-5 lg:py-1 hover:bg-purple-200">
//             Sign In
//           </span>

//           {/* Hamburger */}
//           <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
//             {open ? <HiX /> : <HiMenu />}
//           </button>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden flex flex-col gap-4 px-6 py-4 border-t text-sm bg-white">
//           <NavLink to="/crochet" onClick={() => setOpen(false)}>
//             Crochet
//           </NavLink>
//           <NavLink to="/hobo" onClick={() => setOpen(false)}>
//             Hobo
//           </NavLink>
//           <NavLink to="/leather" onClick={() => setOpen(false)}>
//             Leather
//           </NavLink>
//           <NavLink to="/travel" onClick={() => setOpen(false)}>
//             Travelbag
//           </NavLink>
//           <NavLink to="/totes" onClick={() => setOpen(false)}>
//             Totes
//           </NavLink>
//           <NavLink to="/minaudiere" onClick={() => setOpen(false)}>
//             Minaudiere
//           </NavLink>
//           <NavLink to="/contact" onClick={() => setOpen(false)}>
//             Contact
//           </NavLink>

//           <span className="border rounded-sm px-4 py-2 w-fit hover:bg-purple-200">Sign In</span>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
