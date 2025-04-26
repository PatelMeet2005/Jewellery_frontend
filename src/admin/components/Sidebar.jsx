import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 fixed">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/admin/dashboard" className="hover:text-yellow-400">Dashboard</Link>
        <Link to="/admin/products" className="hover:text-yellow-400">Manage Products</Link>
        <Link to="/admin/add-product" className="hover:text-yellow-400">Add Product</Link>
        <Link to="/admin/offers" className="hover:underline">Manage Offers</Link>
        <Link to="/admin/add-offer" className="hover:underline">Add Offer</Link>
      </nav>
    </div>
  );
};

export default Sidebar;