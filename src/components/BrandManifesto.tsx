import React from 'react';

export const BrandManifesto: React.FC = () => {
  return (
    <section className="w-full bg-[#1B0D11] py-28 px-6 lg:px-12 relative overflow-hidden border-b border-[#D4AF37]/15">
      <div className="max-w-[960px] mx-auto text-center space-y-8 flex flex-col items-center relative z-10">
        {/* Monogram / Atelier Crest */}
        <div className="w-14 h-14 rounded-full bg-[#271217] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-lg shadow-black/50 mb-2">
          <span className="material-symbols-outlined text-[26px]">filter_vintage</span>
        </div>

        <p className="font-label-caps-lg text-[12px] text-[#D4AF37] uppercase tracking-[0.24em] font-semibold">
          Bakı Floristika Manifesti
        </p>

        <blockquote className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#FDF9F3] leading-[1.3] font-normal tracking-tight max-w-3xl">
          “Biz sadəcə güllər deyil, <span className="italic text-[#ffb3b6]">unudulmaz xatirələr</span> və emosional anlar yaradırıq.”
        </blockquote>

        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-2" />

        <p className="font-body-lg text-[15px] sm:text-[17px] text-[#EADFD3] leading-relaxed max-w-2xl font-light">
          Roses Are Red — paytaxtın aristokratik zövqünü fransız botanika zərifliyi ilə birləşdirən sənət mərkəzidir. Biz Ekvadorun hündür dağ plantasiyalarından seçilmiş təbii qızılgülləri, Hollandiyanın nadir pionalarını və unikal keramika vazaları bir araya gətirərək hər anınızı əbədiləşdiririk.
        </p>

        {/* Signature Atelier Mark */}
        <div className="pt-4 flex flex-col items-center gap-2">
          <div className="px-6 py-2.5 rounded bg-[#271217]/80 border border-[#D4AF37]/30 shadow-md flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#D4AF37] text-[18px]">spa</span>
            <span className="font-title-editorial text-[17px] text-[#FDF9F3] uppercase tracking-wider font-semibold">
              Roses Are Red
            </span>
          </div>
          <span className="font-label-caps-sm text-[10px] text-[#D4AF37] tracking-[0.25em] uppercase font-medium">
            Atelier de Fleurs • Baku
          </span>
        </div>
      </div>
    </section>
  );
};
