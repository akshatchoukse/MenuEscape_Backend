import React, { useState, useEffect } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
const Header = () => {
 
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4 shadow-md">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <div className="flex items-center space-x-6">
      <FaBell
          className="text-xl cursor-pointer hover:text-gray-400"
         
        />
        <FaUserCircle className="text-xl cursor-pointer hover:text-gray-400" />
      </div>
    </header>
  );
};

export default Header;
