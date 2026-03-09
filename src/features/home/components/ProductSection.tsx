import Link from "next/link";
import { ProductCard } from "@/components/common/ProductCard";
import type { Product } from "../types";

interface ProductSectionProps {
  title: string;
  emoji?: string;
  products: Product[];
  moreHref: string;
  moreButtonPosition?: "top" | "bottom";
  accentClass?: string;
  moreLinkClass?: string;
  bottomBtnClass?: string;
}

export function ProductSection({
  title,
  emoji,
  products,
  moreHref,
  moreButtonPosition = "top",
  accentClass = "bg-gradient-to-b from-orange-500 to-red-500",
  moreLinkClass = "text-orange-500 hover:text-orange-600",
  bottomBtnClass = "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600",
}: ProductSectionProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className={`w-1 h-7 rounded-full shrink-0 ${accentClass}`} />
          {emoji && <span className="text-xl sm:text-2xl">{emoji}</span>}
          <h2 className="text-lg sm:text-xl font-black text-gray-900">{title}</h2>
        </div>
        {moreButtonPosition === "top" && (
          <Link
            href={moreHref}
            className={`text-sm font-semibold transition-colors shrink-0 ${moreLinkClass}`}
          >
            Xem thêm →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {moreButtonPosition === "bottom" && (
        <div className="mt-8 text-center">
          <Link
            href={moreHref}
            className={`inline-block text-white font-bold px-10 py-3 rounded-full transition-all shadow-md hover:shadow-lg ${bottomBtnClass}`}
          >
            Xem thêm sản phẩm
          </Link>
        </div>
      )}
    </section>
  );
}
