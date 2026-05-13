import React from "react";
import { 
  Utensils, 
  Star, 
  ShoppingCart, 
  MoveRight, 
  Zap,
  Crown,
  ShoppingBag
} from "lucide-react";

export default function Home() {
  // Data Produk dengan tautan gambar yang lebih stabil
  const favoriteMenus = [
    {
      id: 1,
      name: "Special Salmon Teriyaki",
      price: "Rp 65.000",
      rating: 4.9,
      // Menggunakan Unsplash ID untuk makanan Jepang agar pasti muncul
      img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800",
    },
   {
      id: 2,
      name: "Pizza Grilled Quesadilla",
      price: "Rp 95.000",
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    },
    {
      id: 3,
      name: "Bread Grill Chicken Sauce",
      price: "Rp 120.000",
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    },
  ];


  return (
    <div className="font-poppins text-gray-900 bg-[#FFFBF7]">
      
      {/* 1. HERO SECTION DENGAN FULL BACKGROUND */}
      <section id="home" className="relative h-screen flex items-center px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          {/* Background Jalanan Jepang yang Estetik */}
          <img 
            src="https://images.unsplash.com/photo-1542351567-cd7b03932822?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Japanese Street Background" 
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-20 text-white w-full">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="bg-orange-500 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Premium Quality</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] tracking-tighter uppercase italic drop-shadow-lg text-white">
              HOT AND <span className="text-orange-500">READY</span> <br /> 
              TO SERVE.
            </h1>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">D'BENTO JAPANESE FOOD</h2>
            <p className="text-gray-200 text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Menyajikan bento autentik dengan bahan segar setiap hari. Kami membawa cita rasa Jepang langsung ke depan pintu Anda.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5 pt-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-3xl font-black uppercase tracking-[2px] flex items-center gap-3 transition-all transform hover:-translate-y-2 shadow-2xl">
                ORDER NOW <ShoppingCart size={22} />
              </button>
            </div>
          </div>

          <div className="flex-1 relative hidden lg:flex justify-center items-center">
            <div className="absolute w-[450px] h-[450px] bg-orange-400 rounded-full blur-[100px] opacity-30"></div>
            {/* Menggunakan gambar cadangan Unsplash jika PNG transparan bermasalah */}
            <img 
              src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1000" 
              alt="Bento Main" 
              className="relative z-10 w-[85%] rounded-[3rem] shadow-2xl border-8 border-white/10 transform rotate-3"
            />
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-24 bg-white px-8 text-center">
        <div className="p-3 inline-flex items-center gap-3 bg-orange-50 rounded-3xl mb-6">
          <Crown className="text-orange-500" size={20}/>
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest">Tentang Kami</p>
        </div>
        <h2 className="text-5xl font-black uppercase italic tracking-tighter text-gray-900 leading-tight">
          Kualitas Tanpa <span className="text-orange-500">Kompromi</span>
        </h2>
        <p className="text-gray-600 leading-relaxed text-xl font-medium max-w-2xl mx-auto mt-4">
          Hadir sejak 1990 untuk memberikan cita rasa autentik Jepang di setiap suapan hidangan yang kami sajikan.
        </p>
      </section>

      {/* 3. MENU SECTION */}
      <section id="menu" className="py-24 bg-gray-50 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-gray-900">Menu Favorit Kami</h2>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {favoriteMenus.map((item) => (
              <div key={item.id} className="group bg-white p-6 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center">
                <div className="relative w-full h-64 flex items-center justify-center mb-6 overflow-hidden rounded-[2rem]">
                  <img src={item.img} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" alt={item.name} />
                </div>
                <div className="space-y-4 w-full">
                  <h3 className="text-xl font-black uppercase italic text-gray-800">{item.name}</h3>
                  <p className="text-orange-600 font-black text-3xl">{item.price}</p>
                  <button className="w-full py-4 bg-gray-900 text-white hover:bg-orange-500 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2">
                    TAMBAH <ShoppingBag size={18}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REVIEWS SECTION */}
      <section id="reviews" className="bg-[#0f0f0f] py-24 px-8 text-white">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-white">Buku Tamu</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#1a1a1a] p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center">
                <p className="text-gray-400 italic text-sm leading-relaxed mb-8">
                  "Porsinya pas, rasanya benar-benar autentik. Pengemasan sangat rapi dan higienis!"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  {/* Gunakan Avatar stabil dari UI Faces / Dicebear */}
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Foodie${i}`} className="w-12 h-12 rounded-full border-2 border-orange-500 bg-white" alt="Customer" />
                  <div className="text-left">
                    <h4 className="font-bold uppercase text-[10px] tracking-widest text-white">Pelanggan #{i}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
}