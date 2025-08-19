import React from "react";

function InventoryTable({ items, onEdit, onDelete }) {
  return (
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
        {items.map((item) => (
          <tr key={item._id} className="text-center">
            <td className="border p-2">{item.fuelType}</td>
            <td className="border p-2">{item.quantityLiters}</td>
            <td className="border p-2">{item.pricePerLiter}</td>
            <td className="border p-2">{item.supplier}</td>
            <td className="border p-2 flex justify-center gap-2">
              <button
                onClick={() => onEdit(item)}
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item._id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InventoryTable;
