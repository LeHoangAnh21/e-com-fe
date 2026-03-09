import Link from "next/link";
import { Zap } from "lucide-react";
import { FlashSaleCard } from "./FlashSaleCard";
import type { FlashSaleProduct } from "../types";

interface FlashSaleProps {
  products: FlashSaleProduct[];
}

export function FlashSale({ products }: FlashSaleProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-1 h-7 rounded-full shrink-0 bg-gradient-to-b from-orange-500 to-red-500" />
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 fill-orange-500" />
          <h2 className="text-lg sm:text-xl font-black text-gray-900">Flash Sale</h2>
          <span className="text-xs bg-red-500 text-white font-bold px-2 py-0.5 rounded-full">HOT</span>
        </div>
        <Link
          href="/products?type=flash-sale"
          className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors shrink-0"
        >
          Xem thêm →
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {products.map((product) => (
          <FlashSaleCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
