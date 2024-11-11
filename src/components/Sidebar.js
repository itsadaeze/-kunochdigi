import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/4 xl:w-1/6 bg-gray-200 flex-shrink-0 h-[50vh] mt-10 hidden md:flex">
      <ul className=" w-full">
        <li className='bg-blue-500 w-full border-b-2 border-white hover:bg-blue-900 '><Link to="/" className="block p-2 font-bold text-[24px] text-gray-800 hover:text-white hover:text-[20px]">Home</Link></li>
        <li className='bg-blue-500 w-full border-b-2 border-white hover:bg-blue-900 '><Link to="/table" className="block p-2 font-bold text-[24px] text-gray-800 hover:text-white hover:text-[20px]">Table</Link></li>
        <li className='bg-blue-500 w-full border-b-2 border-white hover:bg-blue-900 '><Link to="/form" className="block p-2 font-bold text-[24px] text-gray-800 hover:text-white hover:text-[20px]">Form</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
