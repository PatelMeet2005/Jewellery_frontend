import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const Bracelets = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:8000/admin/getProduct");
        const data = await response.json();
        console.log("Fetched Products:", data.data);
        setProductsData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Bracelets Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsData
          .filter((product) => product.productCategory === "Bracelet")
          .map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                  <FiHeart className="text-gray-600 hover:text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.productName}</h2>
                <p className="text-gray-600 text-sm mb-4">{product.productDescription}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-500 text-sm">Weight: {product.productWeight}</span>
                  <span className="text-gray-500 text-sm">Purity: {product.productPurity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">₹{product.productPrice}</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center gap-2">
                    <FiShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Bracelets;
