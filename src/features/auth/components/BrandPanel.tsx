import { ShoppingBagIcon } from "@/components/icons";

export default function BrandPanel() {
  const stats = [
    { value: "10M+", label: "Sản phẩm" },
    { value: "500K+", label: "Cửa hàng" },
    { value: "2M+", label: "Khách hàng" },
  ];

  return (
    <div className="hidden lg:flex lg:w-[45%] xl:w-1/2 relative bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 flex-col items-center justify-center p-12 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 rounded-full pointer-events-none" />

      {/* Shopping bag illustration */}
      <div className="absolute top-10 right-10 opacity-20">
        <ShoppingBagIcon width={120} height={120} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-orange-500 font-black text-2xl">S</span>
          </div>
          <span className="text-4xl font-black tracking-tight">ShopVN</span>
        </div>

        {/* Main tagline */}
        <h1 className="text-5xl font-bold leading-tight mb-5">
          Mua sắm
          <br />
          <span className="text-yellow-300">không giới hạn</span>
        </h1>

        <p className="text-white/80 text-base leading-relaxed mb-12 px-4">
          Hàng triệu sản phẩm chất lượng với giá tốt nhất. Giao hàng nhanh,
          đổi trả dễ dàng trong 30 ngày.
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["Giao hàng miễn phí", "Đổi trả 30 ngày", "Thanh toán an toàn"].map(
            (f) => (
              <span
                key={f}
                className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30"
              >
                ✓ {f}
              </span>
            )
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/15 rounded-2xl p-4 backdrop-blur-sm border border-white/20"
            >
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-white/70 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}
