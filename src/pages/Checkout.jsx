import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const navigate = useNavigate();

  useEffect(() => {
    const productdata = JSON.parse(localStorage.getItem("selectedProduct"));
    if (productdata) {
      setSelectedProduct(productdata);
    }
  }, []);

  const handlePlaceOrder = async () => {
    if (!address || !phone) {
      alert("Please fill address and phone number!");
      return;
    }

    const orderData = {
      product: selectedProduct,
      address,
      phone,
      paymentMethod,
      email: sessionStorage.getItem("userEmail"),
    };

    try {
      // Send order to backend
      const response = await fetch("http://localhost:8000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Order Placed Successfully!");

        // Update total orders
        const currentOrders = parseInt(localStorage.getItem("totalOrders")) || 0;
        localStorage.setItem("totalOrders", currentOrders + 1);

        navigate("/profile"); // Redirect to profile after placing order
      } else {
        alert("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Server error!");
    }
  };

  if (!selectedProduct) return <div className="p-8">No Product Selected!</div>;

  const getImageUrl = () => {
    if (!selectedProduct?.productImage) return ""; 

    // If productImage already has http (bracelet)
    if (selectedProduct.productImage.startsWith("http")) {
      return selectedProduct.productImage;
    } 
    // Else (offer) - add server URL manually
    else {
      return `http://localhost:8000/${selectedProduct.productImage}`;
    }
  };

  return (
    <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Side - Product Details */}
      <div className="bg-white shadow-md p-6 rounded-md">
        <img
            src={getImageUrl()}
            alt={selectedProduct.productName}
            className="w-64 h-64 object-cover rounded"
        //   
         />
        <h2 className="text-2xl font-bold">{selectedProduct.productName}</h2>
        <p className="text-gray-700 mt-2">{selectedProduct.productDescription}</p>
        <p className="text-xl mt-4">Price: ₹{selectedProduct.productPrice}</p>
      </div>

      {/* Right Side - Delivery Info */}
      <div className="bg-white shadow-md p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>

        {/* Full Name */}
        <p className="mb-4 text-gray-700 font-semibold">
          {sessionStorage.getItem("userEmail")?.split("@")[0].toLocaleUpperCase()}
        </p>

        {/* Address */}
        <input
          type="text"
          placeholder="Enter your address"
          className="border rounded w-full py-2 px-3 mb-4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Enter your phone number"
          className="border rounded w-full py-2 px-3 mb-4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Payment Options */}
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="border rounded w-full py-2 px-3 mb-6"
        >
          <option value="cash">Cash on Delivery</option>
          <option value="upi">UPI</option>
        </select>

        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
