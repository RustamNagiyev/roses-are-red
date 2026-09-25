import React from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreCatalog: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onExploreCatalog }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#1B0D11] border border-[#D4AF37]/35 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#241318]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#D4AF37]">filter_vintage</span>
            <h2 className="font-headline-md text-xl sm:text-2xl text-[#FDF9F3] font-normal">
              Haqqımızda • Roses Are Red
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2D141A] border border-[#D4AF37]/30 flex items-center justify-center text-[#EADFD3] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <div className="relative aspect-[16/7] rounded-xl overflow-hidden border border-[#D4AF37]/25 shadow-lg">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv234BA1V4iRiIWNhDEt__7Zb88UeCJO7TwGfeVtd8vtwh_mrLcYrgeNG8mVnJxLY9oFLI05qp5YgoUpUB9-v7maaRsLo2SC6oyi6bjm8dCJu7XkYNkc4o_JJQvWfrzgmFzdLSiCebhlEMlz8fymRVMzyySqCMc9JyFrB_ZBUstZ0eiXwa2yJ6HZ3M8Q5Qakp1wUegO1BS3iVk-aQyzNjEhDTobiueaGd83W8pqMMqdBVu8EaWqWqT"
              alt="Roses Are Red Atelier"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B0D11] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="font-label-caps-sm text-[11px] text-[#D4AF37] uppercase tracking-[0.25em] font-semibold">
                Haute Floristique Atelier Baku
              </span>
            </div>
          </div>

          <div className="space-y-4 text-[#EADFD3] text-sm sm:text-base leading-relaxed font-light">
            <p>
              <strong className="text-[#FDF9F3] font-semibold">Roses Are Red</strong> — Bakı şəhərinin ürəyində aristokratik zövqü, fransız botanika incəliyini və müasir heykəltəraşlıq estetikasını bir araya gətirən elit floristik atelyedir.
            </p>
            <p>
              Biz çiçəkləri sadəcə bir hədiyyə kimi deyil, hisslərin ən nəfis və unudulmaz təcəssümü kimi görürük. Tərtibatlarımızda istifadə olunan bütün güllər Ekvadorun Kito dağətəyi plantasiyalarından və Hollandiyanın qapalı hərraclarından həftəlik birbaşa xüsusi iqlim nəzarətli reyslərlə gətirilir.
            </p>
            <p>
              Hər bir kompozisiya sertifikatlı baş floristlərimiz tərəfindən fərdi arxitektura əsasında yığılır, fransız məxməri qutularla tamamlanır və əllə yazılmış xəttatlıq məktubu ilə təqdim edilir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D4AF37]/15">
            <div className="p-4 rounded-xl bg-[#220E13] border border-[#D4AF37]/20 text-center">
              <span className="font-headline-sm text-2xl text-[#D4AF37] font-semibold">100%</span>
              <p className="font-body-sm text-xs text-[#C7B9B0] mt-1">Hollandiya və Ekvador təbii çiçəkləri</p>
            </div>
            <div className="p-4 rounded-xl bg-[#220E13] border border-[#D4AF37]/20 text-center">
              <span className="font-headline-sm text-2xl text-[#D4AF37] font-semibold">24/7</span>
              <p className="font-body-sm text-xs text-[#C7B9B0] mt-1">Bakı daxilində ekspress çatdırılma</p>
            </div>
            <div className="p-4 rounded-xl bg-[#220E13] border border-[#D4AF37]/20 text-center">
              <span className="font-headline-sm text-2xl text-[#D4AF37] font-semibold">VIP</span>
              <p className="font-body-sm text-xs text-[#C7B9B0] mt-1">Anonim və fərdiləşdirilmiş təqdimat</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#241318] border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-[#C7B9B0]">
            Suallarınız üçün: <strong className="text-[#D4AF37]">050 530 03 69</strong>
          </span>
          <button
            onClick={() => {
              onClose();
              onExploreCatalog();
            }}
            className="px-6 py-2.5 rounded bg-gradient-to-r from-[#89182C] to-[#60101E] hover:from-[#A82037] hover:to-[#781426] text-[#FDF9F3] border border-[#D4AF37]/40 font-label-caps-sm text-[11px] uppercase tracking-wider transition-all cursor-pointer font-semibold"
          >
            Kataloqa Bax
          </button>
        </div>
      </div>
    </div>
  );
};
