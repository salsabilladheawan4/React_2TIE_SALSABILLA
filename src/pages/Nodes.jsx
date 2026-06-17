import React, { useState, useEffect } from "react";
import { nodesAPI } from "../services/nodesAPI"; 
import { useNavigate } from "react-router-dom"; // Impor useNavigate untuk redirect setelah logout

// Mengimpor komponen pembantu dari folder components Anda
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import GenericTable from "../components/GenericTable";
import { AiFillDelete } from "react-icons/ai";

export default function Nodes() {
  const navigate = useNavigate(); // Inisialisasi fungsi navigasi rute
  
  // State manajemen data catatan
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // State form input baru
  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "active"
  });

  // Ambil data catatan otomatis saat pertama kali halaman di-render
  useEffect(() => {
    loadNotes();
  }, []);

  // Fungsi memanggil fetchNotes beserta penanganan loading & error
  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await nodesAPI.fetchNotes();
      setNotes(data || []);
    } catch (err) {
      setError("Gagal memuat catatan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Menangani perubahan ketikan pada form input
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Menangani submit form untuk menyimpan catatan baru ke Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await nodesAPI.createNote(dataForm);

      setSuccess("Catatan berhasil ditambahkan!");

      // Kosongkan form kembali setelah sukses memasukkan data
      setDataForm({ title: "", content: "", status: "active" });

      // Hilangkan notifikasi sukses setelah 3 detik
      setTimeout(() => setSuccess(""), 3000);

      // Panggil ulang loadNotes untuk memperbarui isi tabel secara otomatis
      loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message || "Gagal menyimpan data"}`);
    } finally {
      setLoading(false);
    }
  };

  // Handle untuk aksi hapus data
  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?")
    if (!konfirmasi) return

    try {
        setLoading(true)
        setError("")
        setSuccess("")

        await nodesAPI.deleteNote(id)
        setSuccess("Catatan berhasil dihapus!")
        setTimeout(() => setSuccess(""), 3000);

        // Refresh data
        loadNotes()
    } catch (err) {
        setError(`Terjadi kesalahan: ${err.message}`)
    } finally {
        setLoading(false)
    }
  }

  // ================= FUNGSI LOGOUT BARU =================
  const handleLogout = () => {
    const konfirmasiLog = confirm("Apakah Anda yakin ingin keluar dari sistem?");
    if (!konfirmasiLog) return;

    // 1. Hapus data session user dari local storage komputer
    localStorage.removeItem("userSession");

    // 2. Alihkan secara paksa kembali ke halaman login
    navigate("/login");
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      
      {/* Header Halaman dengan Tombol Logout di Ujung Kanan */}
      <div className="flex items-center justify-between max-w-[850px] mb-8">
        <h1 className="text-[28px] font-bold text-gray-900 font-poppins">
          Nodes App
        </h1>
        {/* Tombol Logout Merah Minimalis */}
        <button
          onClick={handleLogout}
          type="button"
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium text-sm rounded-xl transition-all shadow-sm active:scale-95"
        >
          Logout
        </button>
      </div>

      {/* Form Card */}
      <div className="bg-white p-8 rounded-2xl shadow-sm max-w-[650px] mb-10">
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
            className={`mt-4 px-6 py-3 text-white font-semibold text-[15px] rounded-lg transition-all shadow-md ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#00A76F] hover:bg-green-700"
            }`}
          >
            {loading ? "Mohon Tunggu..." : "Tambah Catatan"}
          </button>
        </form>
      </div>

      {/* ================= TABLE STATE RENDERING ================= */}
      
      {loading && notes.length === 0 && (
        <LoadingSpinner text="Memuat catatan..." />
      )}

      {!loading && notes.length === 0 && !error && (
        <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
      )}

      {!loading && notes.length === 0 && error && (
        <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
      )}

      {!loading && notes.length > 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-[850px]">
          <div className="px-6 py-5 border-b border-gray-50">
            <h3 className="text-base font-bold text-gray-900 font-poppins">
              Daftar Catatan ({notes.length})
            </h3>
          </div>

          <GenericTable
            columns={["#", "Judul", "Isi Catatan", "Aksi"]}
            data={notes}
            renderRow={(note, index) => (
              <>
                <td className="px-6 py-4 font-semibold text-gray-400 font-poppins text-sm w-16">
                  {index + 1}.
                </td>
                <td className="px-6 py-4 font-poppins text-sm font-semibold text-emerald-600 max-w-[200px] truncate">
                  {note.title}
                </td>
                <td className="px-6 py-4 max-w-xs font-poppins text-sm text-gray-600">
                  <div className="truncate">
                    {note.content}
                  </div>
                </td>
                <td className="px-6 py-4 max-w-xs">
                  <div className="truncate text-gray-600">
                      <button
                          onClick={() => handleDelete(note.id)}
                          disabled={loading}
                          type="button"
                      >
                          <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                      </button>
                  </div>
                </td>
              </>
            )}
          />
        </div>
      ) : null}
    </div>
  );
}