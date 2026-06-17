import React, { useState } from "react";
import { nodesAPI } from "../services/nodesAPI"; // Mengimpor konfigurasi API yang sudah diperbaiki

export default function Nodes({ loadNotes }) {
  // State manajemen pengiriman data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // State form input
  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "active" 
  });

  // Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Handle form submission untuk membuat catatan baru via API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      // Mengirimkan data form ke database Supabase
      await nodesAPI.createNote(dataForm);

      setSuccess("Catatan berhasil ditambahkan!");

      // Mengosongkan Form setelah Berhasil
      setDataForm({ title: "", content: "", status: "active" });

      // Menghilangkan pesan sukses setelah 3 detik
      setTimeout(() => setSuccess(""), 3000);
      
      // Panggil ulang loadNotes jika dikirim melalui props parent component
      if (typeof loadNotes === "function") {
        loadNotes();
      }
      
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message || "Gagal menyimpan data"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      
      {/* Header Halaman */}
      <h1 className="text-[28px] font-bold text-gray-900 mb-8 font-poppins">
        Nodes App
      </h1>

      {/* Kartu Form Putih */}
      <div className="bg-white p-8 rounded-2xl shadow-sm max-w-[650px]">
        
        <h2 className="text-[17px] font-bold text-gray-950 mb-6 font-poppins">
          Tambah Catatan Baru
        </h2>

        {/* Notifikasi Box Sukses */}
        {success && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl font-medium font-poppins">
            {success}
          </div>
        )}

        {/* Notifikasi Box Error */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl font-medium font-poppins">
            {error}
          </div>
        )}

        {/* Form Utama */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="text"
            name="title"
            value={dataForm.title}
            onChange={handleChange}
            placeholder="Judul catatan"
            disabled={loading}
            className={`w-full p-4 border border-gray-100 bg-gray-50 rounded-xl text-gray-600 placeholder:text-gray-300 focus:outline-none focus:border-green-100 focus:ring-1 focus:ring-green-100 transition-all ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
            required
          />

          <textarea
            name="content"
            value={dataForm.content}
            onChange={handleChange}
            placeholder="Isi catatan"
            rows="5"
            disabled={loading}
            className={`w-full p-4 border border-gray-100 bg-gray-50 rounded-xl text-gray-600 placeholder:text-gray-300 focus:outline-none focus:border-green-100 focus:ring-1 focus:ring-green-100 transition-all ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 px-6 py-3 text-white font-semibold text-[15px] rounded-lg transition-all shadow-md ${
              loading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-[#00A76F] hover:bg-green-700"
            }`}
          >
            {loading ? "Mohon Tunggu..." : "Tambah Catatan"}
          </button>
        </form>
      </div>
    </div>
  );
}