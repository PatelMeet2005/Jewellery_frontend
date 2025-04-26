import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiBox, FiUser, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // Remove token
    navigate('/admin-login');              // Redirect to login page
  };

  return (
    <div className="h-screen w-64 bg-white shadow-lg flex flex-col justify-between">
      {/* Sidebar Top */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Admin Panel</h1>

        <nav className="flex flex-col gap-4">
          <div
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-all"
          >
            <FiHome className="text-xl" />
            <span className="text-base font-medium">Dashboard</span>
          </div>

          <div
            onClick={() => navigate('/admin/products')}
            className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-all"
          >
            <FiBox className="text-xl" />
            <span className="text-base font-medium">Products</span>
          </div>

          <div
            onClick={() => navigate('/admin/users')}
            className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-all"
          >
            <FiUser className="text-xl" />
            <span className="text-base font-medium">Users</span>
          </div>
        </nav>
      </div>

      {/* Sidebar Bottom (Sign Out) */}
      <div className="p-6">
        <div
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-lg cursor-pointer transition-all"
        >
          <FiLogOut className="text-xl" />
          <span className="text-base font-semibold">Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
