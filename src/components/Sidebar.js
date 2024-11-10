import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-200 h-full p-4">
      <ul className="space-y-4">
        <li><Link to="/" className="block p-2 text-gray-800">Home</Link></li>
        <li><Link to="/table" className="block p-2 text-gray-800">Table</Link></li>
        <li><Link to="/form" className="block p-2 text-gray-800">Form</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
