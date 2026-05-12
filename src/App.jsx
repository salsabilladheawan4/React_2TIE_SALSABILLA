import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";
import Loading from "./components/Loading";

/**
 * 1. Lazy Loading Halaman Utama (Sedap Admin)
 */
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

/**
 * 2. Lazy Loading Halaman Autentikasi
 */
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

/**
 * 3. Layouts
 * MainLayout akan membungkus Sidebar Sedap dan Header.
 */
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

function App() {
  return (
    /* Menggunakan komponen Loading.jsx sebagai fallback saat transisi */
    <Suspense fallback={<Loading />}>
      <Routes>
        
        {/* GRUP SEDAP ADMIN (Dengan Sidebar & Header) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* GRUP AUTENTIKASI (Halaman Login/Daftar) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* HALAMAN TIDAK DITEMUKAN */}
        
        
      </Routes>
    </Suspense>
  );
}

export default App;