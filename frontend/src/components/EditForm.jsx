import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function EditForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state; 
  const [editData, setEditData] = useState({ ...item });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `http://localhost:5000/api/inventory/${item._id}`,
        editData
      );
      setMessage("Updated successfully!");
      navigate("/"); 
    } catch (error) {
      console.error("Error updating item:", error);
      setMessage("Failed to update item.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Fuel Item</h2>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Fuel Type</label>
        <input
          type="text"
          name="fuelType"
          value={editData.fuelType}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Quantity (Liters)</label>
        <input
          type="number"
          name="quantityLiters"
          value={editData.quantityLiters}
          min="1"
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Price Per Liter</label>
        <input
          type="number"
          name="pricePerLiter"
          value={editData.pricePerLiter}
          min="1"
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Supplier</label>
        <input
          type="text"
          name="supplier"
          value={editData.supplier}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <button
        onClick={handleSave}
        disabled={loading}
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>

      {message && <p className="mt-3 text-center text-green-600">{message}</p>}
    </div>
  );
}

export default EditForm;
