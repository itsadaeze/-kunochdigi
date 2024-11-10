import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">Logo</div>
      <div>
        <Link to="/" className="mx-4">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
