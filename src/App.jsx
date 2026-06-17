import { IoMdFastforward } from "react-icons/io"; 
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/tailwind.css"; 
import Loading from "./components/Loading";

// Lazy Loading Layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

// Lazy Loading Pages
const Home = React.lazy(() => import("./pages/Home")); 
const Login = React.lazy(() => import("./pages/auth/Login"));
const LayananGuest = React.lazy(() => import("./pages/LayananGuest")); 
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

// Lazy Loading Halaman Manajemen
const Orders = React.lazy(() => import("./pages/Orders")); 
const Customers = React.lazy(() => import("./pages/Customers")); 
const Products = React.lazy(() => import("./pages/Products")); 
const ProductDetail = React.lazy(() => import("./pages/ProductDetail")); 

// Halaman Baru: Nodes (Sudah disesuaikan ke folder ./pages/Nodes)
const Nodes = React.lazy(() => import("./pages/Nodes")); 

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* RUTE GUEST (Tampilan Utama & Layanan) */}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} /> 
          <Route path="/layanan" element={<LayananGuest />} /> 
        </Route>

        {/* RUTE AUTH (Login/Register) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* RUTE ADMIN (Dashboard & Manajemen) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
          
          {/* Rute Baru untuk Halaman Nodes */}
          <Route path="/nodes" element={<Nodes />} /> 
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;