import PageHeader from "../components/PageHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { Link } from "react-router-dom"; 

export default function Products() {
    const breadcrumb = ["Dashboard", "Product List"];
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            axios
                .get(`https://dummyjson.com/products/search?q=${query}`)
                .then((response) => {
                    if (response.status !== 200) {
                        setError(response.data.message);
                        return;
                    }
                    setProducts(response.data.products);
                    setError(null); 
                })
                .catch((err) => {
                    setError(err.message || "Terjadi kesalahan saat mengambil data");
                });
        }, 500);

        return () => clearTimeout(timeout);
    }, [query]);

    const errorInfo = error ? (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
        </div>
    ) : null;

    return (
        <div>
            <PageHeader title="Products" breadcrumb={breadcrumb} />
            
            {errorInfo}
            
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari produk..."
                className="mb-4 p-3 w-full bg-white rounded-2xl shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-2xl shadow-lg mt-4">
                <thead>
                    <tr className="bg-emerald-600 text-white text-left text-sm font-semibold">
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Vendor</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
                    {products.length > 0 ? (
                        products.map((item, index) => (
                            <tr
                                key={item.id}
                                className="hover:bg-gray-50 transition-colors duration-200"
                            >
                                <td className="px-6 py-4 font-medium text-gray-700">
                                    {index + 1}.
                                </td>
                                <td className="px-6 py-4">
                                    {/* Menerapkan Link ke nama produk */}
                                    <Link 
                                        to={`/products/${item.id}`} 
                                        className="text-emerald-500 hover:text-emerald-700 font-medium transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </td>
                                <td className="px-6 py-4">{item.category}</td>
                                <td className="px-6 py-4">Rp {(item.price * 1000).toLocaleString('id-ID')}</td>
                                <td className="px-6 py-4">{item.brand || "-"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="px-6 py-4 text-center text-gray-500 font-medium">
                                Data produk tidak ditemukan.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}