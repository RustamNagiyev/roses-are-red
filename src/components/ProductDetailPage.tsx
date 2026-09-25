import React, { useState } from 'react';
import { Product, CartItem } from '../types';
import { COMPLEMENTARY_ITEMS } from '../data/products';

interface ProductDetailPageProps {
  product: Product;
  onAddToCart: (item: CartItem) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (id: string) => boolean;
  onNavigateHome: () => void;
  onNavigateCatalog: () => void;
  onAddComplementary: (name: string, price: number, image: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onNavigateHome,
  onNavigateCatalog,
  onAddComplementary,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    product.galleryImages && product.galleryImages.length > 0
      ? product.galleryImages[0]
      : product.image
  );
  const [activeThumb, setActiveThumb] = useState<number>(0);

  const sizeOptions = product.sizeOptions || [
    { name: 'Klassik', flowers: '25 Gül', price: product.price },
    { name: 'Böyük Grand', flowers: '51 Gül', price: Math.round(product.price * 1.58) },
    { name: 'Royal', flowers: '101 Gül', price: Math.round(product.price * 2.7) },
  ];

  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);
  const currentPrice = sizeOptions[selectedSizeIndex].price;
  const currentSizeName = `${sizeOptions[selectedSizeIndex].name} (${sizeOptions[selectedSizeIndex].flowers})`;

  const colorOptions = product.colorOptions || [
    { name: 'Dərin Şərab / Bordo Velvet', hex: '#89182C', bgClass: 'bg-[#89182C]' },
    { name: 'Qara Kadife (Onyx Velvet)', hex: '#15080C', bgClass: 'bg-[#15080C]' },
    { name: 'Krem İvory (Warm Ivory Velvet)', hex: '#E5E2DE', bgClass: 'bg-[#E5E2DE]' },
  ];
  const [selectedColor, setSelectedColor] = useState<string>(colorOptions[0].name);

  const [giftNote, setGiftNote] = useState<string>('');
  const [deliveryDate, setDeliveryDate] = useState<string>('2025-05-18');
  const [deliveryTime, setDeliveryTime] = useState<string>('afternoon');

  const gallery = product.galleryImages || [product.image];

  const handleAddToCart = () => {
    onAddToCart({
      product,
      quantity: 1,
      selectedSize: currentSizeName,
      selectedColor,
      giftNote,
      deliveryDate,
      deliveryTime,
      customPrice: currentPrice,
    });
  };

  const wish = isWishlisted(product.id);

  // WhatsApp VIP direct link with 0505300369
  const whatsappVIPLink = `https://wa.me/994505300369?text=${encodeURIComponent(
    `Salam! "${product.name}" (${currentSizeName}, ${currentPrice} ₼, Rəng: ${selectedColor}) sifariş etmək istəyirəm.${
      giftNote ? ` Təbrik qeydi: "${giftNote}".` : ''
    }`
  )}`;

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Breadcrumb Bar */}
      <div className="w-full bg-[#241318] border-b border-[#D4AF37]/15 px-6 lg:px-12 py-3.5">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 overflow-x-auto text-nowrap font-label-caps-sm text-[11px] uppercase tracking-[0.2em] text-[#DEBFC0]">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#FFB3B6] transition-colors cursor-pointer"
          >
            Ana Səhifə
          </button>
          <span className="text-[#D4AF37]/50">/</span>
          <button
            onClick={onNavigateCatalog}
            className="hover:text-[#FFB3B6] transition-colors cursor-pointer"
          >
            Kataloq
          </button>
          <span className="text-[#D4AF37]/50">/</span>
          <span className="text-[#DEBFC0]">{product.category}</span>
          <span className="text-[#D4AF37]/50">/</span>
          <span className="text-[#D4AF37] font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Main Editorial Stage: Split Columns */}
      <section className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 py-8 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Gallery & Staging */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Main Stage Container */}
            <div className="relative w-full aspect-[4/5] bg-[#15080C] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] rounded-xl border border-[#D4AF37]/30">
              {/* Badges Strip */}
              <div className="absolute top-5 left-5 z-20 flex flex-col sm:flex-row gap-2.5">
                <span className="px-3.5 py-1.5 bg-[#1C0D12]/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 font-label-caps-sm text-[10px] uppercase tracking-[0.24em] rounded-full shadow-lg font-semibold">
                  100% Ekvador Qızılgülləri
                </span>
                <span className="px-3.5 py-1.5 bg-[#89182C] text-[#F3DDE1] border border-[#FFB3B6]/30 font-label-caps-sm text-[10px] uppercase tracking-[0.24em] rounded-full shadow-lg font-semibold">
                  Bespoke Əl İşi
                </span>
              </div>

              {/* Main Showcase Image */}
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Artistic Watermark Stamp */}
              <div className="absolute bottom-6 right-6 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#1C0D12]/85 backdrop-blur-md border border-[#D4AF37]/40 rounded-full shadow-md">
                <span className="material-symbols-outlined text-[14px] text-[#D4AF37]">verified</span>
                <span className="font-label-caps-sm text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
                  Baku Atelier N° 104
                </span>
              </div>
            </div>

            {/* Thumbnails Grid (4 Curated Perspectives) */}
            <div className="grid grid-cols-4 gap-3.5 sm:gap-4">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedImage(img);
                    setActiveThumb(idx);
                  }}
                  className={`group relative aspect-square bg-[#291218] rounded-lg overflow-hidden shadow-md transition-all cursor-pointer ${
                    activeThumb === idx
                      ? 'ring-2 ring-[#D4AF37] border border-[#D4AF37]/40'
                      : 'border border-[#D4AF37]/25 hover:border-[#D4AF37]/60'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Perspektiv ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute inset-0 bg-[#89182C]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>

            {/* Master Florist Atelier Note Card */}
            <div className="w-full bg-[#291218] border border-[#D4AF37]/25 p-6 rounded-xl shadow-lg flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#3E1A23] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px] text-[#D4AF37]">eco</span>
              </div>
              <div className="flex flex-col space-y-1">
                <h4 className="font-title-editorial text-[18px] text-[#F3DDE1] font-medium">Baş Floristin Qeydi</h4>
                <p className="font-body-sm text-[13px] text-[#DEBFC0] leading-relaxed">
                  «Hər bir qızılgül Ekvadorun yüksək dağlıq plantasiyalarından xüsusi olaraq seçilir. Fransız velvet qutumuz isə çiçəklərin nəm balansını 7 günə qədər qoruyan xüsusi mineral oazis texnologiyası ilə təchiz olunub.»
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Customization & Purchase */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {/* Header & Identity */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-label-caps-sm text-[11px] uppercase tracking-[0.24em] text-[#D4AF37] font-semibold">
                  PREMIUM VELVET HAT BOX SERİYASI
                </span>
                <span className="font-label-caps-sm text-[10px] uppercase tracking-widest text-[#FFB3B6] px-2.5 py-0.5 bg-[#291218] border border-[#D4AF37]/30 rounded-full font-semibold">
                  KOD: {product.code || 'RR-884'}
                </span>
              </div>
              <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#F3DDE1] leading-tight font-normal">
                {product.name}
              </h1>

              {/* Reviews & Social Proof */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex items-center text-[#D4AF37] text-[14px]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined text-[18px] text-[#D4AF37]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="font-body-sm text-[13px] text-[#DEBFC0]">
                  5.0 (48 rəy) • <strong className="text-[#D4AF37] font-semibold">Bakı daxilində ən çox seçilən</strong>
                </span>
              </div>
            </div>

            {/* Dynamic Price Display */}
            <div className="bg-[#291218] border border-[#D4AF37]/30 p-5 rounded-xl shadow-lg flex items-baseline justify-between">
              <div className="flex flex-col">
                <span className="font-label-caps-sm text-[10px] uppercase tracking-widest text-[#DEBFC0] font-semibold">
                  Yekun Qiymət
                </span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="font-headline-lg text-3xl sm:text-4xl text-[#FFB3B6] font-semibold leading-none">
                    {currentPrice.toFixed(2)} ₼
                  </span>
                  {product.originalPrice && (
                    <span className="font-body-sm text-[14px] text-[#DEBFC0]/60 line-through">
                      {(product.originalPrice * (currentPrice / product.price)).toFixed(2)} ₼
                    </span>
                  )}
                </div>
              </div>
              <span className="font-label-caps-sm text-[10px] uppercase tracking-wider text-[#D4AF37] bg-[#3E1A23] border border-[#D4AF37]/30 px-3 py-1 rounded-full font-semibold">
                ƏDV daxildir
              </span>
            </div>

            {/* Luxury Editorial Description */}
            <p className="font-body-md text-[14px] sm:text-[15px] text-[#DEBFC0] leading-relaxed font-light">
              {product.description}
            </p>

            {/* Configuration Step 1: Size Selector */}
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between items-center">
                <label className="font-label-caps-lg text-[12px] uppercase tracking-wider text-[#F3DDE1] font-semibold">
                  1. Ölçü və Tərkib Seçimi
                </label>
                <span className="font-body-sm text-[12px] text-[#D4AF37] font-medium">
                  {currentSizeName}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {sizeOptions.map((opt, idx) => {
                  const isSelected = selectedSizeIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`text-left p-3.5 rounded-lg shadow-md flex flex-col justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#291218] border border-[#D4AF37] ring-1 ring-[#D4AF37]'
                          : 'bg-[#241318] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:bg-[#291218]'
                      }`}
                    >
                      <span className="font-body-sm text-[13px] font-semibold text-[#F3DDE1]">
                        {opt.name}
                      </span>
                      <span className="font-body-sm text-[11px] text-[#DEBFC0]">
                        {opt.flowers}
                      </span>
                      <span className="font-price-editorial text-[17px] text-[#D4AF37] font-semibold mt-2">
                        {opt.price} ₼
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Configuration Step 2: Box Color Variant Selector */}
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between items-center">
                <label className="font-label-caps-lg text-[12px] uppercase tracking-wider text-[#F3DDE1] font-semibold">
                  2. Velvet Qutu Rəngi
                </label>
                <span className="font-body-sm text-[12px] text-[#D4AF37] font-medium">
                  {selectedColor}
                </span>
              </div>
              <div className="flex items-center gap-4">
                {colorOptions.map((c, i) => {
                  const isSelected = selectedColor === c.name;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                      style={{ backgroundColor: c.hex }}
                      className={`w-11 h-11 rounded-full shadow-lg transition-all flex items-center justify-center cursor-pointer ${
                        isSelected
                          ? 'ring-2 ring-offset-2 ring-offset-[#1C0D12] ring-[#D4AF37] scale-105'
                          : 'border border-[#D4AF37]/40 hover:scale-105 opacity-80 hover:opacity-100'
                      }`}
                    >
                      {isSelected && (
                        <span
                          className={`material-symbols-outlined text-[18px] ${
                            c.hex === '#E5E2DE' ? 'text-[#1C0D12]' : 'text-[#F3DDE1]'
                          }`}
                        >
                          check
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Configuration Step 3: Personalized Note */}
            <div className="flex flex-col space-y-2.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="gift-note-input"
                  className="font-label-caps-lg text-[12px] uppercase tracking-wider text-[#F3DDE1] font-semibold"
                >
                  3. Şəxsi Təbrik Qeydi
                </label>
                <span className="font-label-caps-sm text-[10px] text-[#D4AF37] uppercase tracking-wider">
                  Ödənişsiz Kalliqrafiya
                </span>
              </div>
              <div className="relative">
                <textarea
                  id="gift-note-input"
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="Qutu içərisində zərfə qoyulacaq təbrik sözlərinizi qeyd edin (məsələn: 'Sevgi ilə, həmişə səninlə...')"
                  rows={3}
                  className="w-full bg-[#291218] border border-[#D4AF37]/30 text-[#F3DDE1] font-body-sm text-[13px] p-4 rounded-xl shadow-inner placeholder:text-[#DEBFC0]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] resize-none"
                />
                <div className="absolute bottom-2.5 right-3 flex items-center gap-1 text-[#D4AF37] pointer-events-none">
                  <span className="material-symbols-outlined text-[16px]">edit_note</span>
                  <span className="font-label-caps-sm text-[10px] uppercase font-semibold">Əllə Yazılır</span>
                </div>
              </div>
            </div>

            {/* Configuration Step 4: Delivery Date & Time Window */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex flex-col space-y-1.5">
                <label className="font-label-caps-sm text-[11px] uppercase tracking-wider text-[#F3DDE1]">
                  Çatdırılma Tarixi
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full bg-[#291218] border border-[#D4AF37]/30 text-[#F3DDE1] font-body-sm text-[13px] px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] [color-scheme:dark]"
                  />
                  <span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-[#D4AF37] pointer-events-none">
                    calendar_today
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="font-label-caps-sm text-[11px] uppercase tracking-wider text-[#F3DDE1]">
                  Saat Aralığı (24/7)
                </label>
                <div className="relative">
                  <select
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="w-full bg-[#291218] border border-[#D4AF37]/30 text-[#F3DDE1] font-body-sm text-[13px] px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] appearance-none cursor-pointer"
                  >
                    <option value="express" className="bg-[#1C0D12]">Ekspress (2 saat ərzində dərhal)</option>
                    <option value="morning" className="bg-[#1C0D12]">Səhər (09:00 — 12:00)</option>
                    <option value="afternoon" className="bg-[#1C0D12]">Günorta (12:00 — 16:00)</option>
                    <option value="evening" className="bg-[#1C0D12]">Axşam (16:00 — 20:00)</option>
                    <option value="night" className="bg-[#1C0D12]">Gecə Sürprizi (20:00 — 02:00)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-3 text-[20px] text-[#D4AF37] pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Purchase Buttons */}
            <div className="flex flex-col space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-[#89182C] to-[#60101E] hover:from-[#A81E37] hover:to-[#731324] text-[#F3DDE1] border border-[#D4AF37]/40 py-4 px-6 rounded-xl font-label-caps-lg text-[12px] uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(137,24,44,0.5)] hover:shadow-[0_6px_25px_rgba(137,24,44,0.7)] transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#D4AF37]">local_mall</span>
                  <span>İNDİ SİFARİŞ ET ({currentPrice} ₼)</span>
                </button>
                <button
                  type="button"
                  onClick={() => onToggleWishlist(product)}
                  aria-label="İstək siyahısına əlavə et"
                  className={`w-14 h-14 bg-[#291218] border transition-colors rounded-xl shadow-md flex items-center justify-center cursor-pointer ${
                    wish
                      ? 'border-[#D4AF37] text-[#D4AF37]'
                      : 'border-[#D4AF37]/30 text-[#DEBFC0] hover:border-[#D4AF37] hover:text-[#D4AF37]'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[24px]"
                    style={{ fontVariationSettings: wish ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    favorite
                  </span>
                </button>
              </div>

              {/* WhatsApp One-Click VIP Order with 0505300369 */}
              <a
                href={whatsappVIPLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#15080C] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#F3DDE1] py-3.5 px-6 rounded-xl font-label-caps-sm text-[11px] uppercase tracking-[0.2em] shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-[#D4AF37]">chat</span>
                <span>WhatsApp ilə 1 Kliklə VIP Sifariş (050 530 03 69)</span>
              </a>
            </div>

            {/* Boutique Trust Value Grid */}
            <div className="grid grid-cols-3 gap-2.5 pt-2 text-center">
              <div className="bg-[#291218] border border-[#D4AF37]/25 p-3 rounded-lg flex flex-col items-center">
                <span className="material-symbols-outlined text-[#D4AF37] text-[20px] mb-1">local_shipping</span>
                <span className="font-label-caps-sm text-[10px] uppercase text-[#F3DDE1] font-semibold">24/7 Çatdırılma</span>
                <span className="font-body-sm text-[10px] text-[#DEBFC0]">Bakı üzrə xüsusi kuryer</span>
              </div>
              <div className="bg-[#291218] border border-[#D4AF37]/25 p-3 rounded-lg flex flex-col items-center">
                <span className="material-symbols-outlined text-[#D4AF37] text-[20px] mb-1">photo_camera</span>
                <span className="font-label-caps-sm text-[10px] uppercase text-[#F3DDE1] font-semibold">Foto Təsdiq</span>
                <span className="font-body-sm text-[10px] text-[#DEBFC0]">Göndərmədən əvvəl video</span>
              </div>
              <div className="bg-[#291218] border border-[#D4AF37]/25 p-3 rounded-lg flex flex-col items-center">
                <span className="material-symbols-outlined text-[#D4AF37] text-[20px] mb-1">lock</span>
                <span className="font-label-caps-sm text-[10px] uppercase text-[#F3DDE1] font-semibold">Təhlükəsizlik</span>
                <span className="font-body-sm text-[10px] text-[#DEBFC0]">Anonim çatdırılma imkanı</span>
              </div>
            </div>

            {/* Bespoke Accordion Modules */}
            <div className="flex flex-col space-y-2.5 pt-4">
              <details className="group bg-[#291218] border border-[#D4AF37]/25 rounded-xl shadow-md overflow-hidden" open>
                <summary className="flex items-center justify-between p-4 cursor-pointer font-title-editorial text-[16px] text-[#F3DDE1] select-none">
                  <span>Gülün Tərkibi & Mənşəyi</span>
                  <span className="material-symbols-outlined text-[#D4AF37] group-open:rotate-180 transition-transform text-[20px]">
                    keyboard_arrow_down
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-1 font-body-sm text-[13px] text-[#DEBFC0] leading-relaxed border-t border-[#D4AF37]/15">
                  {product.flowerDetails ||
                    'Kompozisiyada Ekvadorun Kito vadisindən birbaşa gətirilmiş elit Freedom və Explorer qırmızı qızılgülləri, tünd bordo ranunkuluslar və dekorativ evkalipt yarpaqları istifadə olunur. Qutunun bazasında yüksək keyfiyyətli fransız kadife parça və qızılı zərli loqo relyefi yer alır.'}
                </div>
              </details>

              <details className="group bg-[#291218] border border-[#D4AF37]/25 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer font-title-editorial text-[16px] text-[#F3DDE1] select-none">
                  <span>Qulluq Qaydaları & Ömür Müddəti</span>
                  <span className="material-symbols-outlined text-[#D4AF37] group-open:rotate-180 transition-transform text-[20px]">
                    keyboard_arrow_down
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-1 font-body-sm text-[13px] text-[#DEBFC0] leading-relaxed border-t border-[#D4AF37]/15">
                  {product.careGuide ||
                    'Gülləri birbaşa günəş şüalarından və istilik mənbələrindən uzaq tutun. Hər iki gündən bir oazis süngərinə güllərin arxasından 50-80 ml sərin filtrasiya olunmuş su əlavə edin. Bu qaydalara əməl edildikdə kompozisiya 10-14 gün təravətini qoruyur.'}
                </div>
              </details>

              <details className="group bg-[#291218] border border-[#D4AF37]/25 rounded-xl shadow-md overflow-hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer font-title-editorial text-[16px] text-[#F3DDE1] select-none">
                  <span>Çatdırılma və Məxfilik Zəmanəti</span>
                  <span className="material-symbols-outlined text-[#D4AF37] group-open:rotate-180 transition-transform text-[20px]">
                    keyboard_arrow_down
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-1 font-body-sm text-[13px] text-[#DEBFC0] leading-relaxed border-t border-[#D4AF37]/15">
                  {product.deliveryGuarantee ||
                    'Sifarişiniz xüsusi termo-izolyasiyalı avtomobillərdə təhlükəsiz çatdırılır. Sifarişçinin istəyi ilə alıcıya göndərən şəxsin adı gizli saxlanıla və sürpriz təşkil edilə bilər. Təhvil verildikdən dərhal sonra SMS və WhatsApp bildirişi alacaqsınız.'}
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Section Divider Banner */}
      <section className="w-full bg-[#241318] border-y border-[#D4AF37]/20 py-12 px-6 lg:px-12 my-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          <div className="flex flex-col items-center space-y-2">
            <span className="font-headline-sm text-xl sm:text-2xl text-[#D4AF37] font-normal">01 / Seçim</span>
            <p className="font-body-sm text-[13px] text-[#DEBFC0] max-w-xs">
              Hər bir gül qönçəsi tam açılma anında əl ilə dərilir və dərhal Bakı studiyamıza çatdırılır.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <span className="font-headline-sm text-xl sm:text-2xl text-[#D4AF37] font-normal">02 / Tərtibat</span>
            <p className="font-body-sm text-[13px] text-[#DEBFC0] max-w-xs">
              Avropa sertifikatlı baş floristlər hər kompozisiyanı fərdi memarlıq sənəti kimi yığır.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <span className="font-headline-sm text-xl sm:text-2xl text-[#D4AF37] font-normal">03 / Təqdimat</span>
            <p className="font-body-sm text-[13px] text-[#DEBFC0] max-w-xs">
              Ağ əlcəkli şəxsi kuryer təqdimatı və fərdi zərfdə möhürlənmiş kalliqrafik məktub.
            </p>
          </div>
        </div>
      </section>

      {/* Complementary Additions: 'Bu Kompozisiyanı Tamamlayanlar' matching Image 5 */}
      <section className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-label-caps-sm text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              ZÖVQLÜ AHƏNG
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl text-[#F3DDE1] mt-1 font-normal">
              Bu Kompozisiyanı Tamamlayanlar
            </h2>
          </div>
          <button
            onClick={onNavigateCatalog}
            className="font-label-caps-sm text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] hover:text-[#FFB3B6] transition-colors flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            <span>Bütün Əlavələri Gör</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* 3 Complementary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPLEMENTARY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-[#291218] border border-[#D4AF37]/25 rounded-xl shadow-lg overflow-hidden hover:border-[#D4AF37]/70 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] bg-[#15080C] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#1C0D12]/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 font-label-caps-sm text-[10px] uppercase tracking-wider rounded-full font-semibold">
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <span className="font-label-caps-sm text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {item.tag}
                  </span>
                  <h3 className="font-title-editorial text-[18px] text-[#F3DDE1] mt-1 font-medium group-hover:text-[#FFB3B6] transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-body-sm text-[13px] text-[#DEBFC0] mt-1.5 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#D4AF37]/15">
                  <span className="font-price-editorial text-xl text-[#D4AF37] font-semibold">
                    {item.price.toFixed(2)} ₼
                  </span>
                  <button
                    type="button"
                    onClick={() => onAddComplementary(item.name, item.price, item.image)}
                    className="px-4 py-2 bg-[#3E1A23] hover:bg-[#89182C] text-[#F3DDE1] border border-[#D4AF37]/30 hover:border-[#D4AF37] font-label-caps-sm text-[11px] uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer font-semibold"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#D4AF37]">add</span>
                    <span>Əlavə Et</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
