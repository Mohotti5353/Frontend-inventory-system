import { Routes, Route } from "react-router-dom";
import InventoryForm from "./components/InventoryForm";
import InventoryTable from "./components/InventoryTable";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InventoryForm />} />
      <Route path="/inventory-table" element={<InventoryTable />} />
    </Routes>
  );
}

export default App;
