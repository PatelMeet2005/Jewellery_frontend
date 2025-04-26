import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null); // for editing popup

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/admin/getProduct");
      console.log("Fetched Products:", response.data.data);
      
      if (Array.isArray(response.data.data)) {
        setProducts(response.data.data);
      } else {
        console.error("Fetched data is not an array:", response.data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } 
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8000/admin/deleteProduct/${id}`);
        setProducts(products.filter(product => product._id !== id));
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  const handleEditClick = (product) => {
    setEditProduct(product); // open edit modal
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/admin/updateProduct/${editProduct._id}`, editProduct);
      alert('Product updated successfully!');
      setEditProduct(null);
      fetchProducts();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditProduct(null);
  };

  return (
    <div className="ml-72 p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Products</h2>

      {/* Edit Modal */}
      {editProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <form onSubmit={handleEditSubmit} className="bg-white p-6 rounded shadow-md w-96 space-y-4">
            <h3 className="text-xl font-bold mb-4">Edit Product</h3>

            <input
              type="text"
              name="productName"
              placeholder="Name"
              value={editProduct.productName}
              onChange={handleEditChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="productPrice"
              placeholder="Price"
              value={editProduct.productPrice}
              onChange={handleEditChange}
              className="w-full p-2 border rounded"
            />
            <select
              name="productCategory"
              value={editProduct.productCategory}
              onChange={handleEditChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Category</option>
              <option value="Ring">Ring</option>
              <option value="Earrings">Earrings</option>
              <option value="Necklace">Necklace</option>
              <option value="Bracelet">Bracelet</option>
            </select>
            <select
              name="productMetal"
              value={editProduct.productMetal}
              onChange={handleEditChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Metal</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Platinum">Platinum</option>
            </select>
            <select
              name="productPurity"
              value={editProduct.productPurity}
              onChange={handleEditChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Purity</option>
              <option value="18K">18K</option>
              <option value="22K">22K</option>
              <option value="24K">24K</option>
            </select>

            <div className="flex justify-end space-x-4">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
              <button type="button" onClick={handleCancelEdit} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Products Table */}
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Image</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Category</th>
            <th className="p-2">Metal</th>
            <th className="p-2">Purity</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product._id} className="border-t">
                <td className="p-2">
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="p-2">{product.productName}</td>
                <td className="p-2">₹{product.productPrice}</td>
                <td className="p-2">{product.productCategory}</td>
                <td className="p-2">{product.productMetal}</td>
                <td className="p-2">{product.productPurity}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="text-blue-500 hover:underline mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-2 text-center" colSpan="7">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
