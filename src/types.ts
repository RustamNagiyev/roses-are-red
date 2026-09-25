export interface Product {
  id: string;
  name: string;
  category: string;
  categoryKey: 'zodiac' | 'bridal' | 'vase' | 'hatbox' | 'peony' | 'celebration' | 'baby';
  subtitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  galleryImages?: string[];
  badge?: string;
  badgeType?: 'bestseller' | 'signature' | 'bridal' | 'season' | 'exclusive' | 'new' | 'gift' | 'baby';
  flowerDetails?: string;
  careGuide?: string;
  deliveryGuarantee?: string;
  code?: string;
  rating?: number;
  reviewsCount?: number;
  colorOptions?: { name: string; hex: string; bgClass: string }[];
  sizeOptions?: { name: string; flowers: string; price: number }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
  giftNote?: string;
  deliveryDate?: string;
  deliveryTime?: string;
  customPrice?: number;
}
