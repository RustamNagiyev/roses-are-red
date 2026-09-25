import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((acc, item) => {
    const itemPrice = item.customPrice || item.product.price;
    return acc + itemPrice * item.quantity;
  }, 0);

  const handleWhatsAppCheckout = () => {
    const orderLines = items.map(
      (item, idx) =>
        `${idx + 1}. ${item.product.name} ${item.selectedSize ? `(${item.selectedSize})` : ''} x${item.quantity} = ${(
          (item.customPrice || item.product.price) * item.quantity
        ).toFixed(2)} ₼`
    );

    const message = `Salam Roses Are Red! Saytdan yeni sifariş:\n\n${orderLines.join('\n')}\n\nCəmi: ${total.toFixed(
      2
    )} ₼\n${customerName ? `Müştəri: ${customerName}\n` : ''}${
      customerPhone ? `Əlaqə: ${customerPhone}\n` : ''
    }${customerAddress ? `Ünvan: ${customerAddress}\n` : ''}Təşəkkür edirəm!`;

    window.open(`https://wa.me/994505300369?text=${encodeURIComponent(message)}`, '_blank');
    setOrderSent(true);
  };

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
            <span className="material-symbols-outlined text-[24px] text-[#D4AF37]">local_mall</span>
            <div>
              <h2 className="font-title-editorial text-[18px] uppercase tracking-wide text-[#FDF9F3] font-medium">
                Səbətiniz
              </h2>
              <span className="font-body-sm text-[11px] text-[#D4AF37]">
                {items.length} kompozisiya
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

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <span className="material-symbols-outlined text-[48px] text-[#D4AF37]/40 mb-3">
                shopping_bag
              </span>
              <p className="font-title-editorial text-[18px] text-[#FDF9F3]">Səbətiniz boşdur</p>
              <p className="font-body-sm text-[13px] text-[#C7B9B0] mt-1 max-w-xs">
                Kataloqdan zövqünüzə uyğun eksklüziv kompozisiyaları seçərək səbətə əlavə edə bilərsiniz.
              </p>
            </div>
          ) : (
            items.map((item, idx) => {
              const itemPrice = item.customPrice || item.product.price;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#220E13] border border-[#D4AF37]/20 flex gap-4 items-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-18 h-18 rounded-lg object-cover bg-[#15080B] border border-[#D4AF37]/20 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-title-editorial text-[15px] text-[#FDF9F3] truncate">
                      {item.product.name}
                    </h3>
                    {item.selectedSize && (
                      <p className="font-body-sm text-[11px] text-[#D4AF37]">{item.selectedSize}</p>
                    )}
                    {item.selectedColor && (
                      <p className="font-body-sm text-[11px] text-[#C7B9B0]">{item.selectedColor}</p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-price-editorial text-[15px] text-[#FDF9F3] font-semibold">
                        {(itemPrice * item.quantity).toFixed(2)} ₼
                      </span>
                      <div className="flex items-center gap-2 bg-[#1B0D11] border border-[#D4AF37]/30 rounded-lg px-2 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          className="text-[#EADFD3] hover:text-[#D4AF37] px-1 text-sm font-bold cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-body-sm text-[12px] px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="text-[#EADFD3] hover:text-[#D4AF37] px-1 text-sm font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(idx)}
                    aria-label="Sil"
                    className="text-[#C7B9B0] hover:text-[#ffb4ab] p-1 cursor-pointer shrink-0"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              );
            })
          )}

          {/* Quick order form inputs if items present */}
          {items.length > 0 && (
            <div className="pt-4 border-t border-[#D4AF37]/15 space-y-3">
              <span className="font-label-caps-sm text-[10px] text-[#D4AF37] uppercase tracking-wider block font-semibold">
                Sürətli Çatdırılma Məlumatı
              </span>
              <input
                type="text"
                placeholder="Adınız və Soyadınız"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-[#220E13] border border-[#D4AF37]/25 text-[#FDF9F3] font-body-sm text-[13px] px-3.5 py-2.5 rounded-lg placeholder:text-[#C7B9B0]/50 focus:outline-none focus:border-[#D4AF37]"
              />
              <input
                type="tel"
                placeholder="Əlaqə nömrəniz"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full bg-[#220E13] border border-[#D4AF37]/25 text-[#FDF9F3] font-body-sm text-[13px] px-3.5 py-2.5 rounded-lg placeholder:text-[#C7B9B0]/50 focus:outline-none focus:border-[#D4AF37]"
              />
              <input
                type="text"
                placeholder="Çatdırılma ünvanı (Bakı daxili)"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="w-full bg-[#220E13] border border-[#D4AF37]/25 text-[#FDF9F3] font-body-sm text-[13px] px-3.5 py-2.5 rounded-lg placeholder:text-[#C7B9B0]/50 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          )}
        </div>

        {/* Footer with WhatsApp checkout to 0505300369 */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#D4AF37]/20 bg-[#241318] space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-label-caps-sm text-[11px] text-[#C7B9B0] uppercase tracking-wider">
                Yekun Məbləğ
              </span>
              <span className="font-price-editorial text-2xl text-[#D4AF37] font-semibold">
                {total.toFixed(2)} ₼
              </span>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#89182C] to-[#60101E] hover:from-[#A82037] hover:to-[#781426] text-[#FDF9F3] border border-[#D4AF37]/40 font-label-caps-sm text-[11px] uppercase tracking-[0.2em] shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer font-semibold"
            >
              <span className="material-symbols-outlined text-[20px] text-[#D4AF37]">chat</span>
              <span>WhatsApp ilə Sifarişi Təsdiqlə</span>
            </button>

            <p className="font-body-sm text-[11px] text-center text-[#C7B9B0]/80">
              Sifarişiniz birbaşa <strong className="text-[#D4AF37]">050 530 03 69</strong> nömrəsinə göndəriləcəkdir.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
