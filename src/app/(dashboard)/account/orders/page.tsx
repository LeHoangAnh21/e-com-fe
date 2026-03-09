import type { Metadata } from "next";
import { ShoppingBag } from "lucide-react";

export const metadata: Metadata = { title: "Đơn mua | PeaMall" };

export default function OrdersPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Đơn mua</h1>
        <p className="text-sm text-gray-500 mt-1">Lịch sử và trạng thái các đơn hàng</p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
          <ShoppingBag className="w-8 h-8 text-orange-500" />
        </div>
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Chưa có đơn hàng nào
        </h3>
        <p className="text-sm text-gray-400 max-w-xs">
          Bạn chưa đặt đơn hàng nào. Hãy khám phá hàng triệu sản phẩm trên PeaMall.
        </p>
      </div>
    </div>
  );
}
