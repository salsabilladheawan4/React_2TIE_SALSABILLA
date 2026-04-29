import React from 'react';
import PageHeader from "../components/PageHeader";

export default function Orders() {
  // 1. Data JSON (15 Data)
  const ordersData = [
    { id: "ORD-001", customer: "Salsabilla", status: "Completed", total: "Rp 150.000", date: "2024-03-01" },
    { id: "ORD-002", customer: "M.Dzakwan", status: "Pending", total: "Rp 85.000", date: "2024-03-02" },
    { id: "ORD-003", customer: "Citra Kirana", status: "Cancelled", total: "Rp 210.000", date: "2024-03-02" },
    { id: "ORD-004", customer: "Dedi Mahendra", status: "Completed", total: "Rp 45.000", date: "2024-03-03" },
    { id: "ORD-005", customer: "Eka Putri", status: "Pending", total: "Rp 320.000", date: "2024-03-03" },
    { id: "ORD-006", customer: "Fajar Sidik", status: "Completed", total: "Rp 125.000", date: "2024-03-04" },
    { id: "ORD-007", customer: "Gita Gutawa", status: "Completed", total: "Rp 99.000", date: "2024-03-04" },
    { id: "ORD-008", customer: "Hana Tania", status: "Cancelled", total: "Rp 150.000", date: "2024-03-05" },
    { id: "ORD-009", customer: "Indra Bruggman", status: "Pending", total: "Rp 500.000", date: "2024-03-05" },
    { id: "ORD-010", customer: "Joko Anwar", status: "Completed", total: "Rp 75.000", date: "2024-03-06" },
    { id: "ORD-011", customer: "Kevin Sanjaya", status: "Completed", total: "Rp 1.200.000", date: "2024-03-06" },
    { id: "ORD-012", customer: "Lesti Kejora", status: "Pending", total: "Rp 300.000", date: "2024-03-07" },
    { id: "ORD-013", customer: "Maia Estianty", status: "Completed", total: "Rp 850.000", date: "2024-03-07" },
    { id: "ORD-014", customer: "Nadiem Makarim", status: "Cancelled", total: "Rp 0", date: "2024-03-08" },
    { id: "ORD-015", customer: "Olivia Jensen", status: "Completed", total: "Rp 110.000", date: "2024-03-08" },
  ];

  // 2. Helper untuk warna status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 pb-12">
      <PageHeader />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden">
          
          {/* Header Tabel */}
          <div className="px-8 py-6 border-b border-pink-50 flex justify-between items-center bg-white">
            <h2 className="text-2xl font-bold text-gray-800">Daftar Pesanan</h2>
            <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {ordersData.length} Total
            </span>
          </div>

          {/* Tabel Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-pink-50/50">
                  <th className="px-8 py-4 text-sm font-semibold text-pink-600 uppercase tracking-wider">Order ID</th>
                  <th className="px-8 py-4 text-sm font-semibold text-pink-600 uppercase tracking-wider">Customer</th>
                  <th className="px-8 py-4 text-sm font-semibold text-pink-600 uppercase tracking-wider">Status</th>
                  <th className="px-8 py-4 text-sm font-semibold text-pink-600 uppercase tracking-wider">Total Price</th>
                  <th className="px-8 py-4 text-sm font-semibold text-pink-600 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {ordersData.map((order) => (
                  <tr key={order.id} className="hover:bg-pink-50/30 transition-colors">
                    <td className="px-8 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-8 py-4 text-sm text-gray-600">{order.customer}</td>
                    <td className="px-8 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-8 py-4 text-sm font-semibold text-gray-800">{order.total}</td>
                    <td className="px-8 py-4 text-sm text-gray-500">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Tabel (Opsional) */}
          <div className="px-8 py-4 bg-gray-50 text-right">
             <button className="text-pink-600 hover:text-pink-700 font-semibold text-sm transition">
               Lihat Semua Laporan &rarr;
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}