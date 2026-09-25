import React from 'react';

export const ConciergeBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#1B0D11] pb-24 px-6 lg:px-12 relative" id="custom-order">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#220E13] via-[#36171E] to-[#220E13] text-[#FDF9F3] border border-[#D4AF37]/35 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Subtle Glow Accent */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#89182C]/30 blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 text-[#D4AF37] font-label-caps-sm text-[11px] uppercase tracking-[0.2em] font-semibold">
              <span className="material-symbols-outlined text-[16px]">support_agent</span>
              Florist Concierge Xidməti
            </div>
            <h3 className="font-headline-md text-2xl sm:text-3xl text-[#FDF9F3] font-normal">
              Fərdi kompozisiya və ya özəl tədbir planlaşdırırsınız?
            </h3>
            <p className="font-body-md text-[14px] sm:text-[15px] text-[#EADFD3] leading-relaxed">
              Baş floristimizlə birbaşa WhatsApp vasitəsilə əlaqə saxlayın, rəng palitrası və çiçək növlərini birlikdə seçək.
            </p>
          </div>

          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-4">
            <a
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-gradient-to-r from-[#89182C] to-[#60101E] hover:from-[#A82037] hover:to-[#781426] text-[#FDF9F3] border border-[#D4AF37]/40 font-label-caps-sm text-[11px] uppercase tracking-[0.2em] shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              href="https://wa.me/994505300369"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#D4AF37]">chat</span>
              <span>WhatsApp İlə Əlaqə</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded bg-[#271217] hover:bg-[#341820] text-[#EADFD3] hover:text-[#D4AF37] border border-[#D4AF37]/30 font-label-caps-sm text-[11px] uppercase tracking-[0.18em] transition-all"
              href="tel:0505300369"
            >
              <span className="material-symbols-outlined text-[18px] text-[#D4AF37]">call</span>
              <span>050 530 03 69</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
