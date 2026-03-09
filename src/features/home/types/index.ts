export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  gradient: string; // CSS gradient string for inline style
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  bgClass: string; // Tailwind classes
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number; // %
  soldCount: number;
  totalStock: number;
  gradient: string; // Tailwind gradient classes for thumbnail
  emoji: string;
  rating: number;
  reviewCount: number;
  tag?: "hot" | "new" | "sale";
}

export interface FlashSaleProduct extends Product {
  soldPercent: number; // 0-100
  flashSaleDurationMs: number; // ms from mount time (avoids hydration issues)
}
