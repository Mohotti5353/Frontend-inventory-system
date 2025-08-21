
import { useState } from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";

const InventoryForm = () => {
  const [fuelData, setFuelData] = useState({
    fuelType: "",
    quantityLiters: "",
    pricePerLiter: "",
    supplier: "",
  });
const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFuelData({ ...fuelData, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
  try {
    setLoading(true);
    setMessage("");
    const response = await axios.post("http://localhost:5000/api/inventory", fuelData);
    console.log("Response:", response.data);

    setMessage("Fuel added successfully!");
    setFuelData({ fuelType: "", quantityLiters: "", pricePerLiter: "", supplier: "" });

   
    navigate("/");
  } catch (error) {
    console.error("Error adding fuel:", error);
    setMessage("Failed to add fuel.");
  } finally {
    setLoading(false);
  }
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
           min="1"
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
           min="1"
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
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
      >
        {loading ? "Adding..." : "ADD"}
      </button>

      {message && <p className="mt-3 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default InventoryForm;
