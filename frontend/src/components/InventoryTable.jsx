import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function InventoryTable() {
  const [items, setItems] = useState([]);
  const location = useLocation(); // to receive state from navigate
  const navigate = useNavigate(); // for navigation

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/inventory");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching fuel items:", error);
    }
  };

  useEffect(() => {
    fetchItems();

    // Add newly added item if coming from form
    if (location.state && location.state.newItem) {
      setItems((prev) => [...prev, location.state.newItem]);
    }
  }, [location.state]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/inventory/${id}`);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting fuel item:", error);
    }
  };

  const handleEdit = (item) => {
    alert(`Edit ${item.fuelType}`);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {/* Header with title and ADD button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Inventory Dashboard</h1>
        <button
          onClick={() => navigate("/")} // navigate to InventoryForm
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          ADD
        </button>
      </div>

      
      <table className="w-full border-collapse border border-gray-300 shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Fuel Type</th>
            <th className="border p-2">Quantity (L)</th>
            <th className="border p-2">Price (LKR)</th>
            <th className="border p-2">Supplier</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="5" className="border p-2 text-center">
                No fuel items available.
              </td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item._id} className="text-center">
                <td className="border p-2">{item.fuelType}</td>
                <td className="border p-2">{item.quantityLiters}</td>
                <td className="border p-2">{item.pricePerLiter}</td>
                <td className="border p-2">{item.supplier}</td>
                <td className="border p-2 flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;
