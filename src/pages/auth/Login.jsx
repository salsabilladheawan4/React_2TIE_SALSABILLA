import React, { useState } from "react";
// Jalur impor keluar 2 tingkat folder menuju services
import { nodesAPI } from "../../services/nodesAPI"; 
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    
    // State untuk menampung input form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // State untuk manajemen status loading, error, dan sukses
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            setSuccess("");

            // Memanggil fungsi pencarian user di tabel Supabase
            const matchedUsers = await nodesAPI.loginUser(email, password);

            if (matchedUsers.length > 0) {
                // 1. Set pesan notifikasi sukses jika data ditemukan
                setSuccess("🎉 Login Berhasil! Mengalihkan halaman...");
                
                // Simpan status session login ke local storage browser
                localStorage.setItem("userSession", JSON.stringify(matchedUsers[0]));

                // Alihkan ke halaman utama catatan setelah 1.5 detik
                setTimeout(() => {
                    navigate("/nodes"); 
                }, 1500);
            } else {
                // Set pesan notifikasi gagal jika email/password salah
                setError("❌ Email atau Password salah. Silakan coba lagi.");
            }
        } catch (err) {
            setError(`⚠️ Koneksi gagal: ${err.message || "Terjadi kesalahan server"}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                    Welcome Back 👋
                </h2>

                {/* NOTIFIKASI SUKSES (Muncul kotak hijau kalau login berhasil) */}
                {success && (
                    <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg font-medium transition-all">
                        {success}
                    </div>
                )}

                {/* NOTIFIKASI GAGAL (Muncul kotak merah kalau salah password/email) */}
                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg font-medium transition-all">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin}>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                            placeholder="you@example.com"
                            disabled={loading}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                            placeholder="********"
                            disabled={loading}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-sm ${
                            loading 
                                ? "bg-gray-400 cursor-not-allowed" 
                                : "bg-green-500 hover:bg-green-600 active:scale-[0.99]"
                        }`}
                    >
                        {loading ? "Memverifikasi..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}