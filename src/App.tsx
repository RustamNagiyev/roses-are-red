import { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandManifesto } from './components/BrandManifesto';
import { CategoriesRow } from './components/CategoriesRow';
import { FeaturedGrid } from './components/FeaturedGrid';
import { TrustStrip } from './components/TrustStrip';
import { InstagramGallery } from './components/InstagramGallery';
import { ConciergeBanner } from './components/ConciergeBanner';
import { Footer } from './components/Footer';
import { CatalogPage } from './components/CatalogPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'catalog' | 'product' | 'about' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);

  // Initial cart matching reference badge: 2 items, total 280.00 ₼
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Kraliça Qırmızı Kadife Qutu (240 ₼)
      quantity: 1,
      selectedSize: 'Klassik (25 Gül)',
      selectedColor: 'Dərin Şərab / Bordo Velvet',
      customPrice: 240,
    },
    {
      product: PRODUCTS[8], // Mini complementary box (40 ₼ to reach exact 280.00 ₼)
      quantity: 1,
      selectedSize: 'Hədiyyə Əlavəsi',
      customPrice: 40,
    },
  ]);

  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Cart calculations
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => {
    const p = item.customPrice || item.product.price;
    return acc + p * item.quantity;
  }, 0);

  // Wishlist handlers
  const isWishlisted = (id: string) => wishlist.some((item) => item.id === id);

  const handleToggleWishlist = (product: Product) => {
    if (isWishlisted(product.id)) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`"${product.name}" istək siyahısından çıxarıldı`);
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast(`"${product.name}" istək siyahısına əlavə olundu`);
    }
  };

  // Add to Cart handlers
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.product.id === product.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx].quantity += 1;
        return next;
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          customPrice: product.price,
        },
      ];
    });
    showToast(`"${product.name}" səbətə əlavə olundu`);
  };

  const handleAddCartItem = (newItem: CartItem) => {
    setCart((prev) => [...prev, newItem]);
    showToast(`"${newItem.product.name}" səbətə əlavə olundu`);
    setCartOpen(true);
  };

  const handleAddComplementary = (name: string, price: number, image: string) => {
    setCart((prev) => [
      ...prev,
      {
        product: {
          id: `comp-${Date.now()}`,
          name,
          category: 'Zövqlü Əlavə',
          categoryKey: 'vase',
          subtitle: 'Eksklüziv hədiyyə əlavəsi',
          description: '',
          price,
          image,
        },
        quantity: 1,
        customPrice: price,
      },
    ]);
    showToast(`"${name}" (${price} ₼) səbətə əlavə edildi`);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCart((prev) => {
      const next = [...prev];
      next[index].quantity = newQty;
      return next;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    showToast('Məhsul səbətdən silindi');
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handleSelectCategoryFromHome = (catKey: string) => {
    setSelectedCategory(catKey);
    setCurrentPage('catalog');
  };

  return (
    <div className="min-h-screen bg-[#1B0D11] text-[#FDF9F3] flex flex-col relative overflow-x-hidden selection:bg-[#89182C] selection:text-[#FDF9F3]">
      {/* Atmosphere glows */}
      <div className="pointer-events-none fixed -top-40 left-1/4 w-[600px] h-[600px] bg-[#89182C]/15 rounded-full blur-[140px] z-0" />
      <div className="pointer-events-none fixed top-[600px] right-0 w-[550px] h-[550px] bg-[#60101E]/15 rounded-full blur-[160px] z-0" />
      <div className="pointer-events-none fixed bottom-0 left-[-100px] w-[600px] h-[600px] bg-[#89182C]/10 rounded-full blur-[160px] z-0" />

      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => {
          if (page === 'catalog') setSelectedCategory('all');
          setCurrentPage(page);
        }}
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Viewport Routing */}
      <main className="flex-1 w-full pt-28 relative z-10">
        {currentPage === 'home' && (
          <>
            <Hero
              onExploreCatalog={() => {
                setSelectedCategory('all');
                setCurrentPage('catalog');
              }}
              onCustomOrder={() => setCurrentPage('contact')}
            />
            <BrandManifesto />
            <CategoriesRow onSelectCategory={handleSelectCategoryFromHome} />
            <FeaturedGrid
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isWishlisted={isWishlisted}
              onViewAll={() => {
                setSelectedCategory('all');
                setCurrentPage('catalog');
              }}
            />
            <TrustStrip />
            <InstagramGallery />
            <ConciergeBanner />
          </>
        )}

        {currentPage === 'catalog' && (
          <CatalogPage
            products={PRODUCTS}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            onNavigateHome={() => setCurrentPage('home')}
          />
        )}

        {currentPage === 'product' && (
          <ProductDetailPage
            product={selectedProduct}
            onAddToCart={handleAddCartItem}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            onNavigateHome={() => setCurrentPage('home')}
            onNavigateCatalog={() => setCurrentPage('catalog')}
            onAddComplementary={handleAddComplementary}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigateCatalog={() => {
              setSelectedCategory('all');
              setCurrentPage('catalog');
            }}
            onNavigateContact={() => setCurrentPage('contact')}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer
        onNavigateCategory={(key) => {
          setSelectedCategory(key);
          setCurrentPage('catalog');
        }}
        onNavigatePage={(page) => {
          if (page === 'catalog') setSelectedCategory('all');
          setCurrentPage(page);
        }}
      />

      {/* Floating WhatsApp Quick Action Button with 0505300369 */}
      <a
        href="https://wa.me/994505300369"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp Concierge: 050 530 03 69"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-[#89182C] to-[#2D141A] border border-[#D4AF37] text-[#FDF9F3] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group cursor-pointer"
      >
        <span className="material-symbols-outlined text-[28px] text-[#D4AF37] group-hover:text-[#FDF9F3] transition-colors">
          chat
        </span>
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-[#220E13] border border-[#D4AF37]/40 text-[#FDF9F3] text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          050 530 03 69
        </span>
      </a>

      {/* Slide-over Drawers & Modals */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCart([])}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={(id) => {
          setWishlist((prev) => prev.filter((i) => i.id !== id));
          showToast('İstək siyahısından silindi');
        }}
        onAddToCart={handleAddToCart}
        onSelectProduct={handleSelectProduct}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#291218] border border-[#D4AF37] text-[#FDF9F3] px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in">
          <span className="material-symbols-outlined text-[#D4AF37] text-[20px]">check_circle</span>
          <span className="font-body-sm text-[13px]">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
