import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Salam Roses Are Red! Saytdan əlaqə müraciəti:\nAd: ${name}\nTelefon: ${phone}\nQeyd: ${note}`;
    window.open(`https://wa.me/994505300369?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#1B0D11] border border-[#D4AF37]/35 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#241318]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#D4AF37]">support_agent</span>
            <h2 className="font-headline-md text-xl sm:text-2xl text-[#FDF9F3] font-normal">
              Əlaqə & Fərdi Sifariş
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
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="tel:0505300369"
              className="p-4 rounded-xl bg-[#220E13] border border-[#D4AF37]/25 hover:border-[#D4AF37] flex items-center gap-3.5 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#89182C]/40 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-label-caps-sm text-[#D4AF37] tracking-wider block font-semibold">
                  Zəng Edin
                </span>
                <span className="font-title-editorial text-[16px] text-[#FDF9F3] group-hover:text-[#D4AF37]">
                  050 530 03 69
                </span>
              </div>
            </a>

            <a
              href="https://wa.me/994505300369"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#220E13] border border-[#D4AF37]/25 hover:border-[#D4AF37] flex items-center gap-3.5 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#89182C]/40 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-label-caps-sm text-[#D4AF37] tracking-wider block font-semibold">
                  WhatsApp Concierge
                </span>
                <span className="font-title-editorial text-[16px] text-[#FDF9F3] group-hover:text-[#D4AF37]">
                  050 530 03 69
                </span>
              </div>
            </a>
          </div>

          {/* Location & Hours */}
          <div className="p-4 rounded-xl bg-[#220E13] border border-[#D4AF37]/20 space-y-2 text-xs sm:text-sm text-[#C7B9B0]">
            <p className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0 mt-0.5">location_on</span>
              <span>Nizami küç. 48, Fəvvarələr Meydanı yaxınlığı, Bakı, Azərbaycan</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#D4AF37] shrink-0">schedule</span>
              <span>İş saatları: 24/7 Həftənin hər günü fasiləsiz ekspress çatdırılma</span>
            </p>
          </div>

          {/* Contact / Custom Arrangement Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <span className="font-label-caps-sm text-[11px] text-[#D4AF37] uppercase tracking-[0.2em] font-semibold block">
              Fərdi Sifariş və Məsləhət Forması
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınız və Soyadınız"
                className="w-full bg-[#220E13] border border-[#D4AF37]/30 text-[#FDF9F3] text-sm p-3 rounded-lg focus:outline-none focus:border-[#D4AF37]"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefon nömrəniz (məs: 050 ...)"
                className="w-full bg-[#220E13] border border-[#D4AF37]/30 text-[#FDF9F3] text-sm p-3 rounded-lg focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <textarea
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Arzuladığınız kompozisiya, çiçək növləri və ya xüsusi tələbləriniz..."
              className="w-full bg-[#220E13] border border-[#D4AF37]/30 text-[#FDF9F3] text-sm p-3 rounded-lg focus:outline-none focus:border-[#D4AF37] resize-none"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#89182C] to-[#60101E] hover:from-[#A82037] hover:to-[#781426] text-[#FDF9F3] border border-[#D4AF37]/40 font-label-caps-sm text-[11px] uppercase tracking-[0.2em] shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer font-semibold"
            >
              <span className="material-symbols-outlined text-[18px] text-[#D4AF37]">chat</span>
              WhatsApp İlə Göndər
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
