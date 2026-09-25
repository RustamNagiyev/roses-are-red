import React from 'react';

interface CategoriesRowProps {
  onSelectCategory: (categoryKey: string) => void;
}

export const CategoriesRow: React.FC<CategoriesRowProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      key: 'zodiac',
      title: 'Bürclər',
      subtitle: 'Zodiac Series',
      count: '12 Buket',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyIhv9Zc4xi7jwzEBQ6lfPaBbHEoXkAyWlOGLQnbRFAttOMLfofjukwAMPN8PMdYFlxT7vNnE4m2eBotMOQ7FVy-SbuhrTnbftxCGrbDMTj1HE_88jLeln1qenGCDuHMAEptxwSBQpDPz48_Jf7QkQ_YddfTGDbjlciNSW99-zRXyL-VAAskaEQG7iYRQko6qUSnymiDkFzpftzLQpWrdPFgH753clCfnJTA0j_W-KFvYHya_1eIQi',
    },
    {
      key: 'bridal',
      title: 'Gəlinlik',
      subtitle: 'Haute Bridal',
      count: '18 Model',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoOXzVgm-I-08cbkfQIhkzuG2coq69QudBGtT4hSjgZe_CL6uEtHgnhtAWYfvR8iLV9rckkxgqmGiOKFtbMc6wHG4LBwG5LGZX3Uwbbl5SL_r2K6wRJzpWVM6f_VfNj8ecm-A3vE_sKBNtrq9sSPFWUfU5u9OmEKa9-oIsiENsFP6nQY39hz7ixuR5UJImAx5OXSimxew4S9YmwxPJL_ZrYUqX6pYnXOefrIo0iT-DL2JGZcGVNM2q',
    },
    {
      key: 'vase',
      title: 'Vaza & İnteryer',
      subtitle: 'Sculptural Objects',
      count: '15 Ədəd',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv234BA1V4iRiIWNhDEt__7Zb88UeCJO7TwGfeVtd8vtwh_mrLcYrgeNG8mVnJxLY9oFLI05qp5YgoUpUB9-v7maaRsLo2SC6oyi6bjm8dCJu7XkYNkc4o_JJQvWfrzgmFzdLSiCebhlEMlz8fymRVMzyySqCMc9JyFrB_ZBUstZ0eiXwa2yJ6HZ3M8Q5Qakp1wUegO1BS3iVk-aQyzNjEhDTobiueaGd83W8pqMMqdBVu8EaWqWqT',
    },
    {
      key: 'hatbox',
      title: 'Məxmər Qutular',
      subtitle: 'Velvet Hat Box',
      count: '24 Variant',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyIhv9Zc4xi7jwzEBQ6lfPaBbHEoXkAyWlOGLQnbRFAttOMLfofjukwAMPN8PMdYFlxT7vNnE4m2eBotMOQ7FVy-SbuhrTnbftxCGrbDMTj1HE_88jLeln1qenGCDuHMAEptxwSBQpDPz48_Jf7QkQ_YddfTGDbjlciNSW99-zRXyL-VAAskaEQG7iYRQko6qUSnymiDkFzpftzLQpWrdPFgH753clCfnJTA0j_W-KFvYHya_1eIQi',
    },
    {
      key: 'peony',
      title: 'Piona & Mövsüm',
      subtitle: 'Seasonal Bloom',
      count: '9 Kompozisiya',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv234BA1V4iRiIWNhDEt__7Zb88UeCJO7TwGfeVtd8vtwh_mrLcYrgeNG8mVnJxLY9oFLI05qp5YgoUpUB9-v7maaRsLo2SC6oyi6bjm8dCJu7XkYNkc4o_JJQvWfrzgmFzdLSiCebhlEMlz8fymRVMzyySqCMc9JyFrB_ZBUstZ0eiXwa2yJ6HZ3M8Q5Qakp1wUegO1BS3iVk-aQyzNjEhDTobiueaGd83W8pqMMqdBVu8EaWqWqT',
    },
    {
      key: 'celebration',
      title: 'Təbrik & Mərasim',
      subtitle: 'Celebrations',
      count: '30 Təklif',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGppdUmJkE4dcHnUQ2a8baj23dbKCtDpPbpHCnoxOzWJBLhDIkB2gGjE-gBinab8wUs4g8Tsim9X63P-N5AaFmKwhl1bjfgAowR3k0DOS6YdiXaH0xdL1xcTWj7I9Nrjul5Vfplpjq130Ndu_Ofexquy8MINCNv4nt1fjbokh9DtTe308v9H-_74W1rKJB4ZQQEGi1H6skZ2xUWRXNHcMlftCXhHTh_Jn4i-mPnPmC6L0FyJ2Q8xQO',
    },
    {
      key: 'baby',
      title: 'Yeni Doğan',
      subtitle: 'Baby & New Life',
      count: '14 Model',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoOXzVgm-I-08cbkfQIhkzuG2coq69QudBGtT4hSjgZe_CL6uEtHgnhtAWYfvR8iLV9rckkxgqmGiOKFtbMc6wHG4LBwG5LGZX3Uwbbl5SL_r2K6wRJzpWVM6f_VfNj8ecm-A3vE_sKBNtrq9sSPFWUfU5u9OmEKa9-oIsiENsFP6nQY39hz7ixuR5UJImAx5OXSimxew4S9YmwxPJL_ZrYUqX6pYnXOefrIo0iT-DL2JGZcGVNM2q',
    },
  ];

  return (
    <section className="w-full bg-[#15080B] py-20 px-6 lg:px-12 border-b border-[#D4AF37]/15 relative">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-caps-sm text-[11px] text-[#D4AF37] uppercase tracking-[0.22em] font-semibold">
              Tərtibat İstiqamətləri
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl text-[#FDF9F3] mt-1 font-normal">
              Kolleksiyalara Nəzər Salın
            </h2>
          </div>
          <p className="font-body-sm text-[13px] text-[#C7B9B0] max-w-md">
            Hər mövsümün və xüsusi günün ruhuna uyğun dizayn olunmuş tematik seriyalar.
          </p>
        </div>

        {/* Categories Layout: 7 Refined Editorial Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {categories.map((cat, idx) => (
            <button
              key={cat.key}
              onClick={() => onSelectCategory(cat.key)}
              className={`group flex flex-col items-center text-center p-4 rounded-xl bg-[#220E13] border border-[#D4AF37]/25 shadow-lg shadow-black/40 hover:border-[#D4AF37] hover:bg-[#2D141A] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                idx === 6 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3 relative bg-[#271217] ring-1 ring-[#D4AF37]/30 group-hover:ring-[#D4AF37] transition-all">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${cat.image}')` }}
                />
                <div className="absolute inset-0 bg-[#89182C]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-title-editorial text-[15px] font-medium text-[#FDF9F3] group-hover:text-[#D4AF37] transition-colors">
                {cat.title}
              </h3>
              <span className="font-body-sm text-[11px] text-[#C7B9B0] mt-0.5">{cat.subtitle}</span>
              <span className="font-label-caps-sm text-[9px] text-[#D4AF37] mt-1.5 uppercase font-medium">
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
