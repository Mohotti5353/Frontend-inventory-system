// src/components/InventoryForm.jsx
import { useState } from "react";

const InventoryForm = () => {
  const [fuelData, setFuelData] = useState({
    fuelType: "",
    quantityLiters: "",
    pricePerLiter: "",
    supplier: "",
  });

  const handleChange = (e) => {
    setFuelData({ ...fuelData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    console.log("Fuel Data Added:", fuelData);
    setFuelData({ fuelType: "", quantityLiters: "", pricePerLiter: "", supplier: "" });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Fuel</h2>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Fuel Type</label>
        <input
          type="text"
          name="fuelType"
          value={fuelData.fuelType}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Quantity (Liters)</label>
        <input
          type="number"
          name="quantityLiters"
          value={fuelData.quantityLiters}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Price Per Liter</label>
        <input
          type="number"
          name="pricePerLiter"
          value={fuelData.pricePerLiter}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Supplier</label>
        <input
          type="text"
          name="supplier"
          value={fuelData.supplier}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <button
        onClick={handleAdd}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        ADD
      </button>
    </div>
  );
};

export default InventoryForm;
