import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function GuestLayout() {
  return (
    <div className="min-h-screen bg-[#fff8f0] font-poppins relative">
      <Navbar />
      <main>
        {/* Outlet adalah tempat halaman seperti LandingPage akan muncul */}
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

