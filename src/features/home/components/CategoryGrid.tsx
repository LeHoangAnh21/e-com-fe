import type { Category } from "../types";

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-7 rounded-full bg-gradient-to-b from-amber-500 to-orange-500" />
        <h2 className="text-lg sm:text-xl font-black text-gray-900">Danh Mục Sản Phẩm</h2>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-4">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`/products?category=${cat.id}`}
            className="flex flex-col items-center gap-1.5 sm:gap-2 group cursor-pointer"
          >
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${cat.bgClass} flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all`}>
              <span className="text-2xl sm:text-3xl">{cat.emoji}</span>
            </div>
            <span className="text-xs text-gray-600 font-medium text-center leading-tight">{cat.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
