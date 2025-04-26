import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/admin/getProduct")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        setProducts(products.filter(product => product._id !== id));
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  return (
    <div className="ml-72 p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Products</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Image</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Category</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border-t">
              <td className="p-2">
                <img src={product.productImage} alt={product.productName} className="w-16 h-16 object-cover" />
              </td>
              <td className="p-2">{product.productName}</td>
              <td className="p-2">₹{product.productPrice}</td>
              <td className="p-2">{product.productCategory}</td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline mr-4">Edit</button>
                <button onClick={() => handleDelete(product._id)} className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
