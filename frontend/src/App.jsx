import { Routes, Route } from "react-router-dom";
import InventoryForm from "./components/InventoryForm";
import InventoryTable from "./components/InventoryTable";
import EditForm from "./components/EditForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InventoryForm />} />
      <Route path="/inventory-table" element={<InventoryTable />} />
      <Route path="/edit-form" element={<EditForm />} />
    </Routes>
  );
}

export default App;
