import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [targetTime, setTargetTime] = useState('asap');
  const [clientNotes, setClientNotes] = useState('');
  const [anonymousGift, setAnonymousGift] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderDetails = `Salam Roses Are Red! Saytdan sifariş və sorğu:\n
Ad və Soyad: ${fullName}
Telefon / WhatsApp: ${phoneNumber}
Ünvan: ${deliveryAddress || 'Atelyedən təhvil'}
Xidmət növü: ${serviceType}
Tarix: ${targetDate || 'Təcili'} | Saat: ${targetTime}
${anonymousGift ? '⚠️ ANONİM ÇATDIRILMA TƏLƏB OLUNUR\n' : ''}
Qeydlər: ${clientNotes || 'Yoxdur'}`;

    window.open(`https://wa.me/994505300369?text=${encodeURIComponent(orderDetails)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullName('');
      setPhoneNumber('');
      setDeliveryAddress('');
      setClientNotes('');
    }, 3500);
  };

  const faqs = [
    {
      q: 'Çatdırılma müddəti nə qədərdir?',
      a: 'Bakı mərkəzində ekspress çatdırılma sifariş təsdiq edildikdən sonra 60–90 dəqiqə ərzində həyata keçirilir. Abşeron yarımadasının digər ərazilərinə isə təyin olunmuş dəqiq saat aralığında çatdırılır.',
    },
    {
      q: 'Anonim göndəriş mümkündürmü?',
      a: 'Bəli, sifariş formasında "Anonim Çatdırılma" qutusunu qeyd etdiyiniz halda, kuryerimiz və müştəri xidmətimiz göndərənin adını heç bir vəchlə alıcıya açıqlamır.',
    },
    {
      q: 'Hansı ödəniş üsulları mövcuddur?',
      a: 'Bütün yerli və xarici Visa, Mastercard kartları, Apple Pay, atelyedə nağd/pos terminal, həmçinin şirkətlər üçün bank hesabına köçürmə yolu ilə ödənişlər qəbul olunur.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#15090e] text-[#f8f2eb] relative overflow-hidden">
      {/* Ambient Wine Glow Effects */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-[#89182c]/25 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-32 w-96 h-96 bg-[#5f1322]/20 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#3a0d18]/30 rounded-full blur-[160px]" />

      {/* Editorial Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#200d16] via-[#1a0a11] to-[#15090e] border-b border-[#e9c176]/15 py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text Intro */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-block w-8 h-[1px] bg-[#e9c176]" />
                <span className="font-label-caps-sm text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold">
                  Haute Floristique • Nizami St. Atelier
                </span>
              </div>
              <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl text-[#f8f2eb] tracking-tight leading-none font-normal">
                Bizimlə Əlaqə & <span className="italic font-normal text-[#ffb2b9]">Fərdi Sifariş</span>
              </h1>
              <p className="font-body-lg text-[16px] sm:text-[18px] text-[#dfc3c8]/90 max-w-xl leading-relaxed font-light">
                Bakı daxilində 24/7 ekspress sifariş qəbulu, fərdi florist məsləhəti və atelye ziyarəti üçün xidmətinizdəyik. Təbiətin zərifliyini sizin hisslərinizlə birləşdiririk.
              </p>

              {/* Quick Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4 max-w-lg">
                <div className="bg-[#241019]/90 border border-[#e9c176]/20 p-4 rounded-lg shadow-lg backdrop-blur-sm">
                  <span className="font-title-editorial text-2xl text-[#e9c176] block font-medium">60 dəq</span>
                  <span className="font-label-caps-sm text-[10px] text-[#dfc3c8]/70 uppercase">Ekspress Kuryer</span>
                </div>
                <div className="bg-[#241019]/90 border border-[#e9c176]/20 p-4 rounded-lg shadow-lg backdrop-blur-sm">
                  <span className="font-title-editorial text-2xl text-[#e9c176] block font-medium">100%</span>
                  <span className="font-label-caps-sm text-[10px] text-[#dfc3c8]/70 uppercase">Hollandiya Flora</span>
                </div>
                <div className="bg-[#241019]/90 border border-[#e9c176]/20 p-4 rounded-lg shadow-lg backdrop-blur-sm">
                  <span className="font-title-editorial text-2xl text-[#e9c176] block font-medium">24 / 7</span>
                  <span className="font-label-caps-sm text-[10px] text-[#dfc3c8]/70 uppercase">Concierge Dəstək</span>
                </div>
              </div>
            </div>

            {/* Visual Atelier Window */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] bg-[#220d17] border border-[#e9c176]/30">
                <img
                  className="w-full h-full object-cover object-center"
                  alt="Modern high-end luxury floral atelier in central Baku"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAGsFiEI4XXFiH6RjPeQANu4m5_vSpM6fznj2wjVtCsgB2mxMN7nnMWjfsqL435Mz9ujo9iC8kuRgt_zllGWARsPEWRF47LnPDtD4J_-COEkO3IYBR0ZGeStP_QKsMZyDZpRqBzy3m5ylKoTmbQb1pqmqNArnW74rDnRPO5lG_sxKzn5e-ORz7HlYznBB7zjtDPbBz1cPzd5nezDG3FNiL71cqLRRPv1vYXb5XdI8NZVktQxRUFrB_"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15090e]/90 via-[#1b0c13]/30 to-transparent flex flex-col justify-end p-6 text-[#f8f2eb]">
                  <span className="font-label-caps-sm text-[11px] tracking-[0.2em] uppercase text-[#e9c176] font-semibold">
                    Atelier Fleur Baku
                  </span>
                  <p className="font-title-editorial text-[18px] text-[#f8f2eb] drop-shadow-md">
                    Canlı kompozisiyaların yaradıldığı fərdi məkanımız
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout (Form + Concierge & Atelier Details) */}
      <section className="w-full py-16 lg:py-24 bg-[#15090e]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-gradient-to-b from-[#26111a]/95 to-[#1c0c14]/95 backdrop-blur-xl border border-[#e9c176]/30 rounded-xl p-8 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative">
                <div className="flex items-center justify-between pb-6 border-b border-[#e9c176]/15">
                  <div>
                    <span className="font-label-caps-sm text-[11px] text-[#e9c176] uppercase tracking-[0.22em] block mb-1 font-semibold">
                      Rezervasiya və Sorğu
                    </span>
                    <h2 className="font-headline-sm text-2xl text-[#f8f2eb] font-normal">
                      Onlayn Müraciət və ya Sifariş
                    </h2>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#1a0910] border border-[#e9c176]/25 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-label-caps-sm text-[10px] text-[#e9c176] uppercase font-semibold">
                      Floristlər aktivdir
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 pt-6">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-caps-sm text-[11px] text-[#dfc3c8] uppercase tracking-wider block font-semibold" htmlFor="fullName">
                        Ad və Soyadınız <span className="text-[#ff9fa7]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Məs: Leyla Əliyeva"
                        className="w-full bg-[#180a11] text-[#f8f2eb] placeholder:text-[#dfc3c8]/40 border border-[#5d3240] focus:border-[#e9c176] px-4 py-3.5 rounded-lg text-sm outline-none transition-colors shadow-inner"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps-sm text-[11px] text-[#dfc3c8] uppercase tracking-wider block font-semibold" htmlFor="phoneNumber">
                        Əlaqə Telefonunuz / WhatsApp <span className="text-[#ff9fa7]">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="050 530 03 69"
                        className="w-full bg-[#180a11] text-[#f8f2eb] placeholder:text-[#dfc3c8]/40 border border-[#5d3240] focus:border-[#e9c176] px-4 py-3.5 rounded-lg text-sm outline-none transition-colors shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <label className="font-label-caps-sm text-[11px] text-[#dfc3c8] uppercase tracking-wider block font-semibold" htmlFor="deliveryAddress">
                      Çatdırılma Ünvanı (Bakı daxilində)
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-[#e9c176] text-[20px] pointer-events-none">
                        location_on
                      </span>
                      <input
                        id="deliveryAddress"
                        type="text"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="Məs: Nəsimi ray., Nizami küç. 48, Mənzil 12"
                        className="w-full pl-11 pr-4 py-3.5 bg-[#180a11] text-[#f8f2eb] placeholder:text-[#dfc3c8]/40 border border-[#5d3240] focus:border-[#e9c176] rounded-lg text-sm outline-none transition-colors shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div className="space-y-2">
                    <label className="font-label-caps-sm text-[11px] text-[#dfc3c8] uppercase tracking-wider block font-semibold" htmlFor="serviceType">
                      Tələb olunan Xidmət növü <span className="text-[#ff9fa7]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="serviceType"
                        required
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full appearance-none bg-[#180a11] text-[#f8f2eb] border border-[#5d3240] focus:border-[#e9c176] px-4 py-3.5 rounded-lg text-sm outline-none transition-colors shadow-inner cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#1e0d16] text-[#dfc3c8]">
                          Xidmət növünü seçin
                        </option>
                        <option value="Kataloq Buketi Sifarişi" className="bg-[#1e0d16]">
                          Kataloq Buketi Sifarişi
                        </option>
                        <option value="Fərdi Dəbdəbəli Kompozisiya (Couture)" className="bg-[#1e0d16]">
                          Fərdi Dəbdəbəli Kompozisiya (Couture)
                        </option>
                        <option value="Gəlinlik & Toy Floristikası" className="bg-[#1e0d16]">
                          Gəlinlik & Toy Floristikası
                        </option>
                        <option value="Korporativ Məkan & Tədbir Tərtibatı" className="bg-[#1e0d16]">
                          Korporativ Məkan & Tədbir Tərtibatı
                        </option>
                        <option value="VIP Hədiyyəlik Velvet Qutu" className="bg-[#1e0d16]">
                          VIP Hədiyyəlik Velvet Qutu
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#e9c176] pointer-events-none text-[20px]">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-caps-sm text-[11px] text-[#dfc3c8] uppercase tracking-wider block font-semibold" htmlFor="targetDate">
                        İstədiyiniz Tarix
                      </label>
                      <input
                        id="targetDate"
                        type="date"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className="w-full bg-[#180a11] text-[#f8f2eb] border border-[#5d3240] focus:border-[#e9c176] px-4 py-3.5 rounded-lg text-sm outline-none transition-colors shadow-inner [color-scheme:dark]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps-sm text-[11px] text-[#dfc3c8] uppercase tracking-wider block font-semibold" htmlFor="targetTime">
                        İstədiyiniz Saat Aralığı
                      </label>
                      <div className="relative">
                        <select
                          id="targetTime"
                          value={targetTime}
                          onChange={(e) => setTargetTime(e.target.value)}
                          className="w-full appearance-none bg-[#180a11] text-[#f8f2eb] border border-[#5d3240] focus:border-[#e9c176] px-4 py-3.5 rounded-lg text-sm outline-none transition-colors shadow-inner cursor-pointer"
                        >
                          <option value="asap" className="bg-[#1e0d16]">Təcili (Növbəti 60-90 dəqiqə)</option>
                          <option value="morning" className="bg-[#1e0d16]">Səhər (09:00 - 12:00)</option>
                          <option value="afternoon" className="bg-[#1e0d16]">Günorta (12:00 - 17:00)</option>
                          <option value="evening" className="bg-[#1e0d16]">Axşam (17:00 - 21:00)</option>
                          <option value="night" className="bg-[#1e0d16]">Gecə Sürprizi (21:00 - 02:00)</option>
                          <option value="specific" className="bg-[#1e0d16]">Dəqiq vaxt (Floristlə təyin et)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#e9c176] pointer-events-none text-[20px]">
                          schedule
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Notes & Card Letter */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="font-label-caps-sm text-[11px] text-[#dfc3c8] uppercase tracking-wider font-semibold" htmlFor="clientNotes">
                        Xüsusi Qeydlər və Məktub Mətni
                      </label>
                      <span className="font-body-sm text-[12px] text-[#e9c176]/90">Qalliqrafik kart pulsuzdur</span>
                    </div>
                    <textarea
                      id="clientNotes"
                      rows={4}
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      placeholder="Gül rəngləri, sevimli sortlar və ya buketlə bərabər çatdırılacaq zərf daxilindəki şəxsi məktub mətni..."
                      className="w-full bg-[#180a11] text-[#f8f2eb] placeholder:text-[#dfc3c8]/40 border border-[#5d3240] focus:border-[#e9c176] px-4 py-3.5 rounded-lg text-sm outline-none transition-colors shadow-inner resize-y"
                    />
                  </div>

                  {/* Privacy / Anonymous Toggle */}
                  <div className="flex items-center gap-3 p-3.5 bg-[#1e0c14] border border-[#e9c176]/20 rounded-lg">
                    <input
                      id="anonymousGift"
                      type="checkbox"
                      checked={anonymousGift}
                      onChange={(e) => setAnonymousGift(e.target.checked)}
                      className="w-4 h-4 accent-[#89182c] rounded cursor-pointer"
                    />
                    <label className="font-body-sm text-[13px] text-[#f8f2eb] cursor-pointer select-none" htmlFor="anonymousGift">
                      <strong className="font-medium text-[#e9c176]">Anonim Çatdırılma:</strong> Göndərənin şəxsiyyəti heç bir halda alıcıya bildirilməsin.
                    </label>
                  </div>

                  {/* Submit CTA Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#89182c] to-[#600e1c] hover:from-[#a01d35] hover:to-[#731223] text-[#f8f2eb] border border-[#e9c176]/40 py-4 px-8 rounded-lg font-label-caps-lg text-[12px] tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(137,24,44,0.4)] hover:shadow-[0_4px_25px_rgba(233,193,118,0.3)] flex items-center justify-center gap-3 cursor-pointer font-semibold"
                    >
                      <span className="tracking-widest font-semibold">MÜRACİƏTİ GÖNDƏR</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>

                  {/* Reassurance Note */}
                  <div className="flex items-start gap-3 p-4 bg-[#200e17] border border-[#e9c176]/15 rounded-lg">
                    <span className="material-symbols-outlined text-[#e9c176] text-[20px] shrink-0 mt-0.5">verified</span>
                    <p className="font-body-sm text-[13px] text-[#dfc3c8] leading-snug">
                      Sifarişiniz dərhal fərdi floristimizə yönləndiriləcək və <strong className="text-[#e9c176]">10 dəqiqə ərzində</strong> təsdiq zəngi və ya WhatsApp təsdiq mesajı alacaqsınız.
                    </p>
                  </div>

                  {submitted && (
                    <div className="p-4 bg-[#89182c] text-[#f8f2eb] border border-[#e9c176] rounded-lg text-center font-body-md text-sm">
                      Təşəkkür edirik! Müraciətiniz qəbul olundu. Floristimiz 10 dəqiqə ərzində sizinlə əlaqə saxlayacaq.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right Column: Boutique Details & Map */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              {/* Central Atelier Card with 0505300369 */}
              <div className="bg-gradient-to-b from-[#26111a]/95 to-[#1c0c14]/95 backdrop-blur-xl border border-[#e9c176]/30 rounded-xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-caps-sm text-[11px] uppercase tracking-[0.22em] text-[#e9c176] font-semibold block mb-1">
                      Bakı Butik-Atelyesi
                    </span>
                    <h3 className="font-headline-sm text-2xl text-[#f8f2eb] font-normal">MƏRKƏZİ ATELYE</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#361723] border border-[#e9c176]/30 flex items-center justify-center text-[#e9c176]">
                    <span className="material-symbols-outlined text-[22px]">storefront</span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#e9c176] text-[20px] shrink-0 mt-1">pin_drop</span>
                    <div>
                      <span className="font-label-caps-sm text-[10px] text-[#dfc3c8]/70 uppercase block font-semibold">
                        Ünvan
                      </span>
                      <p className="font-body-md text-[14px] text-[#f8f2eb]">
                        Nizami küçəsi 48, Fəvvarələr Meydanı və Sahil bağı yaxınlığı, Bakı, Azərbaycan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#e9c176] text-[20px] shrink-0 mt-1">schedule</span>
                    <div>
                      <span className="font-label-caps-sm text-[10px] text-[#dfc3c8]/70 uppercase block font-semibold">
                        İş Saatları
                      </span>
                      <p className="font-body-md text-[14px] text-[#f8f2eb]">
                        24/7 Həftənin hər günü fasiləsiz xidmət və çatdırılma
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Badges using 0505300369 */}
                <div className="mt-8 pt-6 space-y-3 border-t border-[#e9c176]/15">
                  <a
                    className="w-full flex items-center justify-between p-3.5 bg-[#0f2e21]/80 hover:bg-[#133d2c] border border-emerald-500/40 text-emerald-200 rounded-lg transition-colors group cursor-pointer"
                    href="https://wa.me/994505300369"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[18px]">
                        <span className="material-symbols-outlined text-[18px]">chat</span>
                      </div>
                      <div className="text-left">
                        <span className="font-label-caps-sm text-[10px] tracking-wider uppercase block text-emerald-300 font-semibold">
                          WhatsApp VIP Sifariş Xətti
                        </span>
                        <span className="font-title-editorial text-[17px] font-semibold text-white">
                          050 530 03 69
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-emerald-300 group-hover:translate-x-1 transition-transform">
                      open_in_new
                    </span>
                  </a>

                  <a
                    className="w-full flex items-center justify-between p-3.5 bg-[#200e17] hover:bg-[#2b1320] border border-[#e9c176]/20 rounded-lg transition-colors group cursor-pointer"
                    href="tel:0505300369"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#381825] text-[#e9c176] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">call</span>
                      </div>
                      <div className="text-left">
                        <span className="font-label-caps-sm text-[10px] tracking-wider uppercase block text-[#dfc3c8]/70 font-semibold">
                          Birbaşa Əlaqə Zəngi
                        </span>
                        <span className="font-title-editorial text-[17px] font-medium text-[#f8f2eb]">
                          +994 (50) 530 03 69
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#e9c176] group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </a>

                  <a
                    className="w-full flex items-center justify-between p-3.5 bg-[#200e17] hover:bg-[#2b1320] border border-[#e9c176]/20 rounded-lg transition-colors group cursor-pointer"
                    href="mailto:info@roses-are-red.az"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#381825] text-[#e9c176] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">mail</span>
                      </div>
                      <div className="text-left">
                        <span className="font-label-caps-sm text-[10px] tracking-wider uppercase block text-[#dfc3c8]/70 font-semibold">
                          Fərdi Concierge
                        </span>
                        <span className="font-body-md text-[14px] text-[#f8f2eb]">info@roses-are-red.az</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#e9c176] group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </a>

                  <a
                    className="w-full flex items-center justify-between p-3.5 bg-[#200e17] hover:bg-[#2b1320] border border-[#e9c176]/20 rounded-lg transition-colors group cursor-pointer"
                    href="https://instagram.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#381825] text-[#e9c176] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                      </div>
                      <div className="text-left">
                        <span className="font-label-caps-sm text-[10px] tracking-wider uppercase block text-[#dfc3c8]/70 font-semibold">
                          Instagram Eksklüziv
                        </span>
                        <span className="font-body-md text-[14px] text-[#f8f2eb]">@roses.are.red.baku</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#e9c176] group-hover:translate-x-1 transition-transform">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>

              {/* Stylized Baku Map Preview Block */}
              <div className="bg-gradient-to-b from-[#26111a]/95 to-[#1c0c14]/95 backdrop-blur-xl border border-[#e9c176]/30 rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between mb-3 px-2">
                  <span className="font-label-caps-sm text-[11px] uppercase tracking-wider text-[#dfc3c8] font-semibold">
                    Atelyenin Xəritədə Yeri
                  </span>
                  <span className="font-label-caps-sm text-[11px] uppercase text-[#e9c176] font-semibold">
                    Baku • Central District
                  </span>
                </div>
                <div
                  className="w-full h-56 rounded-lg bg-cover bg-center relative overflow-hidden shadow-inner flex items-center justify-center border border-[#e9c176]/20"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBceiYUZgMjTG2XedDj3rC3hIBjo8pNGatlSul07VSQG9GGiOpcmwR63MhXBTdWbn-e0j2vu2Z_kFhofRXWo_Lr1P0g4swBFc0SRsXsStk8rvm4xH8AbzQbeuLlUmo1PW2iJYZxDdXPk-unSsSYOP44ZvsPgxzThrdy5LoZ8PRGBB6IfL48BcOPfR60GErDwFRe7Mlopi6wuvys6ZrIEl-YdMaK1YbWcOqqAiMHsgG2eCwBc5myqMeX')`,
                  }}
                >
                  <div className="absolute inset-0 bg-[#1b0a13]/35 mix-blend-multiply" />
                  <div className="relative flex flex-col items-center z-10">
                    <div className="px-3 py-1 bg-[#1a0a11] text-[#f8f2eb] border border-[#e9c176]/60 rounded-full shadow-2xl font-label-caps-sm text-[10px] font-semibold tracking-wider flex items-center gap-1.5 -mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#ffb2b9]" />
                      Roses Are Red Atelier
                    </div>
                    <span
                      className="material-symbols-outlined text-[#89182c] text-[38px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                  </div>
                </div>
                <div className="pt-3 px-2 flex items-center justify-between text-[#dfc3c8]">
                  <span className="font-body-sm text-[12px]">Fəvvarələr Meydanından 2 dəqiqəlik piyada məsafəsi</span>
                  <a
                    className="font-label-caps-sm text-[11px] text-[#e9c176] uppercase font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                    href="https://maps.google.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Marşrut qur <span className="material-symbols-outlined text-[14px]">directions</span>
                  </a>
                </div>
              </div>

              {/* Frequently Asked Questions (FAQ Accordion) */}
              <div className="bg-gradient-to-b from-[#26111a]/95 to-[#1c0c14]/95 backdrop-blur-xl border border-[#e9c176]/30 rounded-xl p-8 shadow-lg">
                <span className="font-label-caps-sm text-[11px] text-[#e9c176] uppercase tracking-[0.22em] block mb-2 font-semibold">
                  Müştəri Məlumatı
                </span>
                <h3 className="font-headline-sm text-2xl text-[#f8f2eb] mb-6 font-normal">Tez-tez Verilən Suallar</h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-[#1e0d16] border border-[#e9c176]/20 rounded-lg p-4 cursor-pointer hover:border-[#e9c176]/40 transition-colors"
                        onClick={() => toggleFaq(idx)}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-body-md text-[15px] font-medium text-[#f8f2eb]">{faq.q}</h4>
                          <span
                            className={`material-symbols-outlined text-[#e9c176] transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          >
                            expand_more
                          </span>
                        </div>
                        {isOpen && (
                          <div className="mt-3 pt-3 border-t border-[#e9c176]/15 text-[#dfc3c8] font-body-sm text-[13px] leading-relaxed animate-fade-in">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Values Strip / Trust Badges */}
      <section className="w-full bg-[#1b0c13] border-t border-[#e9c176]/15 py-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center gap-4 bg-[#25101a] border border-[#e9c176]/20 p-6 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-[32px] text-[#e9c176] shrink-0">flight_land</span>
              <div>
                <h4 className="font-label-caps-lg text-[12px] uppercase text-[#f8f2eb] tracking-wider font-semibold">
                  Birbaşa Hollandiyadan
                </h4>
                <p className="font-body-sm text-[13px] text-[#dfc3c8]/80 mt-1 font-light">
                  Həftədə 3 dəfə xüsusi iqlim nəzarətli təyyarə reysləri ilə gətirilən təzə çiçəklər.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#25101a] border border-[#e9c176]/20 p-6 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-[32px] text-[#e9c176] shrink-0">local_shipping</span>
              <div>
                <h4 className="font-label-caps-lg text-[12px] uppercase text-[#f8f2eb] tracking-wider font-semibold">
                  Özəl Ağ Əlcəkli Kuryer
                </h4>
                <p className="font-body-sm text-[13px] text-[#dfc3c8]/80 mt-1 font-light">
                  Hər bir kompozisiya su rezervuarında, dəbdəbəli geyimli kuryerlə təqdim edilir.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#25101a] border border-[#e9c176]/20 p-6 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-[32px] text-[#e9c176] shrink-0">palette</span>
              <div>
                <h4 className="font-label-caps-lg text-[12px] uppercase text-[#f8f2eb] tracking-wider font-semibold">
                  Müəllif Floristika Sənəti
                </h4>
                <p className="font-body-sm text-[13px] text-[#dfc3c8]/80 mt-1 font-light">
                  Avropa sertifikatlı usta floristlərin əl işi olan unikal rəng ahəngləri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
