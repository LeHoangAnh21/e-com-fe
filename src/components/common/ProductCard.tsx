import Link from "next/link";
import type { Product } from "@/features/home/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, originalPrice, discount, soldCount, gradient, emoji, rating, reviewCount, tag } = product;

  return (
    <Link href={`/products/${id}`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group overflow-hidden border border-gray-100 block">
      {/* Thumbnail */}
      <div className={`relative aspect-square bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-5xl">{emoji}</span>
        {tag && (
          <span className={`absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full text-white ${
            tag === "hot" ? "bg-red-500" : tag === "sale" ? "bg-orange-500" : "bg-green-500"
          }`}>
            {tag === "hot" ? "HOT" : tag === "sale" ? "SALE" : "NEW"}
          </span>
        )}
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-md">
          -{discount}%
        </span>
      </div>
      {/* Info */}
      <div className="p-3">
        <p className="text-sm text-gray-800 font-medium line-clamp-2 mb-2 group-hover:text-orange-500 transition-colors">{name}</p>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-base font-bold text-orange-500">{price.toLocaleString("vi-VN")}₫</span>
        </div>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className="line-through">{originalPrice.toLocaleString("vi-VN")}₫</span>
          <span>⭐ {rating} ({reviewCount.toLocaleString("vi-VN")})</span>
        </div>
        <div className="mt-1.5 text-xs text-gray-500">Đã bán {soldCount.toLocaleString("vi-VN")}</div>
      </div>
    </Link>
  );
}
