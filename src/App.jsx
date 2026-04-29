import { StrictMode } from "react";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="flex flex-row flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
