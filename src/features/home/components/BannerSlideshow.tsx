"use client";

import { useState, useEffect } from "react";
import type { Banner } from "../types";

interface BannerSlideshowProps {
  banners: Banner[];
}

export function BannerSlideshow({ banners }: BannerSlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl select-none aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/5]">
      {banners.map((banner, i) => (
        <div
          key={banner.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: banner.gradient,
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? "auto" : "none",
          }}
        >
          <div className="flex flex-col justify-center h-full px-5 sm:px-10 md:px-16 max-w-xs sm:max-w-lg md:max-w-2xl">
            {banner.badge && (
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full mb-1.5 sm:mb-3 w-fit">
                {banner.badge}
              </span>
            )}
            <h2 className="text-base sm:text-2xl md:text-4xl font-black text-white mb-1 sm:mb-2 leading-tight">
              {banner.title}
            </h2>
            <p className="text-white/80 text-[11px] sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 line-clamp-2">
              {banner.subtitle}
            </p>
            <button className="bg-white text-gray-900 font-bold px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer w-fit text-xs sm:text-sm md:text-base">
              {banner.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all cursor-pointer ${
              i === current ? "w-4 h-1.5 sm:w-6 sm:h-2 bg-white" : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
