import React, { useEffect, useState } from "react";
import axios from "axios";

function InventoryTable() {
  const [items, setItems] = useState([]);

  // Fetch all fuel items from backend
  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/inventory");
      setItems(response.data); // assuming backend returns array of items
    } catch (error) {
      console.error("Error fetching fuel items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/inventory/${id}`);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting fuel item:", error);
    }
  };

  const handleEdit = (item) => {
    // Optional: implement edit logic or navigate to edit page
    alert(`Edit ${item.fuelType}`);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {/* ✅ Page title */}
      <h1 className="text-3xl font-bold mb-6 text-center">Inventory Dashboard</h1>

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

