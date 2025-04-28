import React from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const ProceedToPayButton = ({ product }) => {
  const navigate = useNavigate();

  const handleProceedToPay = () => {
    const userEmail = sessionStorage.getItem("userEmail");

    if (!userEmail) {
      alert("You need to login to place an order."); // Redirect to login page
      return;
    }

    // If user is logged in
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/checkout"); // Redirect to checkout page
  };

  return (
    <button
      onClick={handleProceedToPay}
      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center gap-2"
    >
      <FiShoppingCart />
      Proceed to Pay
    </button>
  );
};

export default ProceedToPayButton;
