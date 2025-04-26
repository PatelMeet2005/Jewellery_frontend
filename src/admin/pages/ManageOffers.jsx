import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/offers");
      setOffers(res.data);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this offer?")) {
      try {
        await axios.delete(`http://localhost:5000/api/offers/${id}`);
        setOffers(offers.filter((offer) => offer._id !== id));
      } catch (error) {
        console.error("Error deleting offer:", error);
      }
    }
  };

  return (
    <div className="ml-72 p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Offers</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Title</th>
            <th className="p-2">Discount</th>
            <th className="p-2">Description</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer._id} className="border-t">
              <td className="p-2">{offer.title}</td>
              <td className="p-2">{offer.discount}%</td>
              <td className="p-2">{offer.description}</td>
              <td className="p-2">
                <button className="text-red-500 hover:underline" onClick={() => handleDelete(offer._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOffers;
