import React from 'react';

// 1. Child Component: Ukuran teks berubah tanpa tulisan deskripsi breakpoint
function ResponsiveText() {
  return (
    <div className="p-8 border-b border-blue-50 transition-all duration-300 hover:bg-blue-50/50">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-200">1</span>
        <h2 className="font-bold text-blue-900 text-xl tracking-tight">Responsive Text</h2>
      </div>
      <p className="text-sm md:text-lg lg:text-xl xl:text-3xl font-bold leading-tight bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
        Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan berubah secara otomatis!
      </p>
    </div>
  );
}

// 2. Child Component: Layout flex berubah tanpa tulisan deskripsi md:w-1/2
function ResponsiveWidth() {
  return (
    <div className="p-8 border-b border-blue-50 transition-all duration-300 hover:bg-blue-50/50">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-200">2</span>
        <h2 className="font-bold text-blue-900 text-xl tracking-tight">Responsive Width & Flex</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-full md:w-1/2 p-6 text-white rounded-2xl shadow-xl shadow-blue-100 transform hover:scale-[1.02] transition-transform duration-300">
          <span className="font-bold uppercase tracking-widest text-xs opacity-80">Module A</span>
          <p className="text-lg font-semibold mt-1">Kolom Utama</p>
        </div>
        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-full md:w-1/2 p-6 text-white rounded-2xl shadow-xl shadow-cyan-100 transform hover:scale-[1.02] transition-transform duration-300">
          <span className="font-bold uppercase tracking-widest text-xs opacity-80">Module B</span>
          <p className="text-lg font-semibold mt-1">Kolom Pendamping</p>
        </div>
      </div>
    </div>
  );
}

// 3. Child Component: Grid Layout
function ResponsiveLayout() {
  const boxes = [
    { id: 1, title: "Box 1", color: "from-blue-600 to-blue-700" },
    { id: 2, title: "Box 2", color: "from-blue-500 to-blue-600" },
    { id: 3, title: "Box 3", color: "from-blue-400 to-blue-500" },
    { id: 4, title: "Box 4", color: "from-blue-300 to-blue-400" },
  ];

  return (
    <div className="p-8 transition-all duration-300 hover:bg-blue-50/50">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-200">3</span>
        <h2 className="font-bold text-blue-900 text-xl tracking-tight">Responsive Grid Layout</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {boxes.map((box) => (
          <div key={box.id} className={`bg-gradient-to-br ${box.color} p-8 text-white text-center rounded-2xl shadow-lg shadow-blue-100 group hover:-translate-y-2 transition-all duration-300`}>
            <p className="font-bold tracking-wider group-hover:scale-110 transition-transform">{box.title}</p>
            <div className="h-1 w-8 bg-white/30 mx-auto mt-2 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// PARENT COMPONENT
export default function ResponsiveDesign() {
  return (
    <div className="min-h-screen bg-[#F0F7FF] p-4 md:p-12 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white/80 backdrop-blur-md shadow-[0_20px_50px_rgba(30,_58,_138,_0.1)] rounded-[2.5rem] overflow-hidden border border-white">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>
          
          <h1 className="text-3xl md:text-4xl font-black text-white text-center relative z-10 tracking-tight italic">
            TAILWIND <span className="text-blue-200">RESPONSIVE</span> DEMO 📱💻
          </h1>
        </div>
        
        <div className="divide-y divide-blue-50">
          <ResponsiveText />
          <ResponsiveWidth />
          <ResponsiveLayout />
        </div>

        {/* Footer info */}
        <div className="p-6 bg-blue-50/30 text-center border-t border-blue-50">
          <span className="text-[10px] text-blue-400 font-black uppercase tracking-[0.3em]">
            Blue Edition • Responsive UI
          </span>
        </div>
      </div>
    </div>
  );
}