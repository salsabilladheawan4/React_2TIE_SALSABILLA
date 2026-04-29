import React from 'react';
import { Link } from 'react-router-dom'; // Pastikan React Router sudah terinstal
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50 font-sans">
      <PageHeader />
      
      <main className="flex-grow flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center bg-white p-12 rounded-3xl shadow-xl max-w-2xl border border-pink-100">
          
          {/* Elemen Visual Tambahan (Opsional) */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-pink-200 rounded-full blur-lg opacity-60"></div>
              <div className="relative bg-white p-6 rounded-full shadow-inner border border-pink-100">
                <span className="text-7xl">🤔</span>
              </div>
            </div>
          </div>

          {/* Status Code */}
          <p className="text-base font-semibold text-pink-500 bg-pink-100 inline-block px-4 py-1.5 rounded-full">
            404
          </p>
          
          {/* Main Heading */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-6xl">
            Wah, Sepertinya Nyasar!
          </h1>
          
          {/* Subtext */}
          <p className="mt-8 text-lg leading-8 text-gray-700 max-w-md mx-auto">
            Ups! Kami tidak bisa menemukan halaman yang Anda cari. Mungkin tautannya salah atau halamannya sudah dipindahkan ke tempat lain.
          </p>
          
          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-y-4 gap-x-8">
            <Link
              to="/"
              className="w-full sm:w-auto rounded-full bg-pink-500 px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-pink-600 transition duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 scale-100 hover:scale-105"
            >
              Kembali ke Beranda 🏠
            </Link>
            <a 
              href="#" 
              className="text-base font-semibold text-gray-900 hover:text-pink-600 transition group"
            >
              Butuh Bantuan? Hubungi Kami{' '}
              <span 
                aria-hidden="true" 
                className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}