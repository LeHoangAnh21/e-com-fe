import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BannerSlideshow } from "@/features/home/components/BannerSlideshow";
import { CategoryGrid } from "@/features/home/components/CategoryGrid";
import { FlashSale } from "@/features/home/components/FlashSale";
import { ProductSection } from "@/features/home/components/ProductSection";
import {
  BANNERS,
  CATEGORIES,
  FLASH_SALE_PRODUCTS,
  MOST_VIEWED_PRODUCTS,
  MOST_PURCHASED_PRODUCTS,
  SUGGESTION_PRODUCTS,
} from "@/features/home/data/mock";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <BannerSlideshow banners={BANNERS} />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white py-8 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <CategoryGrid categories={CATEGORIES} />
        </div>
      </div>

      {/* Flash Sale – orange/red */}
      <div className="bg-gradient-to-br from-orange-50 via-red-50 to-rose-50 py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <FlashSale products={FLASH_SALE_PRODUCTS} />
        </div>
      </div>

      {/* Most Viewed – blue/indigo */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <ProductSection
            title="Xem Nhiều Nhất"
            emoji="🔥"
            products={MOST_VIEWED_PRODUCTS}
            moreHref="/products?type=most-viewed"
            accentClass="bg-gradient-to-b from-blue-500 to-indigo-500"
            moreLinkClass="text-blue-500 hover:text-blue-600"
          />
        </div>
      </div>

      {/* Most Purchased – emerald/teal */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50 py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <ProductSection
            title="Mua Nhiều Nhất"
            emoji="🛍️"
            products={MOST_PURCHASED_PRODUCTS}
            moreHref="/products?type=most-purchased"
            accentClass="bg-gradient-to-b from-emerald-500 to-teal-500"
            moreLinkClass="text-emerald-500 hover:text-emerald-600"
          />
        </div>
      </div>

      {/* Suggestions – violet/purple */}
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <ProductSection
            title="Gợi Ý Hôm Nay"
            emoji="✨"
            products={SUGGESTION_PRODUCTS}
            moreHref="/products?type=suggestions"
            moreButtonPosition="bottom"
            accentClass="bg-gradient-to-b from-violet-500 to-purple-500"
            moreLinkClass="text-violet-500 hover:text-violet-600"
            bottomBtnClass="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
