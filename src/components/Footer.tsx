import React from 'react';

interface FooterProps {
  onNavigateCategory?: (categoryKey: string) => void;
  onOpenAbout?: () => void;
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateCategory,
  onOpenAbout,
  onOpenContact,
}) => {
  return (
    <footer className="w-full bg-[#15080B] text-[#FDF9F3] pt-16 pb-8 border-t border-[#D4AF37]/20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#D4AF37]/20">
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#D4AF37] text-[22px]">filter_vintage</span>
              <span className="font-headline-sm text-lg sm:text-xl tracking-widest text-[#FDF9F3] uppercase font-medium">
                Roses Are Red
              </span>
            </div>
            <p className="font-body-sm text-[13px] text-[#C7B9B0] leading-relaxed">
              Bakıda yüksək floristika sənəti. Təbiətin zərifliyini və zövqlü kompozisiyaları hər bir özəl anınız üçün sənət əsərinə çeviririk.
            </p>
            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F3E3B5] font-label-caps-sm text-[11px] tracking-[0.2em] uppercase transition-colors"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                @roses.are.red.baku
              </a>
            </div>
          </div>

          {/* Column 2: Kolleksiyalar */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-label-caps-lg text-[12px] uppercase text-[#D4AF37] tracking-[0.2em] font-semibold">
              Kolleksiyalar
            </h4>
            <ul className="space-y-2.5 font-body-sm text-[13px] text-[#C7B9B0]">
              <li>
                <button
                  onClick={() => onNavigateCategory && onNavigateCategory('zodiac')}
                  className="hover:text-[#FDF9F3] transition-colors cursor-pointer text-left"
                >
                  Zodiac & Astrological
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateCategory && onNavigateCategory('bridal')}
                  className="hover:text-[#FDF9F3] transition-colors cursor-pointer text-left"
                >
                  Gəlinlik & Toy Çələngləri
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateCategory && onNavigateCategory('vase')}
                  className="hover:text-[#FDF9F3] transition-colors cursor-pointer text-left"
                >
                  Vaza Kompozisiyaları
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateCategory && onNavigateCategory('hatbox')}
                  className="hover:text-[#FDF9F3] transition-colors cursor-pointer text-left"
                >
                  Premium Qutularda Qızılgüllər
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateCategory && onNavigateCategory('peony')}
                  className="hover:text-[#FDF9F3] transition-colors cursor-pointer text-left"
                >
                  Piona & Mövsümi Kolleksiya
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateCategory && onNavigateCategory('celebration')}
                  className="hover:text-[#FDF9F3] transition-colors cursor-pointer text-left"
                >
                  Məktəb & Təbrik Buketləri
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Müştəri Xidməti */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-label-caps-lg text-[12px] uppercase text-[#D4AF37] tracking-[0.2em] font-semibold">
              Müştəri Xidməti
            </h4>
            <ul className="space-y-2.5 font-body-sm text-[13px] text-[#C7B9B0]">
              <li>
                <button onClick={onOpenAbout} className="hover:text-[#FDF9F3] transition-colors cursor-pointer text-left">
                  Sifariş və Rezervasiya Qaydaları
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="hover:text-[#FDF9F3] transition-colors cursor-pointer text-left">
                  Çatdırılma və Təhlükəsiz Ödəniş
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#FDF9F3] transition-colors cursor-pointer text-left">
                  24/7 Concierge Dəstəyi
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="hover:text-[#FDF9F3] transition-colors cursor-pointer text-left">
                  Məxfilik və Gizlilik Siyasəti
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="hover:text-[#FDF9F3] transition-colors cursor-pointer text-left">
                  Tez-tez Verilən Suallar
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Butik & Əlaqə */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-label-caps-lg text-[12px] uppercase text-[#D4AF37] tracking-[0.2em] font-semibold">
              Butik & Əlaqə
            </h4>
            <div className="space-y-3 font-body-sm text-[13px] text-[#C7B9B0]">
              <p className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>Nizami küç. 48, Fəvvarələr Meydanı yaxınlığı, Bakı, Azərbaycan</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0">
                  call
                </span>
                <a href="tel:0505300369" className="hover:text-[#D4AF37] transition-colors">
                  +994 (50) 530 03 69
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0">
                  mail
                </span>
                <a href="mailto:info@roses-are-red.az" className="hover:text-[#D4AF37] transition-colors">
                  info@roses-are-red.az
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0">
                  schedule
                </span>
                <span>İş saatları: 24/7 Həftənin hər günü</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-[12px] text-[#C7B9B0]/60">
          <p>© 2025 Roses Are Red Baku. Bütün hüquqlar qorunur. Hazırlanıb: Haute Floristique Studio.</p>
          <div className="flex items-center gap-3 text-[#D4AF37]">
            <span className="font-label-caps-sm text-[10px] tracking-wider uppercase border border-[#D4AF37]/40 px-2 py-0.5 rounded">
              VISA
            </span>
            <span className="font-label-caps-sm text-[10px] tracking-wider uppercase border border-[#D4AF37]/40 px-2 py-0.5 rounded">
              MASTERCARD
            </span>
            <span className="font-label-caps-sm text-[10px] tracking-wider uppercase border border-[#D4AF37]/40 px-2 py-0.5 rounded">
              APPLE PAY
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
