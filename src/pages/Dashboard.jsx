import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaPlus } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    return (
        <div className="p-4">
            <PageHeader 
                title="Dashboard" 
                breadcrumb={["Home Detail", "Home Very Detail"]}
            >
                {/* Tombol ini akan otomatis mengisi props 'children' dan berada di kanan */}
                <button 
                    className="flex items-center bg-hijau text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-[#009e68] transition transform hover:-translate-y-0.5"
                >
                    <FaPlus className="mr-2" /> Add New Menu
                </button>
            </PageHeader>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center space-x-4 bg-white rounded-2xl shadow-sm border border-garis p-5">
                    <div className="bg-hijau rounded-full p-4 text-2xl text-white shadow-sm">
                        <FaShoppingCart />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-teks">75</span>
                        <span className="text-teks-samping font-medium">Total Orders</span>
                    </div>
                </div>

                <div className="flex items-center space-x-4 bg-white rounded-2xl shadow-sm border border-garis p-5">
                    <div className="bg-biru rounded-full p-4 text-2xl text-white shadow-sm">
                        <FaTruck />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-teks">175</span>
                        <span className="text-teks-samping font-medium">Total Delivered</span>
                    </div>
                </div>

                <div className="flex items-center space-x-4 bg-white rounded-2xl shadow-sm border border-garis p-5">
                    <div className="bg-merah rounded-full p-4 text-2xl text-white shadow-sm">
                        <FaBan />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-teks">40</span>
                        <span className="text-teks-samping font-medium">Total Canceled</span>
                    </div>
                </div>

                <div className="flex items-center space-x-4 bg-white rounded-2xl shadow-sm border border-garis p-5">
                    <div className="bg-kuning rounded-full p-4 text-2xl text-white shadow-sm">
                        <FaDollarSign />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-teks">Rp.128<span className="text-sm">Jt</span></span>
                        <span className="text-teks-samping font-medium">Total Revenue</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

