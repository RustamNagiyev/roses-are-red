import React from 'react';
import { Product } from '../types';

interface FeaturedGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onViewAll: () => void;
}

export const FeaturedGrid: React.FC<FeaturedGridProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onViewAll,
}) => {
  // Take top 4 for the home featured grid
  const featured = products.slice(0, 4);

  return (
    <section className="w-full bg-[#1B0D11] py-28 px-6 lg:px-12 border-b border-[#D4AF37]/15 relative" id="catalog">
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-label-caps-sm text-[11px] text-[#D4AF37] uppercase tracking-[0.22em] font-semibold">
              İmza Kompozisiyaları
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#FDF9F3] font-normal mt-2">
              Ən Çox Seçilən Əsərlər
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-body-sm text-[13px] text-[#C7B9B0]">Hər bir tərtibat fərdi nömrələnir</span>
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 font-label-caps-sm text-[11px] text-[#D4AF37] font-semibold tracking-wider uppercase hover:text-[#F3E3B5] transition-colors cursor-pointer"
            >
              Bütün Kolleksiya <span className="material-symbols-outlined text-[16px]">north_east</span>
            </button>
          </div>
        </div>

        {/* 4-Card Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => {
            const wish = isWishlisted(product.id);
            return (
              <article
                key={product.id}
                className="group bg-[#220E13] rounded-xl overflow-hidden shadow-2xl border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
              >
                {/* Image Stage */}
                <div 
                  className="relative w-full aspect-[4/5] overflow-hidden bg-[#271217] cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10 pointer-events-none">
                    {product.badge && (
                      <span className="px-3 py-1 rounded bg-[#15080B]/90 backdrop-blur-md text-[#FDF9F3] border border-[#D4AF37]/40 font-label-caps-sm text-[10px] tracking-wider uppercase font-semibold">
                        {product.badge}
                      </span>
                    )}
                    {product.id === 'kralica-qirmizi' && (
                      <span className="px-3 py-1 rounded bg-[#89182C] text-[#FDF9F3] border border-[#D4AF37]/40 font-label-caps-sm text-[10px] tracking-wider uppercase font-semibold">
                        Məxmər Qutu
                      </span>
                    )}
                  </div>

                  {/* Quick Action Layer on hover */}
                  <div className="absolute inset-0 bg-[#15080B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="w-full py-3 rounded bg-gradient-to-r from-[#89182C] to-[#60101E] border border-[#D4AF37]/50 text-[#FDF9F3] hover:from-[#A82037] hover:to-[#781426] transition-colors font-label-caps-sm text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#D4AF37]">shopping_bag</span>
                      Səbətə Əlavə Et
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-gradient-to-b from-[#220E13] to-[#1B0D11]">
                  <div 
                    className="cursor-pointer"
                    onClick={() => onSelectProduct(product)}
                  >
                    <p className="font-body-sm text-[12px] text-[#D4AF37] italic mb-1">
                      {product.subtitle}
                    </p>
                    <h3 className="font-title-editorial text-[18px] font-medium text-[#FDF9F3] group-hover:text-[#ffb3b6] transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-body-sm text-[13px] text-[#C7B9B0] mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Wishlist */}
                  <div className="pt-6 mt-6 flex items-center justify-between border-t border-[#D4AF37]/15">
                    <div>
                      <span className="font-label-caps-sm text-[10px] text-[#D4AF37] uppercase block tracking-wider font-semibold">
                        Qiymət
                      </span>
                      <span className="font-price-editorial text-xl sm:text-2xl text-[#FDF9F3] font-semibold">
                        {product.price.toFixed(2)} ₼
                      </span>
                    </div>
                    <button
                      onClick={() => onToggleWishlist(product)}
                      aria-label="Sevimlilərə əlavə et"
                      className={`w-9 h-9 rounded-full bg-[#2D141A] border transition-colors flex items-center justify-center cursor-pointer ${
                        wish
                          ? 'border-[#D4AF37] text-[#D4AF37]'
                          : 'border-[#D4AF37]/30 text-[#EADFD3] hover:border-[#D4AF37] hover:text-[#D4AF37]'
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: wish ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        favorite
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
