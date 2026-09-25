import React, { useState, useMemo } from 'react';
import { Product } from '../types';

interface CatalogPageProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (catKey: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (id: string) => boolean;
  onNavigateHome: () => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onNavigateHome,
}) => {
  const [colorFilter, setColorFilter] = useState<string>('all');
  const [flowerFilter, setFlowerFilter] = useState<string>('all');
  const [formatFilter, setFormatFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = [
    { key: 'all', label: 'Hamısı (36)' },
    { key: 'zodiac', label: 'Bürclər (Zodiac)' },
    { key: 'bridal', label: 'Gəlinlik Buketləri (Bridal)' },
    { key: 'vase', label: 'Vaza Kompozisiyaları (Vase)' },
    { key: 'hatbox', label: 'Velvet Qutular (Hat Box)' },
    { key: 'peony', label: 'Pionlar (Peony)' },
    { key: 'celebration', label: 'Təbrik & Məktəb' },
    { key: 'baby', label: 'Yeni Doğan (Baby)' },
  ];

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory !== 'all' && p.categoryKey !== selectedCategory) {
        return false;
      }
      if (colorFilter !== 'all') {
        const text = (p.name + ' ' + p.description + ' ' + p.subtitle).toLowerCase();
        if (colorFilter === 'red' && !text.includes('qırmızı') && !text.includes('bordo')) return false;
        if (colorFilter === 'pink' && !text.includes('çəhrayı') && !text.includes('pastel')) return false;
        if (colorFilter === 'white' && !text.includes('ağ') && !text.includes('krem') && !text.includes('mirvari')) return false;
      }
      if (flowerFilter !== 'all') {
        const text = (p.name + ' ' + p.description + ' ' + p.subtitle).toLowerCase();
        if (flowerFilter === 'rose' && !text.includes('qızılgül') && !text.includes('rose')) return false;
        if (flowerFilter === 'peony' && !text.includes('pion')) return false;
      }
      if (formatFilter !== 'all') {
        if (formatFilter === 'hatbox' && p.categoryKey !== 'hatbox' && !p.name.includes('Qutu')) return false;
        if (formatFilter === 'vase' && p.categoryKey !== 'vase' && !p.name.includes('Vaza')) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'popular') return (b.reviewsCount || 0) - (a.reviewsCount || 0);
      return 0; // featured
    });
  }, [products, selectedCategory, colorFilter, flowerFilter, formatFilter, sortBy]);

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Page Intro / Context Banner */}
      <section className="w-full bg-gradient-to-b from-[#241117] to-[#1C0D12] border-b border-[#D4AF37]/15 px-6 lg:px-12 py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4">
              <button
                onClick={onNavigateHome}
                className="font-label-caps-sm text-[11px] text-[#FAF6F0]/60 hover:text-[#D4AF37] uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                Ana Səhifə
              </button>
              <span className="text-[#D4AF37]/40 text-[11px]">/</span>
              <span className="font-label-caps-sm text-[11px] text-[#D4AF37] uppercase tracking-[0.2em] font-semibold">
                Kataloq & Kolleksiyalar
              </span>
            </nav>
            <span className="font-label-caps-sm text-[11px] text-[#D4AF37] uppercase tracking-[0.25em] font-semibold block mb-2">
              Haute Floristique Baku
            </span>
            <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-[#FAF6F0] tracking-tight leading-none mb-4">
              Bütün Kolleksiyalar
            </h1>
            <p className="font-body-lg text-[15px] sm:text-[17px] text-[#FAF6F0]/80 leading-relaxed font-light">
              Bakının ən zərif çiçək kompozisiyaları, xüsusi seçilmiş qızılgüllər və eksklüziv hədiyyəlik qutular. Hər bir aranjeman təravət və sənətkar zövqünün simvoludur.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#251218] border border-[#D4AF37]/30 p-5 rounded-xl shadow-lg shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#89182C]/60 border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#D4AF37]">
              <span className="material-symbols-outlined text-[20px]">verified</span>
            </div>
            <div>
              <p className="font-label-caps-sm text-[11px] text-[#FAF6F0] uppercase tracking-[0.18em] font-semibold">
                Gündəlik Hollandiya İdxalı
              </p>
              <p className="font-body-sm text-[13px] text-[#FAF6F0]/70">
                Eksklüziv növlər, 7 günə qədər təravət zəmanəti
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Filter Bar & Pills */}
      <section className="w-full bg-[#1C0D12] px-6 lg:px-12 pt-8 pb-4">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-6">
          {/* Horizontal Scrollable Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => onSelectCategory(cat.key)}
                  className={`shrink-0 px-5 py-2.5 rounded-full font-label-caps-sm text-[11px] tracking-[0.18em] uppercase transition-all cursor-pointer ${
                    active
                      ? 'bg-[#89182C] border border-[#D4AF37]/60 text-[#FAF6F0] font-semibold shadow-md'
                      : 'bg-[#251218] hover:bg-[#341822] text-[#FAF6F0]/80 hover:text-[#FAF6F0] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Refinement Toolbar: Filters & Sorting */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 py-4 bg-[#251218] border border-[#D4AF37]/25 px-5 rounded-xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-label-caps-sm text-[11px] text-[#D4AF37] uppercase tracking-[0.2em] mr-1 flex items-center gap-1.5 font-semibold">
                <span className="material-symbols-outlined text-[16px] text-[#D4AF37]">tune</span>
                Filterlər:
              </span>

              {/* Color filter */}
              <div className="relative">
                <select
                  value={colorFilter}
                  onChange={(e) => setColorFilter(e.target.value)}
                  className="px-3.5 py-1.5 rounded-full bg-[#1C0D12] border border-[#D4AF37]/30 text-[#FAF6F0] font-body-sm text-[13px] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer appearance-none pr-8"
                >
                  <option value="all">Rəng: Hamısı</option>
                  <option value="red">Rəng: Qırmızı, Bordo</option>
                  <option value="pink">Rəng: Çəhrayı, Pastel</option>
                  <option value="white">Rəng: Ağ, Mirvari</option>
                </select>
                <span className="material-symbols-outlined text-[14px] text-[#D4AF37] absolute right-2.5 top-2.5 pointer-events-none">
                  expand_more
                </span>
              </div>

              {/* Flower type filter */}
              <div className="relative">
                <select
                  value={flowerFilter}
                  onChange={(e) => setFlowerFilter(e.target.value)}
                  className="px-3.5 py-1.5 rounded-full bg-[#1C0D12] border border-[#D4AF37]/30 text-[#FAF6F0] font-body-sm text-[13px] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer appearance-none pr-8"
                >
                  <option value="all">Çiçək Növü: Hamısı</option>
                  <option value="rose">Çiçək Növü: Ekvador Qızılgülü</option>
                  <option value="peony">Çiçək Növü: Pion</option>
                </select>
                <span className="material-symbols-outlined text-[14px] text-[#D4AF37] absolute right-2.5 top-2.5 pointer-events-none">
                  expand_more
                </span>
              </div>

              {/* Format filter */}
              <div className="relative">
                <select
                  value={formatFilter}
                  onChange={(e) => setFormatFilter(e.target.value)}
                  className="px-3.5 py-1.5 rounded-full bg-[#1C0D12] border border-[#D4AF37]/30 text-[#FAF6F0] font-body-sm text-[13px] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer appearance-none pr-8"
                >
                  <option value="all">Format: Hamısı</option>
                  <option value="hatbox">Format: Velvet Qutu</option>
                  <option value="vase">Format: Vaza</option>
                </select>
                <span className="material-symbols-outlined text-[14px] text-[#D4AF37] absolute right-2.5 top-2.5 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between lg:justify-end gap-4 shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-label-caps-sm text-[11px] text-[#FAF6F0]/70 uppercase tracking-[0.18em]">
                  Sırala:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#1C0D12] border border-[#D4AF37]/30 font-body-sm text-[13px] text-[#FAF6F0] py-1.5 px-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors cursor-pointer"
                >
                  <option value="featured">Seçilmişlər</option>
                  <option value="price_asc">Qiymət: Azdan çoxa</option>
                  <option value="price_desc">Qiymət: Çoxdan aza</option>
                  <option value="popular">Ən çox satılanlar</option>
                </select>
              </div>
              <span className="font-body-sm text-[13px] text-[#D4AF37] font-medium">
                {filteredProducts.length} məhsul
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Highlight Strip */}
      <section className="w-full bg-[#1C0D12] px-6 lg:px-12 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between overflow-hidden bg-gradient-to-r from-[#89182C] via-[#5C101E] to-[#89182C] border border-[#D4AF37]/40 text-[#FAF6F0] py-2.5 px-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[18px] text-[#D4AF37]">auto_awesome</span>
            <p className="font-label-caps-sm text-[11px] tracking-[0.2em] uppercase font-medium">
              Mövsümi Flör: Bütün Vaza və Qutu Sifarişlərində Xüsusi Xəttatlıq Təbrik Kartı Hədiyyə
            </p>
          </div>
          <a
            href="https://wa.me/994505300369?text=Mövsümi%20hədiyyə%20kartı%20haqqında%20məlumat%20almaq%20istəyirəm"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 font-label-caps-sm text-[11px] tracking-[0.2em] uppercase text-[#D4AF37] hover:text-[#FAF6F0] transition-colors"
          >
            Ətraflı Bax <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* Product Catalog Grid (3 columns on desktop matching Image 3) */}
      <section className="w-full bg-[#1C0D12] px-6 lg:px-12 py-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const wish = isWishlisted(product.id);
              return (
                <article
                  key={product.id}
                  className="group flex flex-col bg-[#251218] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className="relative w-full aspect-[4/5] overflow-hidden bg-[#1C0D12] cursor-pointer"
                    onClick={() => onSelectProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Badges */}
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-[#89182C] border border-[#D4AF37]/50 text-[#FAF6F0] font-label-caps-sm text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-md font-semibold">
                        {product.badge}
                      </span>
                    )}

                    {/* Heart button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product);
                      }}
                      aria-label="İstək siyahısına əlavə et"
                      className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1C0D12]/80 backdrop-blur-md border transition-colors flex items-center justify-center cursor-pointer ${
                        wish
                          ? 'border-[#D4AF37] text-[#D4AF37]'
                          : 'border-[#D4AF37]/30 text-[#FAF6F0] hover:text-[#D4AF37] hover:border-[#D4AF37]'
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: wish ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        favorite
                      </span>
                    </button>

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#1C0D12] via-[#1C0D12]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="w-full py-2.5 rounded-lg bg-[#251218]/90 backdrop-blur-md border border-[#D4AF37]/50 text-[#FAF6F0] font-label-caps-sm text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-[#89182C] hover:border-[#D4AF37] transition-colors shadow-md cursor-pointer"
                      >
                        Sürətli Baxış
                      </button>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                    <div
                      className="cursor-pointer"
                      onClick={() => onSelectProduct(product)}
                    >
                      <span className="font-label-caps-sm text-[11px] text-[#D4AF37] uppercase tracking-[0.2em] font-semibold block mb-1">
                        {product.category}
                      </span>
                      <h2 className="font-title-editorial text-[18px] text-[#FAF6F0] font-medium group-hover:text-[#D4AF37] transition-colors">
                        {product.name}
                      </h2>
                      <p className="font-body-sm text-[13px] text-[#FAF6F0]/70 italic mt-1 line-clamp-2">
                        {product.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#D4AF37]/15">
                      <span className="font-price-editorial text-xl sm:text-2xl text-[#FAF6F0] font-semibold">
                        {product.price.toFixed(2)} ₼
                      </span>
                      <button
                        onClick={() => onAddToCart(product)}
                        className="px-4 py-2 bg-[#89182C] hover:bg-[#a61e35] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#FAF6F0] rounded-lg font-label-caps-sm text-[11px] uppercase tracking-[0.18em] transition-all flex items-center gap-1.5 shadow-sm font-semibold cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px] text-[#D4AF37]">local_mall</span>
                        Səbətə At
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination Controls */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              aria-label="Əvvəlki səhifə"
              className="w-10 h-10 rounded-lg bg-[#251218] border border-[#D4AF37]/20 text-[#FAF6F0]/70 flex items-center justify-center hover:bg-[#341822] hover:text-[#FAF6F0] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-label-caps-sm text-[11px] font-semibold flex items-center justify-center transition-colors cursor-pointer ${
                  currentPage === page
                    ? 'bg-[#89182C] border border-[#D4AF37]/60 text-[#FAF6F0] shadow-md'
                    : 'bg-[#251218] border border-[#D4AF37]/20 text-[#FAF6F0] hover:bg-[#341822] hover:border-[#D4AF37]/50'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
              aria-label="Növbəti səhifə"
              className="w-10 h-10 rounded-lg bg-[#251218] border border-[#D4AF37]/20 text-[#FAF6F0]/70 flex items-center justify-center hover:bg-[#341822] hover:text-[#FAF6F0] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* Concierge & Bespoke Consultation Section matching Image 3 with updated phone 0505300369 */}
      <section className="w-full bg-[#1C0D12] px-6 lg:px-12 py-16">
        <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-[#2E151E] via-[#251218] to-[#1C0D12] border border-[#D4AF37]/30 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label-caps-sm text-[11px] text-[#D4AF37] uppercase tracking-[0.25em] font-semibold block mb-2">
              Bespoke Floral Concierge
            </span>
            <h3 className="font-headline-md text-2xl sm:text-3xl text-[#FAF6F0] mb-3">
              Axtardığınız xüsusi bir kompozisiya var?
            </h3>
            <p className="font-body-md text-[14px] sm:text-[15px] text-[#FAF6F0]/80 leading-relaxed font-light">
              Toy mərasimləri, rəsmi qəbullar və ya fərdiləşdirilmiş sevgi etirafları üçün baş floristimizlə birbaşa əlaqə qura bilərsiniz. Şəhərin istənilən ünvanına təhlükəsiz və xüsusi şərtlərlə çatdırılma təmin edilir.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              className="w-full sm:w-auto px-6 py-3.5 bg-[#251218] border border-[#D4AF37]/40 text-[#FAF6F0] hover:text-[#D4AF37] hover:border-[#D4AF37] rounded-lg font-label-caps-sm text-[11px] uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
              href="tel:0505300369"
            >
              <span className="material-symbols-outlined text-[18px] text-[#D4AF37]">call</span>
              +994 (50) 530 03 69
            </a>
            <a
              className="w-full sm:w-auto px-6 py-3.5 bg-[#89182C] hover:bg-[#a61e35] border border-[#D4AF37]/60 text-[#FAF6F0] rounded-lg font-label-caps-sm text-[11px] uppercase tracking-[0.2em] font-semibold transition-all shadow-md flex items-center justify-center gap-2"
              href="https://wa.me/994505300369"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px] text-[#D4AF37]">chat</span>
              WhatsApp Konsultasiyası
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
