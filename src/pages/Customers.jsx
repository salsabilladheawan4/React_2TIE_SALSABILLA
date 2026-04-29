import React from 'react';
import PageHeader from "../components/PageHeader";

export default function Customers() {
  // 1. Data JSON Pelanggan (15 Data)
  const customersData = [
    { id: "CUST-001", name: "Salsabilla", email: "salsa@example.com", phone: "0812-3456-7890", loyalty: "Gold" },
    { id: "CUST-002", name: "M.Dzakwan", email: "dzakwan@example.com", phone: "0813-9876-5432", loyalty: "Silver" },
    { id: "CUST-003", name: "Citra Kirana", email: "citra.k@webmail.com", phone: "0856-1122-3344", loyalty: "Bronze" },
    { id: "CUST-004", name: "Dedi Mahendra", email: "dedi.m@pro.com", phone: "0877-5566-7788", loyalty: "Gold" },
    { id: "CUST-005", name: "Eka Putri", email: "eka.p@service.com", phone: "0811-2233-4455", loyalty: "Silver" },
    { id: "CUST-006", name: "Fajar Sidik", email: "fajar.s@indomail.com", phone: "0819-0099-8877", loyalty: "Bronze" },
    { id: "CUST-007", name: "Gita Gutawa", email: "gita.g@music.com", phone: "0812-8877-6655", loyalty: "Gold" },
    { id: "CUST-008", name: "Hana Tania", email: "hana.t@agency.com", phone: "0852-4433-2211", loyalty: "Silver" },
    { id: "CUST-009", name: "Indra Bruggman", email: "indra.b@actor.com", phone: "0813-6677-8899", loyalty: "Bronze" },
    { id: "CUST-010", name: "Joko Anwar", email: "joko.a@cinema.com", phone: "0812-5544-3322", loyalty: "Gold" },
    { id: "CUST-011", name: "Kevin Sanjaya", email: "kevin.s@badminton.id", phone: "0878-1122-4455", loyalty: "Gold" },
    { id: "CUST-012", name: "Lesti Kejora", email: "lesti.k@voice.com", phone: "0811-9988-7766", loyalty: "Silver" },
    { id: "CUST-013", name: "Maia Estianty", email: "maia.e@label.com", phone: "0857-3344-5566", loyalty: "Gold" },
    { id: "CUST-014", name: "Nadiem Makarim", email: "nadiem@office.id", phone: "0812-0011-2233", loyalty: "Bronze" },
    { id: "CUST-015", name: "Olivia Jensen", email: "olivia.j@model.com", phone: "0813-5566-7788", loyalty: "Silver" },
  ];

  // 2. Helper untuk warna badge Loyalty
  const getLoyaltyStyle = (level) => {
    switch (level) {
      case 'Gold': return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
      case 'Silver': return 'bg-slate-100 text-slate-700 border border-slate-200';
      case 'Bronze': return 'bg-orange-100 text-orange-700 border border-orange-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 pb-12">
      <PageHeader />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden">
          
          {/* Header Bagian Customer */}
          <div className="px-8 py-6 border-b border-pink-50 flex justify-between items-center bg-white">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Data Pelanggan</h2>
              <p className="text-sm text-pink-400">Manajemen loyalitas dan kontak pelanggan</p>
            </div>
            <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition shadow-md">
              + Tambah Customer
            </button>
          </div>

          {/* Tabel Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-pink-50/50">
                  <th className="px-8 py-4 text-sm font-semibold text-pink-600 uppercase tracking-wider">Customer ID</th>
                  <th className="px-8 py-4 text-sm font-semibold text-pink-600 uppercase tracking-wider">Name</th>
                  <th className="px-8 py-4 text-sm font-semibold text-pink-600 uppercase tracking-wider">Email</th>
                  <th className="px-8 py-4 text-sm font-semibold text-pink-600 uppercase tracking-wider">Phone</th>
                  <th className="px-8 py-4 text-sm font-semibold text-pink-600 uppercase tracking-wider text-center">Loyalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {customersData.map((customer) => (
                  <tr key={customer.id} className="hover:bg-pink-50/30 transition-colors">
                    <td className="px-8 py-4 text-sm font-medium text-gray-900">{customer.id}</td>
                    <td className="px-8 py-4 text-sm text-gray-700 font-semibold">{customer.name}</td>
                    <td className="px-8 py-4 text-sm text-gray-600">{customer.email}</td>
                    <td className="px-8 py-4 text-sm text-gray-500">{customer.phone}</td>
                    <td className="px-8 py-4 text-sm text-center">
                      <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${getLoyaltyStyle(customer.loyalty)}`}>
                        {customer.loyalty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}