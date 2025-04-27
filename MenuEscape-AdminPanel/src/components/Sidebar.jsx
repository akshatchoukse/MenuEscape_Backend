import React from "react";
import {
  FaHome,
  FaPlusCircle,
  FaChartBar,
  FaMoneyBillWave,
  FaUsers,
  FaHistory,
  FaUniversity,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-gray-900 text-white w-full shadow-md z-50">
      <ul className="flex justify-around py-2 border-t border-gray-700">
        <li
          onClick={()=> navigate('/')}
          className="flex flex-col items-center cursor-pointer p-2 hover:text-blue-400 transition duration-300"
        >
          <FaHome className="text-2xl" />
          <span className="text-sm mt-1">Dashboard</span>
        </li>
        <li
          onClick={()=> navigate('/product')}
          className="flex flex-col items-center cursor-pointer p-2 hover:text-blue-400 transition duration-300"
        >
          <FaPlusCircle className="text-2xl" />
          <span className="text-sm mt-1">Food Item</span>
        </li>
        <li
          onClick={()=> navigate('/order')}
          className="flex flex-col items-center cursor-pointer p-2 hover:text-blue-400 transition duration-300"
        >
          <FaPlusCircle className="text-2xl" />
          <span className="text-sm mt-1">Order</span>
        </li>
        
        <li
         
          className="flex flex-col items-center cursor-pointer p-2 hover:text-blue-400 transition duration-300"
        >
          <FaCog className="text-2xl" />
          <span className="text-sm mt-1">Settings</span>
        </li>
        <li
         
          className="flex flex-col items-center cursor-pointer p-2 hover:text-red-400 transition duration-300"
        >
          <FaSignOutAlt className="text-2xl" />
          <span className="text-sm mt-1">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
