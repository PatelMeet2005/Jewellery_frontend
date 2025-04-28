import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddOfferPage = () => {
  const [offer, setOffer] = useState({
    title: '',
    discount: '',
    description: '',
    productId: '', // FIX: Use productId here directly
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/admin/getProduct");
      console.log("Fetched Products for Offer:", response.data.data);

      if (Array.isArray(response.data.data)) {
        setProducts(response.data.data);
      } else {
        console.error("Fetched products are not an array!");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!offer.productId) { // FIX: Check productId directly
      alert("Please select a product to add offer!");
      return;
    }

    try {
      await axios.post('http://localhost:8000/admin/addOffer', offer);
      alert('Offer added successfully!');
      // Clear the form
      setOffer({
        title: '',
        discount: '',
        description: '',
        productId: '',
      });
    } catch (error) {
      console.error("Error adding offer:", error);
    }
  };

  return (
    <div className="ml-72 p-6">
      <h2 className="text-2xl font-bold mb-6">Add Offer</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={offer.title}
          onChange={handleChange}
          placeholder="Offer Title"
          className="border p-2 w-full"
          required
        />
        <input
          type="number"  // Changed to number input
          name="discount"
          value={offer.discount}
          onChange={handleChange}
          placeholder="Discount %"
          className="border p-2 w-full"
          required
        />
        <textarea
          name="description"
          value={offer.description}
          onChange={handleChange}
          placeholder="Offer Description"
          className="border p-2 w-full"
          rows="4"
          required
        />

        {/* Product Selection Dropdown */}
        <select
          name="productId"  // FIX: Use productId here
          value={offer.productId}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        >
          <option value="">Select a Product</option>
          {products.map((product) => (
            <option key={product._id} value={product._id}>
              {product.productName} - ₹{product.productPrice}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Offer
        </button>
      </form>

      {loading && <p>Loading products...</p>}
    </div>
  );
};

export default AddOfferPage;
