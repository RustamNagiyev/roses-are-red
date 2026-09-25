import React, { useState } from 'react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = products.filter((p) => {
    const text = `${p.name} ${p.subtitle} ${p.description} ${p.category}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[#1B0D11] border border-[#D4AF37]/35 rounded-2xl shadow-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#D4AF37]/20 flex items-center gap-3 bg-[#241318]">
          <span className="material-symbols-outlined text-[24px] text-[#D4AF37]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Gül növü, kompozisiya adı və ya kolleksiya axtarın..."
            className="flex-1 bg-transparent text-[#FDF9F3] text-lg placeholder:text-[#C7B9B0]/50 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#C7B9B0] hover:text-[#FDF9F3] p-1"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#F3E3B5] px-2 py-1 font-semibold"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query && results.length === 0 ? (
            <div className="py-12 text-center text-[#C7B9B0]">
              <span className="material-symbols-outlined text-[36px] text-[#D4AF37]/40 mb-2">
                sentiment_dissatisfied
              </span>
              <p className="font-title-editorial text-[17px] text-[#FDF9F3]">Uyğun nəticə tapılmadı</p>
              <p className="text-xs mt-1">Zəhmət olmasa başqa axtarış sözü daxil edin.</p>
            </div>
          ) : (
            (query ? results : products.slice(0, 5)).map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="p-3 rounded-xl bg-[#220E13] hover:bg-[#2D141A] border border-[#D4AF37]/15 hover:border-[#D4AF37]/50 flex items-center justify-between gap-4 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded-lg object-cover bg-[#15080B] shrink-0 border border-[#D4AF37]/20"
                  />
                  <div className="min-w-0">
                    <span className="font-label-caps-sm text-[10px] text-[#D4AF37] uppercase tracking-wider block">
                      {product.category}
                    </span>
                    <h4 className="font-title-editorial text-[16px] text-[#FDF9F3] group-hover:text-[#ffb3b6] truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#C7B9B0] truncate">{product.subtitle}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-price-editorial text-lg text-[#D4AF37] font-semibold">
                    {product.price.toFixed(2)} ₼
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-[#D4AF37] block mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#15080B] border-t border-[#D4AF37]/15 flex items-center justify-between text-[11px] text-[#C7B9B0] px-6">
          <span>Tövsiyə olunan axtarışlar: Ekvador, Velvet Qutu, Gəlinlik, Pion</span>
          <span className="text-[#D4AF37]">WhatsApp: 050 530 03 69</span>
        </div>
      </div>
    </div>
  );
};
