// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md px-12 py-5 flex justify-between items-center text-white">
      {/* Logo Foodies */}
      <div className="text-2xl font-black uppercase tracking-tighter">
        Foodies<span className="text-yellow-500">.</span>
      </div>

      {/* Menu Navigasi */}
      <ul className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest">
        <li><a href="#home" className="hover:text-yellow-500 transition">Home</a></li>
        <li><a href="#menu" className="hover:text-yellow-500 transition">Menu</a></li>
        <li><a href="#about" className="hover:text-yellow-500 transition">Tentang</a></li>
        <li><a href="#testi" className="hover:text-yellow-500 transition">Kontak</a></li>
      </ul>

      {/* Tombol Sign In / Up */}
      <div className="flex gap-4">
        <Link to="/login" className="text-sm font-bold border border-white px-5 py-2 rounded hover:bg-white hover:text-black transition">Sign In</Link>
        <Link to="/login" className="text-sm font-bold bg-yellow-600 px-5 py-2 rounded hover:bg-yellow-700 transition">Sign Up</Link>
      </div>
    </nav>
  );
}