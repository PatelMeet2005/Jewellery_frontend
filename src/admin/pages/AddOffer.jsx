import React, { useState } from "react";
import axios from "axios";

const AddOffer = () => {
  const [offer, setOffer] = useState({
    title: "",
    discount: "",
    description: "",
  });

  const handleChange = (e) => {
    setOffer({ ...offer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/offers", offer);
      alert("Offer added successfully!");
      setOffer({ title: "", discount: "", description: "" });
    } catch (error) {
      console.error("Error adding offer:", error);
      alert("Failed to add offer.");
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
          type="text"
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Offer
        </button>
      </form>
    </div>
  );
};

export default AddOffer;
