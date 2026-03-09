import type { Metadata } from "next";
import { CreditCard } from "lucide-react";

export const metadata: Metadata = { title: "Ví trả sau | PeaMall" };

export default function CreditPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Quản lý ví trả sau</h1>
        <p className="text-sm text-gray-500 mt-1">Hạn mức, lịch sử và thanh toán ví trả sau</p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
          <CreditCard className="w-8 h-8 text-orange-500" />
        </div>
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Đang phát triển
        </h3>
        <p className="text-sm text-gray-400 max-w-xs">
          Tính năng ví trả sau sẽ sớm ra mắt.
        </p>
      </div>
    </div>
  );
}
