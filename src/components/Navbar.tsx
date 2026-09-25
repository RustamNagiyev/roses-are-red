import React, { useState } from 'react';

interface NavbarProps {
  currentPage: 'home' | 'catalog' | 'product';
  onNavigate: (page: 'home' | 'catalog') => void;
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenContact: () => void;
  onOpenAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  cartTotal,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenContact,
  onOpenAbout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#D4AF37]/20 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
      {/* Top Banner with updated 0505300369 */}
      <div className="w-full bg-[#15080B]/95 backdrop-blur-md px-4 py-2 border-b border-[#D4AF37]/15">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center text-center">
          <p className="font-label-caps-sm text-[10px] sm:text-[11px] text-[#EADFD3] uppercase tracking-[0.22em] font-medium">
            BAKI DAXİLİNDƏ 24/7 EKSPRESS ÇATDIRILMA • ÖZƏL FLORİSTİK TƏRTİBAT • WHATSAPP: 050 530 03 69
          </p>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="h-20 w-full bg-[#1B0D11]/95 backdrop-blur-xl">
        <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-12 flex items-center justify-between gap-6">
          {/* Logo with only ONE 'Roses Are Red' title */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3.5 shrink-0 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D141A] to-[#15080B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-lg shadow-black/50 group-hover:border-[#D4AF37] transition-all">
              <span className="material-symbols-outlined text-[22px]">filter_vintage</span>
            </div>
            <div className="flex flex-col">
              <span className="font-title-editorial text-[18px] tracking-[0.08em] text-[#FDF9F3] uppercase font-semibold leading-none group-hover:text-[#D4AF37] transition-colors">
                Roses Are Red
              </span>
              <span className="font-label-caps-sm text-[10px] text-[#D4AF37] tracking-[0.25em] uppercase mt-1">
                Baku • Haute Floristique
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`font-label-caps-sm text-[11px] uppercase tracking-[0.2em] transition-colors py-1 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#D4AF37] font-semibold border-b border-[#D4AF37] pb-1'
                  : 'text-[#EADFD3] hover:text-[#D4AF37]'
              }`}
            >
              Ana Səhifə
            </button>
            <button
              onClick={() => onNavigate('catalog')}
              className={`font-label-caps-sm text-[11px] uppercase tracking-[0.2em] transition-colors py-1 cursor-pointer ${
                currentPage === 'catalog'
                  ? 'text-[#D4AF37] font-semibold border-b border-[#D4AF37] pb-1'
                  : 'text-[#EADFD3] hover:text-[#D4AF37]'
              }`}
            >
              Kataloq
            </button>
            <button
              onClick={() => onNavigate('catalog')}
              className="font-label-caps-sm text-[11px] uppercase tracking-[0.2em] text-[#EADFD3] hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              Gəlin Buketləri
            </button>
            <button
              onClick={onOpenAbout}
              className="font-label-caps-sm text-[11px] uppercase tracking-[0.2em] text-[#EADFD3] hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              Haqqımızda
            </button>
            <button
              onClick={onOpenContact}
              className="font-label-caps-sm text-[11px] uppercase tracking-[0.2em] text-[#EADFD3] hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              Əlaqə & Sifariş
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 md:gap-5 shrink-0">
            {/* Search */}
            <button
              onClick={onOpenSearch}
              aria-label="Axtarış"
              className="text-[#EADFD3] hover:text-[#D4AF37] transition-colors p-1.5 flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>

            {/* Currency badge */}
            <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-[#271217] border border-[#D4AF37]/30 rounded-full text-[#FDF9F3]">
              <span className="font-label-caps-sm text-[11px] uppercase tracking-wider font-semibold text-[#D4AF37]">
                AZN ₼
              </span>
            </div>

            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              aria-label="İstək Siyahısı"
              className="relative text-[#EADFD3] hover:text-[#D4AF37] transition-colors p-1.5 flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">favorite</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-[#89182C] border border-[#D4AF37]/50 text-[9px] flex items-center justify-center text-[#FDF9F3] font-semibold">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label="Səbət"
              className="flex items-center gap-2.5 pl-2.5 pr-3.5 py-1.5 bg-[#271217]/90 rounded-full border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-colors shadow-inner cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <span className="material-symbols-outlined text-[19px] text-[#D4AF37]">local_mall</span>
                <span className="absolute -top-1.5 -right-2 px-1.5 min-w-[16px] h-4 rounded-full bg-[#89182C] text-[#FDF9F3] text-[9px] flex items-center justify-center font-semibold border border-[#D4AF37]/40">
                  {cartCount}
                </span>
              </div>
              <span className="hidden md:inline font-price-editorial text-[13px] text-[#FDF9F3] font-semibold tracking-wide">
                {cartTotal.toFixed(2)} ₼
              </span>
            </button>

            {/* User Profile / Concierge Quick Action */}
            <button
              onClick={onOpenContact}
              title="Florist Concierge ilə Əlaqə"
              className="w-8 h-8 rounded-full bg-gradient-to-br from-[#89182C] to-[#4A1E29] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 shadow-md cursor-pointer hover:border-[#D4AF37] transition-colors"
            >
              <span className="material-symbols-outlined text-[#FDF9F3] text-[18px]">person</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-[#EADFD3] hover:text-[#D4AF37] p-1 flex items-center justify-center"
              aria-label="Menyu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1B0D11]/98 border-b border-[#D4AF37]/20 px-6 py-4 flex flex-col gap-3">
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className={`text-left py-2 font-label-caps-sm text-[12px] uppercase tracking-[0.2em] ${
              currentPage === 'home' ? 'text-[#D4AF37] font-semibold' : 'text-[#EADFD3]'
            }`}
          >
            Ana Səhifə
          </button>
          <button
            onClick={() => {
              onNavigate('catalog');
              setMobileMenuOpen(false);
            }}
            className={`text-left py-2 font-label-caps-sm text-[12px] uppercase tracking-[0.2em] ${
              currentPage === 'catalog' ? 'text-[#D4AF37] font-semibold' : 'text-[#EADFD3]'
            }`}
          >
            Kataloq & Kolleksiyalar
          </button>
          <button
            onClick={() => {
              onNavigate('catalog');
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 font-label-caps-sm text-[12px] uppercase tracking-[0.2em] text-[#EADFD3]"
          >
            Gəlin Buketləri
          </button>
          <button
            onClick={() => {
              onOpenAbout();
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 font-label-caps-sm text-[12px] uppercase tracking-[0.2em] text-[#EADFD3]"
          >
            Haqqımızda
          </button>
          <button
            onClick={() => {
              onOpenContact();
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 font-label-caps-sm text-[12px] uppercase tracking-[0.2em] text-[#EADFD3]"
          >
            Əlaqə & Sifariş
          </button>
          <div className="pt-2 border-t border-[#D4AF37]/15 flex items-center justify-between text-[#D4AF37] text-xs">
            <span>Dəstək: 050 530 03 69</span>
            <a
              href="https://wa.me/994505300369"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-[#89182C] text-[#FDF9F3] rounded text-[10px] uppercase font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
