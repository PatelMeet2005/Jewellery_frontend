import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageOffers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingOffer, setEditingOffer] = useState(null); // To manage edit mode
  const [editFormData, setEditFormData] = useState({
    title: '',
    discount: '',
    description: '',
  });

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/admin/getOffers");
      if (Array.isArray(res.data.data)) {
        setOffers(res.data.data);
      } else {
        console.error("Offers data is not an array!");
      }
    } catch (error) {
      console.error("Error fetching offers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        await axios.delete(`http://localhost:8000/admin/deleteOffer/${id}`);
        setOffers((prevOffers) => prevOffers.filter((offer) => offer._id !== id));
      } catch (error) {
        console.error("Error deleting offer:", error);
      }
    }
  };

  const handleEdit = (offer) => {
    setEditingOffer(offer._id);
    setEditFormData({
      title: offer.title,
      discount: offer.discount,
      description: offer.description,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSave = async (id) => {
    try {
      await axios.put(`http://localhost:8000/admin/updateOffer/${id}`, editFormData);
      alert("Offer updated successfully!");
      setEditingOffer(null);
      fetchOffers(); // Refresh list
    } catch (error) {
      console.error("Error updating offer:", error);
    }
  };

  const handleEditCancel = () => {
    setEditingOffer(null);
  };

  return (
    <div className="ml-72 p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Offers</h2>

      {loading ? (
        <p>Loading offers...</p>
      ) : offers.length === 0 ? (
        <p>No offers available.</p>
      ) : (
        <table className="w-full text-left border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Title</th>
              <th className="p-2">Discount (%)</th>
              <th className="p-2">Description</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer) => (
              <tr key={offer._id} className="border-t">
                {editingOffer === offer._id ? (
                  <>
                    {/* Edit Mode Inputs */}
                    <td className="p-2">
                      <input
                        type="text"
                        name="title"
                        value={editFormData.title}
                        onChange={handleEditChange}
                        className="border p-1 w-full"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="number"
                        name="discount"
                        value={editFormData.discount}
                        onChange={handleEditChange}
                        className="border p-1 w-full"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        name="description"
                        value={editFormData.description}
                        onChange={handleEditChange}
                        className="border p-1 w-full"
                      />
                    </td>
                    <td className="p-2 space-x-2">
                      <button
                        onClick={() => handleEditSave(offer._id)}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleEditCancel}
                        className="bg-gray-400 text-white px-2 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    {/* Normal View */}
                    <td className="p-2">{offer.title}</td>
                    <td className="p-2">{offer.discount}%</td>
                    <td className="p-2">{offer.description}</td>
                    <td className="p-2 space-x-2">
                      <button
                        onClick={() => handleEdit(offer)}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(offer._id)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageOffers;
