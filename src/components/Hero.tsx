import React from 'react';

interface HeroProps {
  onExploreCatalog: () => void;
  onCustomOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onCustomOrder }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#15080B] border-b border-[#D4AF37]/20">
      {/* Atmospheric Floral Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" 
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBv234BA1V4iRiIWNhDEt__7Zb88UeCJO7TwGfeVtd8vtwh_mrLcYrgeNG8mVnJxLY9oFLI05qp5YgoUpUB9-v7maaRsLo2SC6oyi6bjm8dCJu7XkYNkc4o_JJQvWfrzgmFzdLSiCebhlEMlz8fymRVMzyySqCMc9JyFrB_ZBUstZ0eiXwa2yJ6HZ3M8Q5Qakp1wUegO1BS3iVk-aQyzNjEhDTobiueaGd83W8pqMMqdBVu8EaWqWqT')`
        }}
      />
      {/* Deep Wine & Velvet Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B0D11] via-[#1B0D11]/85 to-[#15080B]/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B0D11]/95 via-[#271217]/75 to-transparent" />
      <div className="absolute inset-0 bg-radial-at-c from-[#89182C]/30 via-transparent to-transparent pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 pb-20 md:pt-32 md:pb-28 min-h-[85vh] flex flex-col justify-between">
        {/* Top Kicker & Editorial Narrative */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#271217]/80 border border-[#D4AF37]/35 backdrop-blur-md shadow-lg shadow-black/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="font-label-caps-sm text-[11px] text-[#D4AF37] tracking-[0.25em] uppercase font-semibold">
              Baku • Haute Floristique Atelier
            </span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl text-[#FDF9F3] leading-[1.08] font-normal tracking-tight">
            Hisslərin Ən Nəfis İfadəsi: <br />
            <span className="italic font-light text-[#ffb3b6]">Qüsursuz Gül Sənəti</span>
          </h1>

          <p className="font-body-lg text-[16px] sm:text-[18px] text-[#EADFD3] max-w-xl leading-relaxed pt-2">
            Bakının mərkəzində hər biri fərdi xarakter daşıyan elit floristik kompozisiyalar, heykəltəraş vazalar və dəbdəbəli məxmər qutular.
          </p>

          {/* CTA Interactions */}
          <div className="pt-6 flex flex-wrap items-center gap-5">
            <button
              onClick={onExploreCatalog}
              className="px-8 py-4 rounded bg-gradient-to-r from-[#89182C] to-[#60101E] hover:from-[#A82037] hover:to-[#781426] text-[#FDF9F3] border border-[#D4AF37]/40 font-label-caps-sm text-[11px] uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-[#89182C]/40 flex items-center gap-3 group cursor-pointer"
            >
              <span>Kataloqa Bax</span>
              <span className="material-symbols-outlined text-[16px] text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button
              onClick={onCustomOrder}
              className="px-8 py-4 rounded bg-[#2D141A]/80 hover:bg-[#36171E] text-[#FDF9F3] border border-[#D4AF37]/30 font-label-caps-sm text-[11px] uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-sm hover:border-[#D4AF37] cursor-pointer"
            >
              Fərdi Sifariş
            </button>
          </div>
        </div>

        {/* Luxury Trust Stat Ribbon */}
        <div className="pt-16 mt-8 border-t border-[#D4AF37]/15">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="flex items-center gap-4 text-[#FDF9F3] p-4 rounded-xl bg-[#220E13]/70 border border-[#D4AF37]/20 backdrop-blur-md">
              <span className="w-12 h-12 rounded-full bg-[#89182C]/40 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-inner shrink-0">
                <span className="material-symbols-outlined text-[22px]">local_shipping</span>
              </span>
              <div>
                <p className="font-title-editorial text-[17px] text-[#FDF9F3] leading-none font-medium">24/7 Çatdırılma</p>
                <p className="font-body-sm text-[12px] text-[#C7B9B0] mt-1">Bakı daxilində ekspress kuryer</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[#FDF9F3] p-4 rounded-xl bg-[#220E13]/70 border border-[#D4AF37]/20 backdrop-blur-md">
              <span className="w-12 h-12 rounded-full bg-[#89182C]/40 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-inner shrink-0">
                <span className="material-symbols-outlined text-[22px]">verified</span>
              </span>
              <div>
                <p className="font-title-editorial text-[17px] text-[#FDF9F3] leading-none font-medium">100% Təravət Zəmanəti</p>
                <p className="font-body-sm text-[12px] text-[#C7B9B0] mt-1">Hollandiya və Ekvadordan birbaşa</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[#FDF9F3] p-4 rounded-xl bg-[#220E13]/70 border border-[#D4AF37]/20 backdrop-blur-md">
              <span className="w-12 h-12 rounded-full bg-[#89182C]/40 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-inner shrink-0">
                <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
              </span>
              <div>
                <p className="font-title-editorial text-[17px] text-[#FDF9F3] leading-none font-medium">Bespoke Tərtibat</p>
                <p className="font-body-sm text-[12px] text-[#C7B9B0] mt-1">Hər sifarişə özəl xəttatlıq qeydi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
