import { useState } from "react";
import rewardData from "../data/reward.json";
import ordersData from "../data/orders.json";
import { Search, Gift, Package, CheckCircle, Clock, ChefHat, Truck, XCircle, ChevronRight } from "lucide-react";

export default function LayananGuest() {
  // --- STATE UNTUK CEK POIN ---
  const [hpInput, setHpInput] = useState("");
  const [rewardResult, setRewardResult] = useState(null);
  const [rewardError, setRewardError] = useState("");

  // --- STATE UNTUK CEK PESANAN ---
  const [emailInput, setEmailInput] = useState("");
  const [orderIdInput, setOrderIdInput] = useState("");
  const [orderResult, setOrderResult] = useState(null);
  const [orderError, setOrderError] = useState("");

  // --- FUNGSI CEK POIN (Soal 2.A) ---
  const handleCheckReward = (e) => {
    e.preventDefault();
    setRewardError("");
    setRewardResult(null);

    if (!hpInput) return setRewardError("Nomor HP tidak boleh kosong.");
    if (!/^\d+$/.test(hpInput)) return setRewardError("Nomor HP harus berupa angka.");

    const found = rewardData.find((user) => user.nomor_hp === hpInput);
    if (found) {
      setRewardResult(found);
    } else {
      setRewardError("❌ Nomor HP tidak terdaftar dalam sistem Sedap.");
    }
  };

  // --- FUNGSI CEK PESANAN (Soal 2.B) ---
  const handleCheckOrder = (e) => {
    e.preventDefault();
    setOrderError("");
    setOrderResult(null);

    if (!emailInput || !orderIdInput) return setOrderError("Email dan ID Pesanan wajib diisi.");

    const found = ordersData.find(
      (order) => order.email === emailInput && order.order_id === orderIdInput
    );
    if (found) {
      setOrderResult(found);
    } else {
      setOrderError("❌ Data pesanan tidak ditemukan.");
    }
  };

  // Helper untuk Status Warna
  const getStatusStyle = (status) => {
    switch (status) {
      case "Selesai": return "bg-green-100 text-green-600";
      case "Diantar": return "bg-blue-100 text-blue-600";
      case "Dimasak": return "bg-orange-100 text-orange-600";
      default: return "bg-yellow-100 text-yellow-600";
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] font-poppins pt-32 pb-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
            Layanan <span className="text-orange-500">Pelanggan</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 font-medium">Lacak pesanan dan cek poin reward Anda dengan mudah.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* KOTAK CEK POIN (2.A) */}
          <div className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-50 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 rounded-full group-hover:scale-110 transition-transform"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-orange-500 text-white rounded-2xl shadow-lg shadow-orange-200">
                  <Gift size={28} />
                </div>
                <h4 className="text-2xl font-black uppercase italic tracking-tighter">Poin Reward</h4>
              </div>

              <form onSubmit={handleCheckReward} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Masukkan Nomor HP Anda..."
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-orange-100 transition-all font-medium"
                  value={hpInput}
                  onChange={(e) => setHpInput(e.target.value)}
                />
                <button className="w-full bg-gray-900 text-white font-black py-4 rounded-2xl uppercase tracking-widest text-xs hover:bg-orange-500 transition-all">
                  Cek Poin Sekarang
                </button>
              </form>

              {rewardError && <p className="mt-4 text-red-500 text-sm font-bold">{rewardError}</p>}
              {rewardResult && (
                <div className="mt-8 p-6 bg-orange-500 text-white rounded-[30px] shadow-lg animate-in fade-in zoom-in duration-300">
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Halo, {rewardResult.nama}!</p>
                  <p className="text-4xl font-black">{rewardResult.poin} <span className="text-sm font-normal uppercase tracking-widest">Poin</span></p>
                  <div className="mt-4 inline-block px-4 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Member {rewardResult.status_member}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* KOTAK STATUS PESANAN (2.B) */}
          <div className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-50 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full group-hover:scale-110 transition-transform"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200">
                  <Package size={28} />
                </div>
                <h4 className="text-2xl font-black uppercase italic tracking-tighter">Lacak Pesanan</h4>
              </div>

              <form onSubmit={handleCheckOrder} className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email Terdaftar..."
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <input 
                  type="text" 
                  placeholder="ID Pesanan (Contoh: 1001)..."
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium"
                  value={orderIdInput}
                  onChange={(e) => setOrderIdInput(e.target.value)}
                />
                <button className="w-full bg-gray-900 text-white font-black py-4 rounded-2xl uppercase tracking-widest text-xs hover:bg-blue-500 transition-all">
                  Lacak Pesanan
                </button>
              </form>

              {orderError && <p className="mt-4 text-red-500 text-sm font-bold">{orderError}</p>}
              {orderResult && (
                <div className={`mt-8 p-6 rounded-[30px] border-2 border-dashed flex flex-col items-center text-center ${getStatusStyle(orderResult.status)} animate-in fade-in zoom-in duration-300`}>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-70">Status Saat Ini</p>
                  <h5 className="text-2xl font-black uppercase italic tracking-tighter mb-4">{orderResult.status}</h5>
                  <p className="text-xs font-medium">Pesanan ID #{orderResult.order_id} atas nama {orderResult.nama_pemesan}</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}