import React from 'react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onAddToCart,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#1B0D11] border-l border-[#D4AF37]/30 text-[#FDF9F3] h-full flex flex-col shadow-2xl z-10 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#241318]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#D4AF37]">favorite</span>
            <div>
              <h2 className="font-title-editorial text-[18px] uppercase tracking-wide text-[#FDF9F3] font-medium">
                İstək Siyahısı
              </h2>
              <span className="font-body-sm text-[11px] text-[#D4AF37]">
                {wishlist.length} bəyənilən kompozisiya
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2D141A] border border-[#D4AF37]/30 flex items-center justify-center text-[#EADFD3] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <span className="material-symbols-outlined text-[48px] text-[#D4AF37]/40 mb-3">
                favorite_border
              </span>
              <p className="font-title-editorial text-[18px] text-[#FDF9F3]">İstək siyahınız boşdur</p>
              <p className="font-body-sm text-[13px] text-[#C7B9B0] mt-1 max-w-xs">
                Bəyəndiyiniz kompozisiyaları ürək simvoluna klikləyərək buraya əlavə edə bilərsiniz.
              </p>
            </div>
          ) : (
            wishlist.map((prod) => (
              <div
                key={prod.id}
                className="p-4 rounded-xl bg-[#220E13] border border-[#D4AF37]/20 flex gap-4 items-center"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  onClick={() => {
                    onSelectProduct(prod);
                    onClose();
                  }}
                  className="w-18 h-18 rounded-lg object-cover bg-[#15080B] border border-[#D4AF37]/20 shrink-0 cursor-pointer hover:opacity-90"
                />
                <div className="flex-1 min-w-0">
                  <h3
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                    className="font-title-editorial text-[15px] text-[#FDF9F3] truncate cursor-pointer hover:text-[#D4AF37]"
                  >
                    {prod.name}
                  </h3>
                  <p className="font-price-editorial text-[15px] text-[#D4AF37] font-semibold mt-1">
                    {prod.price.toFixed(2)} ₼
                  </p>
                  <button
                    onClick={() => onAddToCart(prod)}
                    className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-[#89182C] text-[#FDF9F3] text-[10px] uppercase font-label-caps-sm tracking-wider rounded border border-[#D4AF37]/30 hover:bg-[#a82037] transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">shopping_bag</span>
                    Səbətə At
                  </button>
                </div>
                <button
                  onClick={() => onRemoveFromWishlist(prod.id)}
                  aria-label="Sil"
                  className="text-[#C7B9B0] hover:text-[#ffb4ab] p-1 cursor-pointer shrink-0"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
