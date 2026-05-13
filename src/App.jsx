import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/tailwind.css"; // Pastikan CSS utama diimpor
import Loading from "./components/Loading";

// Lazy Loading Layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

// Lazy Loading Pages
const Home = React.lazy(() => import("./pages/Home")); // Gunakan Home.jsx yang lengkap tadi
const Login = React.lazy(() => import("./pages/auth/Login"));
const LayananGuest = React.lazy(() => import("./pages/LayananGuest")); // Tambahkan rute Layanan
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* RUTE GUEST (Tampilan Utama & Layanan) */}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} /> {/* Menggunakan Home sebagai halaman utama */}
          <Route path="/layanan" element={<LayananGuest />} /> {/* Halaman Cek Poin & Pesanan */}
        </Route>

        {/* RUTE AUTH (Login/Register) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* RUTE ADMIN (Dashboard) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;