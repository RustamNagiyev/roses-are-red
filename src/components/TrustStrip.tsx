import React from 'react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#15080B] py-20 px-6 lg:px-12 border-b border-[#D4AF37]/15 relative">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-label-caps-sm text-[11px] text-[#D4AF37] uppercase tracking-[0.22em] font-semibold">
            Zəmanət və Standart
          </span>
          <h2 className="font-headline-md text-2xl sm:text-3xl text-[#FDF9F3] font-normal mt-1">
            Roses Are Red Təcrübəsi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-xl bg-[#220E13] border border-[#D4AF37]/25 shadow-xl flex flex-col space-y-4 hover:border-[#D4AF37] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#89182C]/30 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">thermostat</span>
            </div>
            <h3 className="font-title-editorial text-[18px] font-medium text-[#FDF9F3]">
              24/7 İqlim Nəzarətli Çatdırılma
            </h3>
            <p className="font-body-sm text-[13px] text-[#C7B9B0] leading-relaxed">
              Bakının hər nöqtəsinə xüsusi soyuduculu avtomobillər və ağ əlcəkli kuryerlərlə təzəliyi qorunaraq çatdırılır.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#220E13] border border-[#D4AF37]/25 shadow-xl flex flex-col space-y-4 hover:border-[#D4AF37] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#89182C]/30 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">spa</span>
            </div>
            <h3 className="font-title-editorial text-[18px] font-medium text-[#FDF9F3]">
              100% Əl İşi və Təravət
            </h3>
            <p className="font-body-sm text-[13px] text-[#C7B9B0] leading-relaxed">
              Hər səhər Hollandiya hərraclarından daxil olan ən saf çiçəklər təcrübəli floristlərimiz tərəfindən fərdi yığılır.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#220E13] border border-[#D4AF37]/25 shadow-xl flex flex-col space-y-4 hover:border-[#D4AF37] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#89182C]/30 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">edit_note</span>
            </div>
            <h3 className="font-title-editorial text-[18px] font-medium text-[#FDF9F3]">
              Eksklüziv Hədiyyə Tərtibatı
            </h3>
            <p className="font-body-sm text-[13px] text-[#C7B9B0] leading-relaxed">
              İpək lentlər, xüsusi möhürlənmiş zərf, əl ilə yazılmış xəttatlıq məktubu və fərdi ətir notu ilə müşayiət olunur.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#220E13] border border-[#D4AF37]/25 shadow-xl flex flex-col space-y-4 hover:border-[#D4AF37] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#89182C]/30 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">visibility_off</span>
            </div>
            <h3 className="font-title-editorial text-[18px] font-medium text-[#FDF9F3]">
              Anonim və VIP Sifariş
            </h3>
            <p className="font-body-sm text-[13px] text-[#C7B9B0] leading-relaxed">
              Sifarişçinin məxfiliyi 100% qorunur. Təqdimat zamanı yalnız sizin arzu etdiyiniz məlumatlar çatdırılır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
