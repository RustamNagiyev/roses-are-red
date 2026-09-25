import React, { useState } from 'react';

interface AboutPageProps {
  onNavigateCatalog: () => void;
  onNavigateContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateCatalog: _onNavigateCatalog,
  onNavigateContact,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [appointmentName, setAppointmentName] = useState('');
  const [appointmentPhone, setAppointmentPhone] = useState('');
  const [appointmentSubject, setAppointmentSubject] = useState('Toy və Gəlinlik Floristikası');
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Salam Roses Are Red! Atelye ziyarəti üçün rezervasiya:\nAd: ${appointmentName}\nTelefon: ${appointmentPhone}\nMövzu: ${appointmentSubject}`;
    window.open(`https://wa.me/994505300369?text=${encodeURIComponent(msg)}`, '_blank');
    setAppointmentSuccess(true);
    setTimeout(() => {
      setAppointmentSuccess(false);
      setModalOpen(false);
      setAppointmentName('');
      setAppointmentPhone('');
    }, 2500);
  };

  return (
    <div className="flex flex-col w-full bg-[#1b1013] text-[#f3dde1]">
      {/* Editorial Hero Section with Velour Red Atmosphere */}
      <section className="relative w-full overflow-hidden bg-[#150b0e]">
        <div className="relative w-full h-[78vh] min-h-[580px] max-h-[820px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-[1.01]"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCF6xLqiU4i8lQ8LILtq7G9guD-Ix5lpw5xbeCVGyzaWQ83HdHqdrONU5Fn8A_FHAxoOHSD0AwaGfGm56m8ebBqMjJkiW_Vz4h96LN0ddogpoOLrUaNaT-b7n9szpiYNTwW5zlffUtRZLxJLXEOTS1PcW7ZSYFFsIDbj9gfKb_tIrDWSlulBo7FHB_hCQGXNbayoIZG0B9aJIL4uoi1ODqKAxrO7OccuBqyR6ICWMWgRMF6oobOoI0d')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1013] via-[#261117]/80 to-[#150b0e]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b1013]/90 via-[#40000c]/40 to-transparent" />

          {/* Hero Typography Framing */}
          <div className="relative max-w-[1440px] mx-auto h-full px-6 lg:px-12 flex flex-col justify-end pb-16 md:pb-24">
            <div className="max-w-3xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#e9c176]" />
                <span className="font-label-caps-sm text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold">
                  Haqqımızda • Məramımız
                </span>
              </div>
              <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl text-[#fff5f6] tracking-tight leading-none text-balance font-normal">
                Gül Sənətinin Fəlsəfəsi
              </h1>
              <p className="font-body-lg text-[17px] sm:text-[19px] text-[#debfc0] max-w-2xl font-light leading-relaxed">
                Bakıda çiçəkçilik ənənəsini müasir memarlıq zövqü və yüksək dəb standartları ilə birləşdiririk.
              </p>
            </div>

            {/* Atmospheric Coordinates Accent */}
            <div className="hidden lg:flex absolute bottom-16 right-12 flex-col items-end text-[#debfc0]/80 font-label-caps-sm text-[11px] tracking-[0.22em] uppercase">
              <span>40.3725° N, 49.8406° E</span>
              <span className="text-[#e9c176]/90 mt-1">Baku Atelier • Est. 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Statement Ribbon */}
      <section className="w-full bg-[#24181c] py-10 border-y border-[#574142]/40 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#40000c]/15 via-transparent to-[#40000c]/15 pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#ffb3b6] text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              spa
            </span>
            <span className="font-label-caps-sm text-[11px] uppercase tracking-[0.2em] text-[#fff5f6] font-medium">
              Haute Floristique Kompozisiyaları
            </span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#574142]" />
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#e9c176] text-[22px]">architecture</span>
            <span className="font-label-caps-sm text-[11px] uppercase tracking-[0.2em] text-[#fff5f6] font-medium">
              Skulptural Botanik Nisbətlər
            </span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#574142]" />
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#ffb3b6] text-[22px]">temp_preferences_custom</span>
            <span className="font-label-caps-sm text-[11px] uppercase tracking-[0.2em] text-[#fff5f6] font-medium">
              İqlim Qorumalı Çatdırılma
            </span>
          </div>
        </div>
      </section>

      {/* Brand Story Section (Dual Column Asymmetric Layout) */}
      <section className="w-full py-24 lg:py-32 bg-[#1b1013] relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#89182c]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Quote Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="font-label-caps-sm text-[11px] tracking-[0.22em] text-[#e9c176] uppercase font-semibold">
                  Kredo • Nəcib Forma
                </span>
                <blockquote className="font-headline-md text-2xl sm:text-3xl text-[#fff5f6] leading-[1.3] font-normal italic">
                  “Güllər sözlərin çatmadığı yerdə danışan ən nəcib memarlıq formasıdır.”
                </blockquote>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="w-12 h-12 rounded-full bg-[#89182c]/40 border border-[#574142]/40 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#ffb3b6] text-[24px]">local_florist</span>
                </div>
                <div>
                  <p className="font-title-editorial text-xl sm:text-2xl text-[#fff5f6]">Leyla Mahmudova</p>
                  <p className="font-label-caps-sm text-[11px] text-[#e9c176] uppercase tracking-wider">
                    Kreativ Direktor & Baş Florist
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-8 text-[#f3dde1]">
              <div className="bg-[#281c20] border border-[#574142]/40 p-8 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.4)] rounded-lg space-y-6 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#89182c]/20 rounded-full blur-[70px] pointer-events-none" />
                <p className="font-body-lg text-[17px] sm:text-[19px] text-[#fff5f6] leading-relaxed relative font-light">
                  <span className="font-semibold text-[#ffb3b6]">Roses Are Red</span> 2019-cu ildə Bakıda yaradılmış müstəqil haute floristique atelyesidir. Biz təkcə buket tərtib etmirik; hər bir kompozisiyanı rəng harmoniyası, forma tarazlığı və botanik mükəmməllik prinsipləri ilə heykəltəraşlıq əsəri kimi inşa edirik.
                </p>
                <p className="font-body-lg text-[17px] sm:text-[19px] text-[#debfc0] leading-relaxed relative font-light">
                  Dünyanın ən nüfuzlu plantasiyalarından (Ekvador, Niderland və Keniya) birbaşa gətirilən seçmə güllərimiz xüsusi temperatur rejimi ilə saxlanılır və atelyemizdə yalnız təbii, bioloji parçalanan lüks qablaşdırmalarla təqdim olunur.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6 mt-6 bg-[#1f1317] border border-[#574142]/30 p-6 rounded relative">
                  <div>
                    <p className="font-price-editorial text-2xl text-[#ffb3b6] font-semibold">100%</p>
                    <p className="font-label-caps-sm text-[10px] sm:text-[11px] text-[#e9c176] uppercase tracking-wider mt-1 font-medium">
                      Ekoloji Qablaşdırma
                    </p>
                  </div>
                  <div>
                    <p className="font-price-editorial text-2xl text-[#ffb3b6] font-semibold">24/7</p>
                    <p className="font-label-caps-sm text-[10px] sm:text-[11px] text-[#e9c176] uppercase tracking-wider mt-1 font-medium">
                      Kuryer Xidməti
                    </p>
                  </div>
                  <div>
                    <p className="font-price-editorial text-2xl text-[#ffb3b6] font-semibold">A+</p>
                    <p className="font-label-caps-sm text-[10px] sm:text-[11px] text-[#e9c176] uppercase tracking-wider mt-1 font-medium">
                      Hollandiya Standartı
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section (3 Bespoke Dark Wine Velvet Cards) */}
      <section className="w-full py-20 lg:py-28 bg-[#24181c] border-y border-[#574142]/30 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#40000c]/30 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
            <div>
              <span className="font-label-caps-sm text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold">
                Dəyərlərimiz
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#fff5f6] tracking-tight mt-2 font-normal">
                Kompromissiz Zövq Standartı
              </h2>
            </div>
            <p className="font-body-md text-[14px] sm:text-[16px] text-[#debfc0] max-w-sm">
              Hər kəsim, hər budaq və hər detal memarlıq dəqiqliyi ilə seçilir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-[#2e1d23] hover:bg-[#382129] border border-[#574142]/40 hover:border-[#ffb3b6]/50 p-8 lg:p-10 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffb3b6]/5 rounded-full blur-2xl group-hover:bg-[#ffb3b6]/10 transition-colors pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded bg-[#3e242c] border border-[#574142]/50 flex items-center justify-center text-[#ffb3b6] group-hover:bg-[#ffb3b6] group-hover:text-[#680019] transition-all mb-8 shadow-inner">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <span className="font-label-caps-sm text-[11px] tracking-[0.2em] text-[#e9c176] uppercase font-semibold">
                  01 • Seçim
                </span>
                <h3 className="font-headline-sm text-xl sm:text-2xl text-[#fff5f6] mt-2 mb-4 font-normal">
                  Qüsursuz Keyfiyyət
                </h3>
                <p className="font-body-md text-[14px] sm:text-[16px] text-[#debfc0] leading-relaxed font-light">
                  Yalnız A+ dərəcəli Ekvador və Hollandiya sortları. Hər səhər təzələnən kolleksiya və xüsusi su ionlaşdırma standartı.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#574142]/30 flex items-center gap-2 text-[#ffb3b6] group-hover:text-[#e9c176] font-label-caps-sm text-[11px] tracking-wider uppercase transition-colors font-semibold">
                <span>Sertifikatlaşdırılmış Sortlar</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#2e1d23] hover:bg-[#382129] border border-[#574142]/40 hover:border-[#ffb3b6]/50 p-8 lg:p-10 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffb3b6]/5 rounded-full blur-2xl group-hover:bg-[#ffb3b6]/10 transition-colors pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded bg-[#3e242c] border border-[#574142]/50 flex items-center justify-center text-[#ffb3b6] group-hover:bg-[#ffb3b6] group-hover:text-[#680019] transition-all mb-8 shadow-inner">
                  <span className="material-symbols-outlined text-[24px]">palette</span>
                </div>
                <span className="font-label-caps-sm text-[11px] tracking-[0.2em] text-[#e9c176] uppercase font-semibold">
                  02 • Kompozisiya
                </span>
                <h3 className="font-headline-sm text-xl sm:text-2xl text-[#fff5f6] mt-2 mb-4 font-normal">
                  Fərdi Floristika
                </h3>
                <p className="font-body-md text-[14px] sm:text-[16px] text-[#debfc0] leading-relaxed font-light">
                  Şablon yoxdur. Hər müştərinin emosiyasına və hadisəsinə uyğun unikal dizayn arxitekturası və müəllif baxışı.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#574142]/30 flex items-center gap-2 text-[#ffb3b6] group-hover:text-[#e9c176] font-label-caps-sm text-[11px] tracking-wider uppercase transition-colors font-semibold">
                <span>Eksklüziv Dizayn Xətti</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#2e1d23] hover:bg-[#382129] border border-[#574142]/40 hover:border-[#ffb3b6]/50 p-8 lg:p-10 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffb3b6]/5 rounded-full blur-2xl group-hover:bg-[#ffb3b6]/10 transition-colors pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded bg-[#3e242c] border border-[#574142]/50 flex items-center justify-center text-[#ffb3b6] group-hover:bg-[#ffb3b6] group-hover:text-[#680019] transition-all mb-8 shadow-inner">
                  <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
                </div>
                <span className="font-label-caps-sm text-[11px] tracking-[0.2em] text-[#e9c176] uppercase font-semibold">
                  03 • Təqdimat
                </span>
                <h3 className="font-headline-sm text-xl sm:text-2xl text-[#fff5f6] mt-2 mb-4 font-normal">
                  24/7 Prestij Çatdırılma
                </h3>
                <p className="font-body-md text-[14px] sm:text-[16px] text-[#debfc0] leading-relaxed font-light">
                  Xüsusi geyimli kuryerlərimiz və qoruyucu iqlim sistemli avtomobillərimizlə şəhərin hər nöqtəsinə qüsursuz çatdırılma.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#574142]/30 flex items-center gap-2 text-[#ffb3b6] group-hover:text-[#e9c176] font-label-caps-sm text-[11px] tracking-wider uppercase transition-colors font-semibold">
                <span>Konfidensial Xidmət</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Baku Atelier Spotlight Section */}
      <section className="w-full py-24 lg:py-32 bg-[#1b1013] relative">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#604403]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Luxury Floral Box Feature */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[4/3] bg-[#24181c] border border-[#574142]/30">
                <img
                  alt="Haute couture luxury flower box arrangement for elite floral boutique"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyIhv9Zc4xi7jwzEBQ6lfPaBbHEoXkAyWlOGLQnbRFAttOMLfofjukwAMPN8PMdYFlxT7vNnE4m2eBotMOQ7FVy-SbuhrTnbftxCGrbDMTj1HE_88jLeln1qenGCDuHMAEptxwSBQDPz48_Jf7QkQ_YddfTGDbjlciNSW99-zRXyL-VAAskaEQG7iYRQko6qUSnymiDkFzpftzLQpWrdPFgH753clCfnJTA0j_W-KFvYHya_1eIQi"
                />
              </div>
              {/* Decorative Floating Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 bg-[#281c20] border border-[#574142]/50 p-6 rounded-lg shadow-[0_16px_40px_rgba(0,0,0,0.6)] max-w-xs backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#ffb3b6] text-[22px]">pin_drop</span>
                  <div>
                    <p className="font-label-caps-sm text-[11px] uppercase tracking-wider text-[#e9c176]">Məkan</p>
                    <p className="font-title-editorial text-lg text-[#fff5f6]">Nizami küç. 48, Bakı</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Atelier Narrative and Booking */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-label-caps-sm text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold">
                Məkanımız & İrs
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#fff5f6] tracking-tight leading-tight font-normal">
                Bizim Atelye: Nizami Küçəsi, Bakı
              </h2>
              <p className="font-body-lg text-[16px] sm:text-[18px] text-[#debfc0] leading-relaxed font-light">
                Şəhərin qəlbində yerləşən məkanımıza gələrək təzə çiçəklərin ətrini duya, kofe içərək floristlərimizlə fərdi layihələrinizi (toylar, korporativ tədbirlər, özəl hədiyyələr) müzakirə edə bilərsiniz.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#89182c] hover:bg-[#aa3242] text-[#ffdada] border border-[#ffb3b6]/30 rounded font-label-caps-sm text-[11px] uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(137,24,44,0.4)] transition-all cursor-pointer font-semibold"
                >
                  <span>Atelyeyə Ziyarət Təyin Edin</span>
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                </button>
                <a
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#281c20] text-[#e9c176] border border-[#574142]/40 rounded font-label-caps-sm text-[11px] uppercase tracking-[0.2em] hover:bg-[#33272a] hover:text-[#fff5f6] transition-colors"
                  href="https://wa.me/994505300369"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>WhatsApp ilə Əlaqə</span>
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                </a>
              </div>
              <div className="pt-8 grid grid-cols-2 gap-6 border-t border-[#574142]/30">
                <div className="space-y-1">
                  <p className="font-label-caps-sm text-[11px] uppercase tracking-wider text-[#e9c176]">İş Saatları</p>
                  <p className="font-body-md text-[14px] sm:text-[16px] text-[#fff5f6] font-semibold">
                    Bazar ertəsi - Bazar: 10:00 - 21:00
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-label-caps-sm text-[11px] uppercase tracking-wider text-[#e9c176]">Konsyerj Xətti</p>
                  <a href="tel:0505300369" className="font-body-md text-[14px] sm:text-[16px] text-[#fff5f6] font-semibold hover:text-[#e9c176] transition-colors block">
                    +994 (50) 530 03 69
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modal for Atelier Appointment Booking */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-lg bg-[#24181c] border border-[#574142]/50 p-8 md:p-10 rounded-lg shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#574142]/30">
              <div>
                <span className="font-label-caps-sm text-[11px] uppercase tracking-[0.2em] text-[#e9c176]">
                  Roses Are Red Concierge
                </span>
                <h3 className="font-headline-sm text-2xl text-[#fff5f6] mt-1 font-normal">
                  Atelye Görüşü Təyin Edin
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                aria-label="Bağla"
                className="p-2 text-[#debfc0] hover:text-[#fff5f6] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>
            <p className="font-body-md text-[14px] text-[#debfc0]">
              Floristlərimizlə toy dekorasiyası, böyük buket sifarişi və ya korporativ layihə üçün qəbul vaxtınızı rezerv edin.
            </p>
            <form onSubmit={handleAppointmentSubmit} className="space-y-4">
              <div>
                <label className="block font-label-caps-sm text-[11px] uppercase tracking-wider text-[#e9c176] mb-2 font-semibold">
                  Ad və Soyadınız
                </label>
                <input
                  value={appointmentName}
                  onChange={(e) => setAppointmentName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#150b0e] border border-[#574142]/40 rounded text-[#fff5f6] placeholder-[#debfc0]/50 font-body-md text-[14px] focus:outline-none focus:border-[#ffb3b6] shadow-sm"
                  placeholder="Məs. Nərgiz Əliyeva"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="block font-label-caps-sm text-[11px] uppercase tracking-wider text-[#e9c176] mb-2 font-semibold">
                  Əlaqə Nömrəniz
                </label>
                <input
                  value={appointmentPhone}
                  onChange={(e) => setAppointmentPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-[#150b0e] border border-[#574142]/40 rounded text-[#fff5f6] placeholder-[#debfc0]/50 font-body-md text-[14px] focus:outline-none focus:border-[#ffb3b6] shadow-sm"
                  placeholder="050 530 03 69"
                  required
                  type="tel"
                />
              </div>
              <div>
                <label className="block font-label-caps-sm text-[11px] uppercase tracking-wider text-[#e9c176] mb-2 font-semibold">
                  Görüş Mövzusu
                </label>
                <select
                  value={appointmentSubject}
                  onChange={(e) => setAppointmentSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-[#150b0e] border border-[#574142]/40 rounded text-[#fff5f6] font-body-md text-[14px] focus:outline-none focus:border-[#ffb3b6] shadow-sm cursor-pointer"
                >
                  <option className="bg-[#150b0e] text-[#fff5f6]" value="Toy və Gəlinlik Floristikası">
                    Toy və Gəlinlik Floristikası
                  </option>
                  <option className="bg-[#150b0e] text-[#fff5f6]" value="Fərdi Lüks Buket Konsultasiyası">
                    Fərdi Lüks Buket Konsultasiyası
                  </option>
                  <option className="bg-[#150b0e] text-[#fff5f6]" value="Korporativ Tərtibat və İnteryer">
                    Korporativ Tərtibat və İnteryer
                  </option>
                  <option className="bg-[#150b0e] text-[#fff5f6]" value="Digər Özəl Hadisələr">
                    Digər Özəl Hadisələr
                  </option>
                </select>
              </div>
              <button
                className="w-full py-4 mt-2 bg-[#89182c] hover:bg-[#aa3242] text-[#ffdada] font-label-caps-sm text-[11px] uppercase tracking-[0.2em] rounded border border-[#ffb3b6]/30 shadow-[0_4px_16px_rgba(137,24,44,0.4)] transition-colors cursor-pointer font-semibold"
                type="submit"
              >
                Rezervasiyanı Təsdiqləyin
              </button>
            </form>
            {appointmentSuccess && (
              <div className="text-center p-4 bg-[#150b0e] border border-[#ffb3b6]/40 rounded text-[#ffb3b6] font-body-md text-[14px]">
                Müraciətiniz qəbul olundu. Tezliklə florist komandamız sizinlə əlaqə saxlayacaq.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
