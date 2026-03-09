"use client";

import { useCountdown } from "@/hooks/useCountdown";
import type { FlashSaleProduct } from "../types";

interface FlashSaleCardProps {
  product: FlashSaleProduct;
}

export function FlashSaleCard({ product }: FlashSaleCardProps) {
  const { hours, minutes, seconds, isReady } = useCountdown(product.flashSaleDurationMs);
  const { name, price, originalPrice, discount, soldPercent, gradient, emoji, tag } = product;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group border border-gray-100">
      {/* Thumbnail */}
      <div className={`relative aspect-square bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-5xl">{emoji}</span>
        {tag && (
          <span className={`absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full text-white ${
            tag === "hot" ? "bg-red-500" : "bg-orange-500"
          }`}>
            {tag === "hot" ? "HOT" : "SALE"}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-xs text-gray-700 font-medium line-clamp-2 mb-2 group-hover:text-orange-500 transition-colors min-h-[2.5rem]">
          {name}
        </p>

        {/* Price */}
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-sm font-bold text-orange-500">{price.toLocaleString("vi-VN")}₫</span>
          <span className="text-xs bg-red-100 text-red-600 font-bold px-1.5 py-0.5 rounded-md">-{discount}%</span>
        </div>
        <p className="text-xs text-gray-400 line-through mb-2">{originalPrice.toLocaleString("vi-VN")}₫</p>

        {/* Countdown */}
        <div className="flex items-center gap-1 mb-2">
          {isReady ? (
            <div className="flex items-center gap-0.5 text-xs font-mono font-bold">
              <span className="bg-gray-900 text-white px-1 py-0.5 rounded">{hours}</span>
              <span className="text-gray-400">:</span>
              <span className="bg-gray-900 text-white px-1 py-0.5 rounded">{minutes}</span>
              <span className="text-gray-400">:</span>
              <span className="bg-gray-900 text-white px-1 py-0.5 rounded">{seconds}</span>
            </div>
          ) : (
            <div className="flex items-center gap-0.5 text-xs font-mono font-bold">
              <span className="bg-gray-200 text-gray-200 px-1 py-0.5 rounded">--</span>
              <span className="text-gray-300">:</span>
              <span className="bg-gray-200 text-gray-200 px-1 py-0.5 rounded">--</span>
              <span className="text-gray-300">:</span>
              <span className="bg-gray-200 text-gray-200 px-1 py-0.5 rounded">--</span>
            </div>
          )}
        </div>

        {/* Sold progress */}
        <div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
              style={{ width: `${soldPercent}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">{soldPercent}% đã bán</p>
        </div>
      </div>
    </div>
  );
}
