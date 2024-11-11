
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">Kunochdigi</div>
      <div>
        <Link to="/" className="mx-4 hidden md:flex">Dashboard</Link>

        <div className="md:hidden" onClick={toggleMenu}>
        <CiMenuFries />
        </div>
      </div>
       {/* Mobile Menu */}
       {isMenuOpen && (
        <div className="absolute top-10 left-0 right-0 bg-gray-800 h-full w-1/2 text-white p-4 md:hidden ">
          <Link to="/" className="block py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/table" className="block py-2" onClick={toggleMenu}>Table</Link>
          <Link to="/form" className="block py-2" onClick={toggleMenu}>Form</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
