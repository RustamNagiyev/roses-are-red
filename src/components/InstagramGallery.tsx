import React from 'react';

export const InstagramGallery: React.FC = () => {
  const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDGppdUmJkE4dcHnUQ2a8baj23dbKCtDpPbpHCnoxOzWJBLhDIkB2gGjE-gBinab8wUs4g8Tsim9X63P-N5AaFmKwhl1bjfgAowR3k0DOS6YdiXaH0xdL1xcTWj7I9Nrjul5Vfplpjq130Ndu_Ofexquy8MINCNv4nt1fjbokh9DtTe308v9H-_74W1rKJB4ZQQEGi1H6skZ2xUWRXNHcMlftCXhHTh_Jn4i-mPnPmC6L0FyJ2Q8xQO',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCyIhv9Zc4xi7jwzEBQ6lfPaBbHEoXkAyWlOGLQnbRFAttOMLfofjukwAMPN8PMdYFlxT7vNnE4m2eBotMOQ7FVy-SbuhrTnbftxCGrbDMTj1HE_88jLeln1qenGCDuHMAEptxwSBQpDPz48_Jf7QkQ_YddfTGDbjlciNSW99-zRXyL-VAAskaEQG7iYRQko6qUSnymiDkFzpftzLQpWrdPFgH753clCfnJTA0j_W-KFvYHya_1eIQi',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBv234BA1V4iRiIWNhDEt__7Zb88UeCJO7TwGfeVtd8vtwh_mrLcYrgeNG8mVnJxLY9oFLI05qp5YgoUpUB9-v7maaRsLo2SC6oyi6bjm8dCJu7XkYNkc4o_JJQvWfrzgmFzdLSiCebhlEMlz8fymRVMzyySqCMc9JyFrB_ZBUstZ0eiXwa2yJ6HZ3M8Q5Qakp1wUegO1BS3iVk-aQyzNjEhDTobiueaGd83W8pqMMqdBVu8EaWqWqT',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAoOXzVgm-I-08cbkfQIhkzuG2coq69QudBGtT4hSjgZe_CL6uEtHgnhtAWYfvR8iLV9rckkxgqmGiOKFtbMc6wHG4LBwG5LGZX3Uwbbl5SL_r2K6wRJzpWVM6f_VfNj8ecm-A3vE_sKBNtrq9sSPFWUfU5u9OmEKa9-oIsiENsFP6nQY39hz7ixuR5UJImAx5OXSimxew4S9YmwxPJL_ZrYUqX6pYnXOefrIo0iT-DL2JGZcGVNM2q',
  ];

  return (
    <section className="w-full bg-[#1B0D11] py-28 px-6 lg:px-12 relative">
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Instagram Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-label-caps-sm text-[11px] text-[#D4AF37] uppercase tracking-[0.22em] font-semibold">
              Canlı Qalereya
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl text-[#FDF9F3] font-normal mt-1">
              @roses.are.red.baku
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-2 font-label-caps-sm text-[11px] uppercase tracking-widest text-[#EADFD3] hover:text-[#D4AF37] transition-colors"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px] text-[#D4AF37]">photo_camera</span>
            Bizi İzləyin & Günlük İlham Alın
          </a>
        </div>

        {/* 4 Editorial Grid Visuals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative aspect-square rounded-lg overflow-hidden bg-[#271217] shadow-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${src}')` }}
              />
              <div className="absolute inset-0 bg-[#1B0D11]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-[#FDF9F3]">
                <span className="material-symbols-outlined text-[28px] text-[#D4AF37]">favorite</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
