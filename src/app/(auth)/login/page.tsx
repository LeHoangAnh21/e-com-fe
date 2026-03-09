import type { Metadata } from "next";
import BrandPanel from "@/features/auth/components/BrandPanel";
import AuthCard from "@/features/auth/components/AuthCard";

export const metadata: Metadata = {
  title: "Đăng nhập | PeaMall",
  description:
    "Đăng nhập hoặc tạo tài khoản PeaMall để mua sắm hàng triệu sản phẩm chất lượng",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      {/* Left: Brand panel — hidden on mobile */}
      <BrandPanel />

      {/* Right: Auth form */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 lg:bg-white px-4 py-10 sm:px-8 lg:px-16">
        {/* Card wrapper: visible on mobile/tablet, transparent on desktop */}
        <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:shadow-none lg:border-none lg:bg-transparent lg:p-0">
          <AuthCard />
        </div>
      </div>
    </main>
  );
}
